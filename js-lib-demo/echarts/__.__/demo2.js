function recommend(e) {
    recommendId = e;
    var o = $(".people img").eq(0).remove();
    $(".people").append(o),
    $(".people img").removeClass("active"),
    $(".people img").eq(2).addClass("active"),
    $(".recommend").removeClass("active"),
    $(".recommend").eq(e).addClass("active")
}
function renderHomepage3Demo(e) {
    function l() {
        var s = {
            backgroundColor: p,
            textStyle: {
                fontFamily: b,
                fontSize: y
            },
            toolbox: {
                show: !1
            },
            brush: {
                toolbox: ["lineX"],
                outOfBrush: {
                    color: g
                },
                brushType: "lineX",
                brushStyle: {
                    borderWidth: 0,
                    color: "rgba(0,0,0,0)"
                },
                xAxisIndex: 0
            },
            tooltip: {
                trigger: "axis",
                axisPointer: {
                    type: "cross"
                },
                padding: 5,
                backgroundColor: "#fff",
                borderWidth: 0,
                textStyle: {
                    color: "#222"
                },
                extraCssText: "z-index: 200;box-shadow: 0px 3px 15px rgba(0,0,0,0.3)",
            },
            axisPointer: {
                link: [{
                    xAxisIndex: "all"
                }],
                label: {
                    textStyle: {
                        color: "#222"
                    }
                },
                z: 500
            },
            xAxis: a({
                axisLabel: {
                    textStyle: z
                }
            }, {
                axisLabel: {
                    textStyle: z
                }
            }),
            yAxis: r({
                axisLabel: {
                    textStyle: k
                }
            }, {
                axisLabel: {
                    textStyle: k
                }
            }),
            grid: [{
                left: 50,
                right: 38,
                bottom: "55%",
                top: 40
            }, {
                left: 50,
                right: 38,
                bottom: 65,
                top: "55%"
            }],
            dataZoom: [{
                startValue: x,
                endValue: m,
                left: 50,
                right: 38,
                bottom: 25,
                height: 4,
                showDataShadow: !1,
                borderColor: "transparent",
                backgroundColor: "#e2e2e2",
                handleIcon: "image://images/index-chart/handle.png",
                handleSize: 20,
                handleStyle: {
                    color: d,
                    shadowBlur: 6,
                    shadowOffsetX: 1,
                    shadowOffsetY: 2,
                    shadowColor: "#aaa"
                },
                fillerColor: d,
                labelFormatter: "",
                xAxisIndex: [0, 1],
                minValueSpan: c
            }, {
                startValue: x,
                endValue: m,
                type: "inside",
                xAxisIndex: [0, 1],
                minValueSpan: c,
                zoomOnMouseWheel: "shift"
            }],
            series: [A, {
                type: "line",
                name: "seriesB",
                yAxisIndex: 1,
                xAxisIndex: 1,
                smooth: !0,
                symbolSize: 10,
                showSymbol: !1,
                hoverAnimation: !1,
                areaStyle: {
                    normal: {
                        color: d,
                        opacity: 1,
                        shadowOffsetX: 0,
                        shadowOffsetY: 4,
                        shadowBlur: 30,
                        shadowColor: "#555"
                    }
                },
                lineStyle: {
                    normal: {
                        width: 0
                    }
                },
                data: I,
                z: 10
            }, {
                type: "line",
                name: "seriesC",
                xAxisIndex: 1,
                yAxisIndex: 1,
                smooth: !0,
                showSymbol: !1,
                symbolSize: 0,
                hoverAnimation: !1,
                areaStyle: {
                    normal: {
                        color: g,
                        opacity: 1
                    }
                },
                lineStyle: {
                    normal: {
                        width: 0
                    }
                },
                data: C,
                z: 9
            }, {
                type: "bar",
                xAxisIndex: 1,
                yAxisIndex: 1,
                barWidth: 1,
                animation: !1,
                hoverAnimation: !1,
                silent: !0,
                itemStyle: {
                    normal: {
                        color: "transparent"
                    },
                    emphasis: {
                        color: "#fff"
                    }
                },
                data: I,
                z: 10
            }]
        }
          , h = {
            backgroundColor: p,
            textStyle: {
                fontFamily: b,
                fontSize: w
            },
            toolbox: {
                show: !1
            },
            brush: {
                toolbox: ["lineX"],
                outOfBrush: {
                    color: g
                },
                brushType: "lineX",
                brushStyle: {
                    borderWidth: 0,
                    color: "rgba(0,0,0,0)"
                },
                xAxisIndex: 0
            },
            tooltip: {
                show: !0,
                triggerOn: "none",
                alwaysShowContent: !0,
                position: function(e, o, t, n, i) {
                    return {
                        top: 10,
                        left: "center"
                    }
                },
                backgroundColor: "transparent",
                transitionDuration: 0
            },
            axisPointer: {
                triggerOn: "none",
                link: [{
                    xAxisIndex: "all"
                }],
                label: {
                    textStyle: {
                        color: "#222"
                    }
                },
                z: 500
            },
            xAxis: a({
                axisLabel: {
                    textStyle: T
                },
                axisPointer: {
                    show: !0
                }
            }, {
                axisLabel: {
                    textStyle: T
                },
                axisPointer: {
                    value: "04/12",
                    handle: {
                        show: !0,
                        icon: "image://images/index-chart/handle2.png",
                        size: [36, 40],
                        color: d,
                        shadowBlur: 12,
                        shadowOffsetX: 2,
                        shadowOffsetY: 4,
                        shadowColor: "#aaa"
                    }
                }
            }),
            yAxis: r({
                axisLabel: {
                    textStyle: O
                }
            }, {
                axisLabel: {
                    textStyle: O
                }
            }),
            grid: [{
                top: 60,
                bottom: "60%",
                left: 36,
                right: 14
            }, {
                top: "50%",
                bottom: 80,
                left: 36,
                right: 14
            }],
            dataZoom: [{
                startValue: x,
                endValue: m,
                type: "inside",
                xAxisIndex: [0, 1],
                minValueSpan: c,
                zoomOnMouseWheel: "shift"
            }],
            series: [o(), t(), n(), i()]
        }
          , u = e.init($(".ch-pc-chart")[0]);
        u.setOption(s);
        var f = e.init($(".ch-mobile-chart")[0]);
        return f.setOption(h),
        u.dispatchAction({
            type: "brush",
            areas: [{
                xAxisIndex: 0,
                brushType: "lineX",
                coordRange: [17, 27]
            }]
        }),
        [u, f]
    }
    var d = "#dd4541"
      , c = 15
      , x = 9
      , h = 10
      , m = 45
      , u = 20
      , p = "#fff"
      , f = "#979797"
      , b = "Arial"
      , y = 12
      , w = 12
      , g = "#e4e4e4"
      , S = "#aaa"
      , v = ["03/01", "03/02", "03/03", "03/04", "03/05", "03/06", "03/07", "03/08", "03/09", "03/10", "03/11", "03/12", "03/13", "03/14", "03/15", "03/16", "03/17", "03/18", "03/19", "03/20", "03/21", "03/22", "03/23", "03/24", "03/25", "03/26", "03/27", "03/28", "03/29", "03/30", "03/31", "04/01", "04/02", "04/03", "04/04", "04/05", "04/06", "04/07", "04/08", "04/09", "04/10", "04/11", "04/12", "04/13", "04/14", "04/15", "04/16", "04/17", "04/18", "04/19", "04/20", "04/21", "04/22", "04/23", "04/24", "04/25", "04/26", "04/27", "04/28", "04/29", "04/30", "05/01", "05/02", "05/03", "05/04", "05/05", "05/06", "05/07", "05/08", "05/09", "05/10", "05/11", "05/12", "05/13", "05/14", "05/15"]
      , A = [23, 32.65, 61.06, 47.84, 54.2, 65.96, 41.47, 48.16, 27.59, 65.96, 52.24, 37.22, 44.73, 53.22, 60.08, 68.24, 58.29, 84.78, 62.2, 71.67, 66.78, 71.18, 46.47, 56.39, 34.02, 47.41, 47.11, 25.67, 28.94, 34.73, 40.29, 46.86, 52.96, 64.82, 51.63, 72.33, 61.39, 66.94, 60.57, 51.27, 47.18, 56.49, 50.12, 52.57, 42.45, 47.18, 34.45, 38.69, 25.63, 35.1, 31.51, 40.82, 30.69, 34.45, 41.31, 46.69, 48.82, 41.31, 52.24, 55.51, 47.51, 32.65, 37.71, 26.78, 16.65, 21.06, 17.31, 26.61, 32.98, 45.06, 41.63, 53.39, 63.67, 58.94, 43.92, 50.29]
      , I = [.48, .54, .62, .75, 1.05, 1.33, 1.44, 1.38, 1.16, .97, .77, .64, .61, .67, .82, 1.03, 1.25, 1.39, 1.46, 1.41, 1.28, 1.05, .8, .66, .64, .72, .94, 1.22, 1.38, 1.43, 1.33, 1.1, .85, .7, .73, .9, 1.13, 1.26, 1.33, 1.3, 1.18, .86, .73, .69, .75, .94, 1.26, 1.4, 1.44, 1.45, 1.32, 1.02, .72, .56, .51, .59, .69, .91, 1.16, 1.33, 1.4, 1.38, 1.26, 1.07, .74, .61, .54, .58, .76, 1.1, 1.3, 1.35, 1.3, .98, .77, .63]
      , C = [1.63, 1.61, 1.58, 1.54, 1.5, 1.47, 1.47, 1.5, 1.57, 1.67, 1.74, 1.83, 1.91, 1.96, 1.98, 1.94, 1.84, 1.68, 1.55, 1.43, 1.32, 1.27, 1.26, 1.31, 1.46, 1.59, 1.67, 1.68, 1.62, 1.56, 1.52, 1.52, 1.64, 1.89, 2.2, 2.39, 2.47, 2.46, 2.37, 2.24, 2.06, 1.92, 1.87, 1.86, 1.92, 2.06, 2.18, 2.24, 2.22, 2.09, 1.93, 1.82, 1.78, 1.79, 1.81, 1.85, 1.94, 2, 2.01, 1.96, 1.9, 1.76, 1.65, 1.56, 1.49, 1.45, 1.44, 1.46, 1.54, 1.59, 1.57, 1.54, 1.54, 1.62, 1.74, 1.85];
    if (window.supportTouch) {
        var L = 30;
        v = v.slice(0, L),
        A = A.slice(0, L),
        I = I.slice(0, L),
        C = C.slice(0, L)
    }
    var z = {
        fontSize: y,
        fontFamily: b,
        color: f
    }
      , k = {
        fontSize: y,
        fontFamily: b,
        color: f
    }
      , T = {
        fontSize: w,
        fontFamily: b,
        color: f
    }
      , O = {
        fontSize: w,
        fontFamily: b,
        color: f
    }
      , B = {
        color: "#333"
    };
    return window.supportTouch ? s() : l()
}
function renderHomepage3TouchDemo(e) {}
function playIndexVideo() {
    var e = document.getElementById("video-index");
    e.play()
}
!function() {
    function e() {
        var e = document.getElementById("video-index");
        if (window.innerWidth / window.innerHeight < 16 / 9 ? (e.style.height = window.innerHeight + "px",
        e.style.width = "auto",
        e.style.marginLeft = Math.floor((window.innerWidth - window.innerHeight / 9 * 16) / 2) + "px",
        e.style.marginTop = 0) : (e.style.width = window.innerWidth + "px",
        e.style.height = "auto",
        e.style.marginTop = Math.floor(window.innerHeight - window.innerWidth / 16 * 9) + "px",
        e.style.marginLeft = 0),
        n)
            for (var o = n.length - 1; o >= 0; --o)
                n[o].resize()
    }
    function o() {
        requestAnimationFrame(function() {
            if (0 === r)
                for (var e = 1; i - 1 > e; ++e)
                    r += $(".companies img").eq(e).width() + 30;
            a += 1,
            a > r && (a = 0),
            $(".companies").scrollLeft(a),
            o()
        })
    }
    if (!$(".lower-ie").length) {
        document.getElementById("nav-index").className = "active";
        var t = $(".navbar-default");
        t.addClass("navbar-bg"),
        $(window).scroll(function() {
            window.pageYOffset > 600 ? t.removeClass("navbar-bg") : t.addClass("navbar-bg")
        });
        var n = null ;
        $(document).ready(function() {
            n = renderHomepage3Demo(echarts)
        }),
        e(),
        $(window).resize(e);
        var i = 21
          , a = 0
          , r = 0;
        o()
    }
}();
var recommendId = 3;
setInterval(function() {
    recommend(recommendId),
    ++recommendId,
    recommendId === $(".recommend").length && (recommendId = 0)
}, 3e3);
