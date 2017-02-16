/**
 * Created by web0304 on 2016/7/26.
 */
define([
    "mootools"
], function() {
    var Widget = new Class({
        options: {
            color: "#fff",
            size: {
                height: "10px",
                width: "20px"
            }
        },

        initialize: function(options) {
            this.setOptions(options)
        }
    });
    Widget.implement(new Options);
    console.log("options");
    console.log(Widget);
    var mywidget = new Widget({
        color: "#900",
        size: {
            height: "100px",
            width: "50px"
        }
    });
    return mywidget;
});
