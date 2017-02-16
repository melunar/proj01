/**
 * Created by web0304 on 2016/9/22.
 */
define([
    "jquery",
    "/module/common/tree/tree-controller.js",
], function(jQuery, Tree) {
    return (function(scope, $) {
        scope.init = function() {
            console.log(Tree);
            console.log($("body").size());
            var TTree = new Tree(),
                $container = $("#tree-container");
            TTree.renderInspectTree(false, $container, true);
        };
        return scope;
    }({}, jQuery));
});