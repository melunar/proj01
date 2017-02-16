/**
 * Created by Leon.z on 2016/03/18.
 */
define([
    "base.self",
    'jquery.pagination',
    "plupload"
], function() {
    /**
     * [_setBatchUplaodPanel 批量导入公用函数]
     * @type {Object}
     */
    var _setBatchUplaodPanel = {
            options:{
                browse_button: "bulkImport"
            },
            "uploading":false,
            "callback": jQuery.noop, //点击上传回调函数
            "ExcelTemplateUrl": "", //下载模板路径
            "url":"",
            "type":"",
            "defaultH":0,
            "defaultTop":0,
            BatchUplaod: function(upobj) {
                var self = this;
                jQuery(".import-model .excel-name").val("");
                if(self.upload){
                    self.upload.destroy();
                    self.upload = null;
                }
                if (!upobj) {
                    return;
                }
                self.callback = upobj.callback;
                self.ExcelTemplateUrl = upobj.ExcelTemp;
                self.type =  upobj.type;
                self.url = upobj.url;
                if(upobj.type==="point"){
                    jQuery(".import-model").find(".input-number").hide();
                    jQuery(".import-model").find(".step").text("二");
                }
                if(upobj.type==="camera"){
                    jQuery(".import-model").find(".input-number").show();
                    jQuery(".import-model").find(".step").text("三");
                }
                jQuery(".commonLayer").fadeIn(200, function() {
                    jQuery(".import-model").show().attr("data-upType", upobj.type);
                    self.initUpload();
                    self._bindUpEvt();
                    self.bindSelfEvt(jQuery(".import-model"));
                    self.defaultH = jQuery(window).height();
                });
            },
            initUpload: function() {
                var self = this;
                // 上传控件
                self.upload = new plupload.Uploader({
                    "runtimes": "flash,html5,html4",
                    "browse_button":"chooseLocalFile",
                    "multi_selection": false,
                    "url":self.url +"?_="+(new Date()).getTime(),
                    "file_data_name": "file",
                    "filters": [{
                        title: "Excel choseSingle",
                        //只能选择excel相关文件
                        extensions:"xls,xlsx"
                    }],
                    "multipart_params":"",
                    "max_file_size": "9gb",
                    "flash_swf_url": "/libs/plupload/plupload.flash.swf",
                    "silverlight_xap_url": "/libs/plupload/plupload.silverlight.xap"
                });
                self.upload.init();

            },
            _bindUpEvt:function(){
                var self = this;
                // 监听是否正在上传
                self.upload.bind('UploadComplete', function(up, files) {
                    self.uploading = false;
                });
                // 文件添加后 渲染文件到上传列表
                self.upload.bind('FilesAdded', function(up, files) {
                    jQuery(".import-model .excel-name").val(files[0].name);
                    jQuery(".import-cancel").find(".button.blue").removeClass("disabled");
                    up.settings.multipart_params = {
                        "countyNumber": jQuery(".orginCode").val()
                    };
                });
                // 处理文件上传进度
                self.upload.bind('UploadProgress', function(up, file) {
                    self.uploading = true;
                    jQuery(".import-model").hide();
                    jQuery(".uploading").show();
                    jQuery(".uploadError").hide();
                    jQuery(".uploadSuccess").hide();
                    if(self.isFileUploaded){
                        jQuery(".import-model").hide();
                        jQuery(".uploadSuccess").show();
                        jQuery(".uploading").hide();
                        jQuery(".uploadError").hide();
                    }
                });
                //上传完成
                self.upload.bind('FileUploaded', function(up, file, res) {

                    if(res &&　JSON.parse(res.response).code===500){
                        notify.error(JSON.parse(res.response).data.message);
                        jQuery(".import-model").hide();
                        jQuery(".uploading").hide();
                        jQuery(".uploadError").show();
                        jQuery(".uploadSuccess").hide();
                        self.bindSelfEvt(jQuery(".uploadError"));
                        return;
                    }
                    self.isFileUploaded = true;
                    jQuery(".import-model").hide();
                    jQuery(".uploadSuccess").show();
                    jQuery(".uploading").hide();
                    jQuery(".uploadError").hide();
                    setTimeout(function(){
                        jQuery(".uploadSuccess").hide();
                        jQuery(".commonLayer").fadeOut(200);
                        //隐藏导航
                        window.top.showHideNav("show");
                        self.callback && self.callback(file,res);
                        self.upload.destroy();
                        self.upload = null;
                    },1000);
                });
                //上传错误
                self.upload.bind('Error', function(up, file) {
                    jQuery(".import-model").hide();
                    jQuery(".uploadError").show();
                    jQuery(".uploadSuccess").hide();
                    self.bindSelfEvt(jQuery(".uploadError"));
                    self.showUploadError(file.code);
                });
                jQuery(window).resize(function(event) {
                    var currHeight = jQuery(window).height();
                    if(currHeight<self.defaultH){
                        jQuery(".plupload").css("top",self.defaultTop-20+"px");
                    }
                    if(currHeight>=self.defaultH){
                        jQuery(".plupload").css("top",self.defaultTop+"px");
                    }
                });
            },
            _checkFormData: function(callback) {
                var self = this,
                    currCodeVal = jQuery(".orginCode").val(),
                    currExcelVal = jQuery(".excel-name").val();
                if (self.type === "camera") {
                    if (currCodeVal === "") {
                        notify.warn("区级编号不能为空！");
                        jQuery(".import-cancel").find(".button.blue").addClass("disabled");
                        return false;
                    } else if (currCodeVal.length < 2) {
                        notify.warn("区级编号必须为2位！");
                        jQuery(".import-cancel").find(".button.blue").addClass("disabled");
                        return false;
                    } else if (!/^([0-9]\d*|[0]{1,1})$/.test(currCodeVal)) {
                        notify.warn("区级编号必须为数字！");
                        jQuery(".import-cancel").find(".button.blue").addClass("disabled");
                        return false;
                    }
                }
                if (currExcelVal === "") {
                    notify.warn("请添加导入模板！");
                    jQuery(".import-cancel").find(".button.blue").addClass("disabled");
                    return false;
                }
                callback && callback();
            },
            _eventHandler: function() {
                var self = this;
                return {
                    CancelImport: function(e) {
                        //隐藏导航
                        window.top.showHideNav("show");
                        jQuery(this).closest('.import-model').hide(0, function() {
                            jQuery(".commonLayer").fadeOut(200);
                        });
                    },
                    upLoadImport: function() {

                        if(jQuery(this).hasClass('disabled')){
                            return;
                        }
                        self._checkFormData(function(){
                            self.upload.start();
                        });
                    },
                    loadExcelTemp: function() {
                        var mouduleName = jQuery(this).closest('.import-model').attr("data-upType");
                        jQuery(".loadExcelTemp").attr("src",self.ExcelTemplateUrl).data("type",mouduleName);
                        self.defaultTop = jQuery(".plupload").offset().top;
                    },
                    refresh:function(){
                        jQuery(".uploadError").hide();
                        jQuery(".import-model .excel-name").val("");
                        jQuery(".import-model").show();
                        self.upload.destroy();
                        self.upload = null;
                        self.initUpload();
                        self._bindUpEvt();
                    },
                    resetForm:function(e){
                        if(e.type==="focus"){
                            jQuery(".import-cancel").find(".button.blue").removeClass("disabled");
                        }
                    }
                };
            },
            /**
             * 处理文件上传出错的提示性逻辑
             * @param code - 错误码
             */
            showUploadError: function(code) {
                switch (code) {
                    case -601:
                        notify.warn("系统暂不支持该类型文件的上传，请上传图片或者视频文件");
                        break;
                    case -600:
                        notify.warn("上传的文件大小应保持在9GB以内");
                        break;
                    default:
                        notify.warn("上传出错，请重试");
                }
            },
            bindSelfEvt: function(selector) {
                var self = this,
                    handler = self._eventHandler();
                $(selector).find("[data-handler]").map(function() {
                    $(this).off("click").on($(this).data("event"), handler[$(this).data("handler")]);
                });
            }
        };
    return {
        orgTree:null,
        compiler: null,
        cameraCompiler: null, //缓存摄像机模块模板
        defaultCompiler: null,
        currentPage: 1,
        cameraCtr: null, //缓存摄像机模块控制器
        currCameraDeatilData: {}, //缓存当前设备详情信息
        managerUnitName:"",
        managePointUnitName:"",

        /**
         * [setBatchUplaodPanel 批量导入模板对象事件]
         * @type {[type]}
         */
        setBatchUplaodPanel: _setBatchUplaodPanel,
        /**
         * [setLgoutPanel 注]
         * @type {[type]}
         */
        setLgoutPanel : _setLogoutPanel

    };

});