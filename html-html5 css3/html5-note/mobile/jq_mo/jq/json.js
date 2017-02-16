/**
 * Created by Aoliaovier on 2015/12/11.
 */
function process_json_text() {
    var jsonText = '{"business":' +
        '{"name":"Haoyong","company":"netposa",' +
        '"occupation":"liuwenjing",' +
        '"location":["Xian","beijing"]},' +
        '"website":{"url":["www.netposa.com",' +
        '"haoyong.com","www.baidu.com"]}}';
    var jsonObj = eval("(" + jsonText + ")");//加上（）是要把字符串转换为Object
    output_all(jsonObj);
    output_specific(jsonObj);

}
function process_json_object() {
    var jsonObj = {
        "business":{
            "name":"Haoyong",
            "company":"netposa",
            "occupation":"liuwenjing",
            "location":["Xian","beijing"]
        },
        "website":{
            "url":["www.netposa.com","haoyong.com","www.baidu.com"]
        }
    };
    output_all(jsonObj);
    output_specific(jsonObj);
}

function output_all(JsonObj) {
    document.write("<table><tr><th width=100>KEY</th><th>VALUE</th width=200></tr>");
    for(var i in JsonObj.business)
        document.write("<tr><td>" + i + "</td><td>" + JsonObj.business[i] + "</td></tr>");
    for(var j in JsonObj.website) {
        document.write("<tr><td>" + j + "</td><td>" +  JsonObj.website[j] + "</td></tr>");
    }
    document.write("</table>");
}
function output_specific(JsonObj) {
    document.write("<table><tr><th width=100>KEY</th><th width=210>VALUE</th></tr>");
    document.write("<tr><td>name</td><td>" + JsonObj.business.name + "</td></tr>");
    document.write("<tr><td>company</td><td>" + JsonObj.business.company + "</td></tr>");
    document.write("<tr><td>occupation</td><td>" + JsonObj.business.occupation + "</td></tr>");
    document.write("<tr><td>website1</td><td>" + JsonObj.website.url[0] + "</td></tr>");
    document.write("<tr><td>website2</td><td>" + JsonObj.website.url[1] + "</td></tr>");
    document.write("<tr><td>website3</td><td>" + JsonObj.website.url[2] + "</td></tr>");
    document.write("</table>");
}

/*其他*/
$(document).ready(
    function(){
        $('#p1').click(function(){
            $('#pic1').slideToggle('slow',function(){
                alert("slow");
            });
        });
        $('#pc').click(function(){
            $('#pic1').attr({src:"../../../images/1.png"});
        });
        $('#p2').click(function(){
            $('#pic2').slideDown('normal','linear');
        });
        $('#p3').click(function(){
            /*显示或隐藏*/
            $('#word').toggle('fast');
        });
    }
);