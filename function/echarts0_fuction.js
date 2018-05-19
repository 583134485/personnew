
//echart init
var myChart = echarts.init(document.getElementById('newhot'));
/*myChart.showLoading({
    text:"在加载别急"
});*/
var colors = ['#5793f3', '#d14a61', '#675bba' ,'#FE8463','#9BCA63','#FAD860'];
myChart.setOption(
    option = {
        color: colors,
        // backgroundColor: '#21202D',
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            }
        },
        grid: {
            right: '20%'
        },
        toolbox: {
            feature: {
                dataView: {show: true, readOnly: false},
                restore: {show: true},
                saveAsImage: {show: true}
            }
        },
        legend: {

            data:['流量','支付','加购','金额','转化','加购率','单价']

        },
        xAxis: [
            {
                type: 'category',
                axisTick: {
                    alignWithLabel: true
                },
                data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
            }
        ],
        /*  dataZoom: [
         {
             type: 'inside',
             start: 50,
             end: 100
         },
         {
             show: true,
             type: 'slider',
             y: '90%',
             start: 50,
             end: 100
         }
     ], */
        yAxis: [
            {
                type: 'value',
                name: '流量',
                min: 0,
                max: 10000,
                position: 'right',

                axisLine: {
                    lineStyle: {
                        color: colors[0]
                    }
                },
                axisLabel: {
                    formatter: '{value} '
                }
            },
            {
                type: 'value',
                name: '支付',
                min: 0,
                max: 100,
                position: 'left',

                axisLine: {
                    lineStyle: {
                        color: colors[2]
                    }
                },
                axisLabel: {
                    formatter: '{value} '
                }
            },
            {
                type: 'value',
                name: '加购',
                min: 0,
                max: 500,
                position: 'left',
                offset: 80,
                axisLine: {
                    lineStyle: {
                        color: colors[5]
                    }
                },
                axisLabel: {
                    formatter: '{value}'
                }
            },
            {
                type: 'value',
                name: '单价',
                min: 0,
                max: 5000,
                position: 'left',
                offset: 25,
                axisLine: {
                    lineStyle: {
                        color: colors[0]
                    }
                },
                axisLabel: {
                    formatter: '{value}%'
                }
            },
            {
                type: 'value',
                name: '金额',
                min: 0,
                max: 300000,
                position: 'right',
                offset: 30,
                axisLine: {
                    lineStyle: {
                        color: colors[3]
                    }
                },
                axisLabel: {
                    formatter: '{value}元'
                }
            },
            {
                type: 'value',
                name: '加购率',
                min: 0,
                max: 25,
                position: 'right',
                offset: 60,
                axisLine: {
                    lineStyle: {
                        color: colors[1]
                    }
                },
                axisLabel: {
                    formatter: '{value}%'
                }
            },

            {
                type: 'value',
                name: '转化',
                min: 0,
                max: 2,
                position: 'right',
                offset: 100,
                axisLine: {
                    lineStyle: {
                        color: colors[1]
                    }
                },
                axisLabel: {
                    formatter: '{value} %'
                }
            }
            ,
            {
                type: 'value',
                name: '转化',
                min: 0,
                max: 2,
                position: 'right',
                offset: 100,
                axisLine: {
                    lineStyle: {
                        color: colors[1]
                    }
                },
                axisLabel: {
                    formatter: '{value} %'
                }
            }
            ,
            {
                type: 'value',
                name: '转化',
                min: 0,
                max: 2,
                position: 'right',
                offset: 100,
                axisLine: {
                    lineStyle: {
                        color: colors[1]
                    }
                },
                axisLabel: {
                    formatter: '{value} %'
                }
            }
        ],
        dataZoom: [

            {
                type: 'slider',
                show: true,
                yAxisIndex: [0,1,2],
                width: 30,
                // filterMode: 'empty',
                // fillerColor:colors[2],
                left: 'right',
                start: 0,
                end: 70
            },
            {
                type: 'slider',
                show: true,
                xAxisIndex: [0],
                start: 0,
                end: 29
            }
        ],
        series: [
            {
                name:'流量',
                type:'bar',
                markPoint:{
                    data: [
                        {
                            name: '最大值',
                            type: 'max'
                        } ,
                        {
                            name: '最小值',
                            type: 'min'
                        }

                    ]

                },
                markLine:{
                    data:[
                        {
                            name: '平均线',
                            // 支持 'average', 'min', 'max'
                            type: 'average'
                        },
                        [
                            {
                                // 起点和终点的项会共用一个 name
                                name: '最小值到最大值',
                                type: 'min'
                            },
                            {
                                type: 'max'
                            }
                        ]
                    ]

                },
                data:[2.9, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]

            },
            {
                name:'支付',
                type:'line',
                yAxisIndex: 1,
                markPoint:{
                    data: [
                        {
                            name: '最大值',
                            type: 'max'
                        } ,
                        {
                            name: '最小值',
                            type: 'min'
                        }

                    ]

                },
                markLine:{
                    data:[
                        {
                            name: '平均线',
                            // 支持 'average', 'min', 'max'
                            type: 'average'
                        },
                        [
                            {
                                // 起点和终点的项会共用一个 name
                                name: '最小值到最大值',
                                type: 'min'
                            },
                            {
                                type: 'max'
                            }
                        ]
                    ]

                },
                data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 17.6, 182.2, 48.7, 18.8, 6.0, 2.3]
            },
            {
                name:'加购',
                type:'bar',
                yAxisIndex: 2,
                data:[3.0, 2.2, 3.3, 4.5, 6.3, 10.2, 210.3, 23.4, 23.0, 16.5, 12.0, 6.2]
            },
            {
                name:'单价',
                type:'line',
                yAxisIndex: 3,
                data:[3.0, 2.2, 3.3, 4.5, 6.3, 10.2, 210.3, 23.4, 23.0, 16.5, 12.0, 6.2]
            },
            {
                name:'金额',
                type:'line',
                yAxisIndex: 4,
                data:[2.0, 42.2, 3.3, 4.5, 6.3, 12.2, 220.3, 23.4, 23.0, 16.5, 12.0, 6.2]
            },
            {
                name:'加购率',
                type:'line',
                yAxisIndex: 5,
                data:[2.0, 42.2, 3.3, 4.5, 6.3, 12.2, 220.3, 23.4, 23.0, 16.5, 12.0, 6.2]
            },
            {
                name:'转化',
                type:'line',
                yAxisIndex: 6,
                data:[2.0, 2.2,6.3, 42.5, 6.3, 11.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
            }
            ,
            {
                name:'转化',
                type:'line',
                yAxisIndex: 7,
                data:[2.0, 2.2,6.3, 42.5, 6.3, 11.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
            }
        ]
    }
)

function  showExcelData(result) {
    var option = myChart.getOption();
    myChart.showLoading({
        text: "在加载别急"
    })

   // option.title[0].text = "exccel解析";
    var result=eval("("+result+")");
     var i=0;
     var legenddata=new Array();
     /*
     * 遍历 返回字段  日期 横轴  数轴 数据
     * */
    for (key in result){
        console.log("key="+key)
        console.log("result="+result[key])
        if(key=="字段"){
            option.xAxis[0].data=result[key];

        }
        else{
            legenddata[i]=key;
            option.series[i].data=result[key];
            option.series[i].name=key;
            option.series[i].yAxisIndex=i;
            option.yAxis[i].name=key;
            //遇到百分比
            var sum = eval(result[key].join("+"));
            var avg= (sum/result[key].length*100)/100;

            if(avg<=1){
                //% to line
                option.series[i].type='line';
                option.yAxis[i].max=1;
                option.yAxis[i].min=0;
                option.yAxis[i].formatter={
                    formatter: '{value}%'
                };
            }
            else{
                // 数据型 大小不确定
                option.series[i].type='bar';
                option.yAxis[i].max=result[key].max;
                option.yAxis[i].min=0;
                option.yAxis[i].formatter={
                    formatter: '{value}'
                };
            }
            i++
        }
    }
    option.legend[0].data=legenddata;
    console.log("legend==="+legenddata)
    myChart.hideLoading();
    myChart.setOption(option);
}

