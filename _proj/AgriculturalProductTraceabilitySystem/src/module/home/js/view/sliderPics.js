/**
 * slider插件可悬停控制
 */
define([
    "jquery"
], function () {
    "use strict"; //stirct mode not support by IE9-

    function init(container, options) {
        if (!container) return;

        var options = options || {},
            currentIndex = 0,
            cls = options.activeControllerCls,
            delay = options.delay,
            isAuto = options.auto,
            controller = options.controller,
            event = options.event,
            interval,
            slidesWrapper = container.children().first(),
            slides = slidesWrapper.children(),
            length = slides.length,
            childWidth = container.width(),
            totalWidth = childWidth * slides.length;

        var controlItem = controller.children();

        mode();

        event == 'hover' ? controlItem.mouseover(function () {
            stop();
            var index = $(this).index();

            play(index, options.mode);
        }).mouseout(function () {
            isAuto && autoPlay();
        }) : controlItem.click(function () {
            stop();
            var index = $(this).index();

            play(index, options.mode);
            isAuto && autoPlay();
        });

        isAuto && autoPlay();

        function mode() {
            var wrapper = container.children().first();

            options.mode == 'slide' ? wrapper.width(totalWidth) : wrapper.children().css({
                    'position': 'absolute',
                    'left': 0,
                    'top': 0
                })
                .first().siblings().hide();
        }

        //auto play
        function autoPlay() {
            interval = setInterval(function () {
                triggerPlay(currentIndex);
            }, options.time);
        }

        //trigger play
        function triggerPlay(cIndex) {
            var index;

            (cIndex == length - 1) ? index = 0 : index = cIndex + 1;
            play(index, options.mode);
        }

        //play
        function play(index, mode) {
            slidesWrapper.stop(true, true);
            slides.stop(true, true);

            mode == 'slide' ? (function () {
                if (index > currentIndex) {
                    slidesWrapper.animate({
                        left: '-=' + Math.abs(index - currentIndex) * childWidth + 'px'
                    }, delay);
                } else if (index < currentIndex) {
                    slidesWrapper.animate({
                        left: '+=' + Math.abs(index - currentIndex) * childWidth + 'px'
                    }, delay);
                } else {
                    return;
                }
            })() : (function () {
                if (slidesWrapper.children(':visible').index() == index) return;
                slidesWrapper.children().fadeOut(delay).eq(index).fadeIn(delay);
            })();

            try {
                controller.children('.' + cls).removeClass(cls);
                controller.children().eq(index).addClass(cls);
            } catch (e) {
            }

            currentIndex = index;

            options.exchangeEnd && typeof options.exchangeEnd == 'function' && options.exchangeEnd.call(this, currentIndex);
        }

        //stop
        function stop() {
            clearInterval(interval);
        }

    /*    //prev frame
        var prev = function () {
            stop();
            currentIndex == 0 ? triggerPlay(length - 2) : triggerPlay(currentIndex - 2);
            isAuto && autoPlay();
        };

        //next frame
        var next = function () {
            stop();
            currentIndex == length - 1 ? triggerPlay(-1) : triggerPlay(currentIndex);
            isAuto && autoPlay();
        }*/

        //prev frame
        $('#banner_tabs .flex-prev').click(function () {
            stop();
            currentIndex == 0 ? triggerPlay(length - 2) : triggerPlay(currentIndex - 2);
            isAuto && autoPlay();
        });

        //next frame
        $('#banner_tabs .flex-next').click(function () {
            stop();
            currentIndex == length - 1 ? triggerPlay(-1) : triggerPlay(currentIndex);
            isAuto && autoPlay();
        });
    }



    //expose the Slider API
    return {
        init: function (container, options) {
            init(container, options);
        }/*,
        prev: function () {
            prev();
        },
        next: function () {
            next();
        }*/
    };
});