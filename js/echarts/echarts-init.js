/*init those echarts*/
/*$(document).ready(function(){*/
/*注释掉$*/
/* getElementById 直接写id 名  和jquery 选择器 不要搞混*/
	var myChart = echarts.init(document.getElementById('echarts-bar-pinglei1'));
myChart.showLoading({
    text:"在加载别急"
});
	var seriesLabel = {
    normal: {
        show: true,
        textBorderColor: '#333',
        textBorderWidth: 2
    }
}
			myChart.setOption(
	option = {
    title: { 
    	top:'top',
        text: 'Wheater Statistics'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
    
        data: ['hotword', 'pc', 'app']
    },
    grid: {
        left: 100
    },
    toolbox: {
        show: true,
        feature: {
        	dataView : {show: true, readOnly: false},
        	magicType: {show: true, type: ['line', 'bar', 'stack']},
        	restore : {show: true},
            saveAsImage: {}
        }
    },
    xAxis: [
    	{
            type: 'value',
            name: 'hotword',
            axisLabel: {
                formatter: '{value}'
            }
        },
    	{
        type: 'value',
        name: 'liuliang',
        axisLabel: {
            formatter: '{value}'
        }
    }
    
    
    ],
    yAxis: {
        type: 'category',
        inverse: true,
        data: ['Sunny', 'Cloudy', 'Showers']
    },
      dataZoom: [
        
        {
            type: 'slider',
            show: true,
            yAxisIndex: [0],
             width: 30,
            // filterMode: 'empty',
           // fillerColor:colors[2],
            left: 'right',
            start: 1,
            end: 20
        },
        {
            type: 'slider',
            show: true,
            xAxisIndex: [0,1],
            start: 1,
            end: 100
        }
    ],
    series: [
        {
            name: 'hotword',
            type: 'bar',
            data: [165, 170, 30],
            label: seriesLabel,
            markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            },
               markLine : {
                data : [
                    {type : 'average', name: '平均值'}
                ]
            }
            
        },
        {
            name: 'app',
            type: 'bar',
            label: seriesLabel,
            data: [150, 105, 110],
            markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            },
               markLine : {
                data : [
                    {type : 'average', name: '平均值'}
                ]
            }
            
        },
        {
            name: 'pc',
            type: 'bar',
            label: seriesLabel,
            data: [220, 82, 63],
             markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            },
               markLine : {
                data : [
                    {type : 'average', name: '平均值'}
                ]
            }
        }
    ]
}
				)
/*hideloading*/
myChart.hideLoading();



/*
})*/

/**/
var myChartpie = echarts.init(document.getElementById('echarts-pie-pinglei'));
myChartpie.showLoading({
    text:"在加载别急"
});
myChartpie.setOption(
    option = {
        title: {
            top:'auto',
            left:'center',
            text: 'Wheater Statistics'
        },

        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        toolbox: {
            show: true,
            feature: {
                dataView : {show: true, readOnly: true},
                restore : {show: true},
                saveAsImage: {}
            }
        },
        legend: {
            type: 'scroll',
            left: 'left',
            orient: 'horizontal',
            bottom:'1%',
            show:true,
            data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
        },
        series: [
            {
                name:'总流量',
                type:'pie',
                selectedMode: 'single',
                radius: ['10%', '25%'],

                label: {
                    normal: {
                        show: false,
                        position: 'center'

                    },
                    emphasis: {
                        show: true,

                        fontSize: '20',
                        fontWeight: 'bold'

                    }
                },
                /*             labelLine: {
                                normal: {
                                    show: true
                                }
                            }, */
                data:[
                    {value:335, name:'直达', selected:true},
                    {value:679, name:'营销广告'},
                    {value:1548, name:'搜索引擎'}
                ]
            },
            {
                name:'app流量',
                type:'pie',
                radius: ['30%', '45%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        /*                     show: false,
                                            position: 'center', */
                        formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                        backgroundColor: '#eee',
                        borderColor: '#aaa',
                        borderWidth: 1,
                        borderRadius: 4,
                        shadowBlur:3,
                        shadowOffsetX: 2,
                        shadowOffsetY: 2,
                        shadowColor: '#999',
                        padding: [0, 7],
                        rich: {
                            a: {
                                color: '#999',
                                lineHeight: 22,
                                align: 'center'
                            },
                            // abg: {
                            //     backgroundColor: '#333',
                            //     width: '100%',
                            //     align: 'right',
                            //     height: 22,
                            //     borderRadius: [4, 4, 0, 0]
                            // },
                            hr: {
                                borderColor: '#aaa',
                                width: '100%',
                                borderWidth: 0.5,
                                height: 0
                            },
                            b: {
                                fontSize: 16,
                                lineHeight: 33
                            },
                            per: {
                                color: '#eee',
                                backgroundColor: '#334455',
                                padding: [2, 4],
                                borderRadius: 2
                            }
                        }
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: true
                    }
                },
                data:[
                    {value:335, name:'直接访问'},
                    {value:310, name:'邮件营销'},
                    {value:234, name:'联盟广告'},
                    {value:135, name:'视频广告'},
                    {value:1548, name:'搜索引擎'}
                ]
            }
        ]
    }
)
/*pie charts hideloading*/
myChartpie.hideLoading();

/*3d inti*/
var myChart3d = echarts.init(document.getElementById('echarts-3d-pinglei'));
myChart3d.showLoading({
    text:"在加载别急"
});


var hours = ['12a', '1a', '2a', '3a', '4a', '5a', '6a',
    '7a', '8a', '9a','10a','11a',
    '12p', '1p', '2p', '3p', '4p', '5p',
    '6p', '7p', '8p', '9p', '10p', '11p'];
var days = ['Saturday', 'Friday', 'Thursday',
    'Wednesday', 'Tuesday', 'Monday', 'Sunday'];

var data = [[0,0,5],[0,1,1],[0,2,0],[0,3,0],[0,4,0],[0,5,0],[0,6,0],[0,7,0],[0,8,0],[0,9,0],[0,10,0],[0,11,2],[0,12,4],[0,13,1],[0,14,1],[0,15,3],[0,16,4],[0,17,6],[0,18,4],[0,19,4],[0,20,3],[0,21,3],[0,22,2],[0,23,5],[1,0,7],[1,1,0],[1,2,0],[1,3,0],[1,4,0],[1,5,0],[1,6,0],[1,7,0],[1,8,0],[1,9,0],[1,10,5],[1,11,2],[1,12,2],[1,13,6],[1,14,9],[1,15,11],[1,16,6],[1,17,7],[1,18,8],[1,19,12],[1,20,5],[1,21,5],[1,22,7],[1,23,2],[2,0,1],[2,1,1],[2,2,0],[2,3,0],[2,4,0],[2,5,0],[2,6,0],[2,7,0],[2,8,0],[2,9,0],[2,10,3],[2,11,2],[2,12,1],[2,13,9],[2,14,8],[2,15,10],[2,16,6],[2,17,5],[2,18,5],[2,19,5],[2,20,7],[2,21,4],[2,22,2],[2,23,4],[3,0,7],[3,1,3],[3,2,0],[3,3,0],[3,4,0],[3,5,0],[3,6,0],[3,7,0],[3,8,1],[3,9,0],[3,10,5],[3,11,4],[3,12,7],[3,13,14],[3,14,13],[3,15,12],[3,16,9],[3,17,5],[3,18,5],[3,19,10],[3,20,6],[3,21,4],[3,22,4],[3,23,1],[4,0,1],[4,1,3],[4,2,0],[4,3,0],[4,4,0],[4,5,1],[4,6,0],[4,7,0],[4,8,0],[4,9,2],[4,10,4],[4,11,4],[4,12,2],[4,13,4],[4,14,4],[4,15,14],[4,16,12],[4,17,1],[4,18,8],[4,19,5],[4,20,3],[4,21,7],[4,22,3],[4,23,0],[5,0,2],[5,1,1],[5,2,0],[5,3,3],[5,4,0],[5,5,0],[5,6,0],[5,7,0],[5,8,2],[5,9,0],[5,10,4],[5,11,1],[5,12,5],[5,13,10],[5,14,5],[5,15,7],[5,16,11],[5,17,6],[5,18,0],[5,19,5],[5,20,3],[5,21,4],[5,22,2],[5,23,0],[6,0,1],[6,1,0],[6,2,0],[6,3,0],[6,4,0],[6,5,0],[6,6,0],[6,7,0],[6,8,0],[6,9,0],[6,10,1],[6,11,0],[6,12,2],[6,13,1],[6,14,3],[6,15,4],[6,16,0],[6,17,0],[6,18,0],[6,19,0],[6,20,1],[6,21,2],[6,22,2],[6,23,6]];

myChart3d.setOption(
    option = {
        tooltip: {
            show:'true'
        },
        title: {
            text: 'Wheater Statistics'
        },
        visualMap: {
            max: 20,
            inRange: {
                color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
            }
        },
        xAxis3D: {
            type: 'category',
            data: hours
        },
        yAxis3D: {
            type: 'category',
            data: days
        },
        zAxis3D: {
            type: 'value'
        },
        grid3D: {
            boxWidth: 200,
            boxDepth: 80,
            viewControl: {
                // projection: 'orthographic'
            },
            light: {
                main: {
                    intensity: 1.2,
                    shadow: true
                },
                ambient: {
                    intensity: 0.3
                }
            }
        },
        series: [{
            type: 'bar3D',
            data: data.map(function (item) {
                return {
                    value: [item[1], item[0], item[2]],
                }
            }),
            shading: 'lambert',

            label: {
                textStyle: {
                    fontSize: 16,
                    borderWidth: 1
                }
            },

            emphasis: {
                label: {
                    textStyle: {
                        fontSize: 20,
                        color: '#900'
                    }
                },
                itemStyle: {
                    color: '#900'
                }
            }
        }]
    }
)
myChart3d.hideLoading();