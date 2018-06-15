//面具图
var base = +new Date(1968, 9, 3);
var oneDay = 24 * 3600 * 1000;
var datearea = [];

var dataarea = [Math.random() * 300];

for (var i = 1; i < 20000; i++) {
    var now = new Date(base += oneDay);
    datearea.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
    dataarea.push(Math.round((Math.random() - 0.5) * 20 + dataarea[i - 1]));
}


var mychartarea=echarts.init(document.getElementById("echart-area-chart"));
mychartarea.setOption(
    option = {
        tooltip: {
            trigger: 'axis',
            position: function (pt) {
                return [pt[0], '10%'];
            }
        },
        title: {
            left: 'center',
            text: '大数据量面积图',
        },
        toolbox: {
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                restore: {},
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: datearea
        },
        yAxis: {
            type: 'value',
            boundaryGap: [0, '100%']
        },
        dataZoom: [{
            type: 'inside',
            start: 0,
            end: 10
        }, {
            start: 0,
            end: 10,
            handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
            handleSize: '80%',
            handleStyle: {
                color: '#fff',
                shadowBlur: 3,
                shadowColor: 'rgba(0, 0, 0, 0.6)',
                shadowOffsetX: 2,
                shadowOffsetY: 2
            }
        }],
        series: [
            {
                name:'模拟数据',
                type:'line',
                smooth:true,
                symbol: 'none',
                sampling: 'average',
                itemStyle: {
                    normal: {
                        color: 'rgb(255, 70, 131)'
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgb(255, 158, 68)'
                        }, {
                            offset: 1,
                            color: 'rgb(255, 70, 131)'
                        }])
                    }
                },
                data: dataarea
            }
        ]
    }
)

var doublebarchart=echarts.init(document.getElementById('echarts-doublebar-chart'));
doublebarchart.setOption(
    option = {
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data:[ '退单', '下单']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'value'
            }
        ],
        yAxis : [
            {
                type : 'category',
                axisTick : {show: false},
                data : ['周一','周二','周三','周四','周五','周六','周日']
            }
        ],
        dataZoom: [

            {
                type: 'slider',
                show: true,
                yAxisIndex: [0],
                width: 20,
                // filterMode: 'empty',
                // fillerColor:colors[2],
                left: 'right',
                start: 1,
                end: 10
            }/*,
            {
                type: 'slider',
                show: true,
                xAxisIndex: [0,1],
                start: 1,
                end: 100
            }*/
        ],
        series : [

            {
                name:'下单',
                type:'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true
                    }
                },
                data:[320, 302, 341, 374, 390, 450, 420]
            },
            {
                name:'退单',
                type:'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'left'
                    }
                },
                data:[-120, -132, -101, -134, -190, -230, -210]
            }
        ]
    }
)

var xAxisData = [];
var data1 = [];
var data2 = [];
var data3 = [];

for (var i = 0; i < 100; i++) {
    xAxisData.push('类目' + i);
    data1.push((Math.sin(i / 5) * (i / 5 -10) + i / 6) * 5);
    data2.push((Math.cos(i / 5) * (i / 5 -10) + i / 6) * 5);
    data3.push((Math.cos(i / 5) * (i / 5 -10) + i / 6) * 5);
}
var ladderchart=echarts.init(document.getElementById('echarts-ladderbar-chart'));

ladderchart.setOption(
    option = {
        title: {
            text: '柱状图'
        },
        legend: {
            data: ['bar', 'bar2','bar3'],
            align: 'left'
        },
        toolbox: {
            // y: 'bottom',
            feature: {
                magicType: {
                    type: ['stack', 'tiled']
                },
                dataView: {},
                restore: {},
                saveAsImage: {
                    pixelRatio: 2
                }
            }
        },
        tooltip: {},
        xAxis: {
            data: xAxisData,
            silent: false,
            splitLine: {
                show: false
            }
        },
        yAxis: {
        },
        series: [{
            name: 'bar',
            type: 'bar',
            data: data1,
            animationDelay: function (idx) {
                return idx * 10;
            }
        }, {
            name: 'bar2',
            type: 'bar',
            data: data2,
            animationDelay: function (idx) {
                return idx * 10 + 100;
            }
        },{
            name: 'bar3',
            type: 'bar',
            data: data3,
            animationDelay: function (idx) {
                return idx * 10 + 100;
            }
        }],
        animationEasing: 'elasticOut',
        animationDelayUpdate: function (idx) {
            return idx * 5;
        }
    }
)

var piechart=echarts.init(document.getElementById("echarts-pie-chart"));
piechart.setOption(
    option = {
        backgroundColor: '#2c343c',

        title: {
            text: '女生口红品牌使用率',
            left: 'center',
            top: 20,
            textStyle: {
                color: '#ccc'
            }
        },

        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },

        visualMap: {
            show: false,
            min: 80,
            max: 600,
            inRange: {
                colorLightness: [0, 1]
            }
        },
        series : [
            {
                name:'',
                type:'pie',
                radius : '55%',
                center: ['50%', '50%'],
                data:[
                    {value:335, name:'阿玛尼'},
                    {value:310, name:'香奈儿'},
                    {value:274, name:'雅诗兰黛'},
                    {value:235, name:'爱丽小屋'},
                    {value:400, name:'YSL圣罗兰'}
                ].sort(function (a, b) { return a.value - b.value}),
                roseType: 'angle',
                label: {
                    normal: {
                        textStyle: {
                            color: 'rgba(255, 255, 255, 0.3)'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        lineStyle: {
                            color: 'rgba(255, 255, 255, 0.3)'
                        },
                        smooth: 0.2,
                        length: 10,
                        length2: 20
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#c23531',
                        shadowBlur: 200,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                },

                animationType: 'scale',
                animationEasing: 'elasticOut',
                animationDelay: function (idx) {
                    return Math.random() * 200;
                }
            }
        ]
    }
)

var funnelchart=echarts.init(document.getElementById('echarts-funnel-chart'))
funnelchart.setOption(
    option = {
        title: {
            text: '漏斗分析图',
            subtext: '用户行为统计',
            x:'center',
            textStyle: {
                color: '#fff'
            }

        },
        backgroundColor: '#522257',
        color: ['#efbb1a', '#d77169', '#c14f60', '#953f61', '#72355f', ],

        series : [
            {
                name:'漏斗图',
                type:'funnel',
                x: '10%',
                y: 60,
                //x2: 80,
                y2: 60,
                width: '80%',
                // height: {totalHeight} - y - y2,
                min: 0,
                max: 100,
                minSize: '0%',
                maxSize: '100%',
                sort : 'descending', // 'ascending', 'descending'
                gap :0,

                data:[
                    {value:60, name:'浏览'},
                    {value:40, name:'详情页跳出'},
                    {value:20, name:'下单'},
                    {value:80, name:'付款'}


                ].sort(function (a, b) { return a.value - b.value}),
                roseType: true,
                label: {
                    normal: {
                        formatter: function (params) {
                            return params.name + ' ' + params.value + '%';
                        },
                        position: 'center'
                    }
                },
                itemStyle: {
                    normal: {
                        borderWidth: 0,
                        shadowBlur: 30,
                        shadowOffsetX: 0,
                        shadowOffsetY: 10,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }

            }

        ]
    }

)
