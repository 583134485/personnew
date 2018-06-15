var base = +new Date(1968, 9, 3);
var oneDay = 24 * 3600 * 1000;
var date = [];

var data = [Math.random() * 300];

for (var i = 1; i < 20000; i++) {
    var now = new Date(base += oneDay);
    date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
    data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
}
function mychart1() {

}

var mychart1=echarts.init(document.getElementById("e1"));
 mychart1.setOption(
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
             data: date
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
                 data: data
             }
         ]
     }
 )

var mychart2=echarts.init(document.getElementById("e2"));
  mychart2.setOption(

      option = {
          title: {
              text: '堆叠区域图'
          },
          tooltip : {
              trigger: 'axis',
              axisPointer: {
                  type: 'cross',
                  label: {
                      backgroundColor: '#6a7985'
                  }
              }
          },
          legend: {
              data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
          },
          toolbox: {
              feature: {
                  saveAsImage: {}
              }
          },
          grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
          },
          xAxis : [
              {
                  type : 'category',
                  boundaryGap : false,
                  data : ['周一','周二','周三','周四','周五','周六','周日']
              }
          ],
          yAxis : [
              {
                  type : 'value'
              }
          ],
          series : [
              {
                  name:'邮件营销',
                  type:'line',
                  stack: '总量',
                  areaStyle: {normal: {}},
                  data:[120, 132, 101, 134, 90, 230, 210]
              },
              {
                  name:'联盟广告',
                  type:'line',
                  stack: '总量',
                  areaStyle: {normal: {}},
                  data:[220, 182, 191, 234, 290, 330, 310]
              },
              {
                  name:'视频广告',
                  type:'line',
                  stack: '总量',
                  areaStyle: {normal: {}},
                  data:[150, 232, 201, 154, 190, 330, 410]
              },
              {
                  name:'直接访问',
                  type:'line',
                  stack: '总量',
                  areaStyle: {normal: {}},
                  data:[320, 332, 301, 334, 390, 330, 320]
              },
              {
                  name:'搜索引擎',
                  type:'line',
                  stack: '总量',
                  label: {
                      normal: {
                          show: true,
                          position: 'top'
                      }
                  },
                  areaStyle: {normal: {}},
                  data:[820, 932, 901, 934, 1290, 1330, 1320]
              }
          ]
      }

)


data3 = [["2000-06-05",116],["2000-06-06",129],["2000-06-07",135],["2000-06-08",86],["2000-06-09",73],["2000-06-10",85],["2000-06-11",73],["2000-06-12",68],["2000-06-13",92],["2000-06-14",130],["2000-06-15",245],["2000-06-16",139],["2000-06-17",115],["2000-06-18",111],["2000-06-19",309],["2000-06-20",206],["2000-06-21",137],["2000-06-22",128],["2000-06-23",85],["2000-06-24",94],["2000-06-25",71],["2000-06-26",106],["2000-06-27",84],["2000-06-28",93],["2000-06-29",85],["2000-06-30",73],["2000-07-01",83],["2000-07-02",125],["2000-07-03",107],["2000-07-04",82],["2000-07-05",44],["2000-07-06",72],["2000-07-07",106],["2000-07-08",107],["2000-07-09",66],["2000-07-10",91],["2000-07-11",92],["2000-07-12",113],["2000-07-13",107],["2000-07-14",131],["2000-07-15",111],["2000-07-16",64],["2000-07-17",69],["2000-07-18",88],["2000-07-19",77],["2000-07-20",83],["2000-07-21",111],["2000-07-22",57],["2000-07-23",55],["2000-07-24",60]];
var dateList = data3.map(function (item) {
    return item[0];
});
var valueList = data3.map(function (item) {
    return item[1];
});
  var myechart3=echarts.init(document.getElementById("e3"));
  myechart3.setOption(
      option = {

          // Make gradient line here
          visualMap: [{
              show: false,
              type: 'continuous',
              seriesIndex: 0,
              min: 0,
              max: 400
          }, {
              show: false,
              type: 'continuous',
              seriesIndex: 1,
              dimension: 0,
              min: 0,
              max: dateList.length - 1
          }],


          title: [{
              left: 'center',
              text: 'Gradient along the y axis'
          }, {
              top: '55%',
              left: 'center',
              text: 'Gradient along the x axis'
          }],
          tooltip: {
              trigger: 'axis'
          },
          xAxis: [{
              data: dateList
          }, {
              data: dateList,
              gridIndex: 1
          }],
          yAxis: [{
              splitLine: {show: false}
          }, {
              splitLine: {show: false},
              gridIndex: 1
          }],
          grid: [{
              bottom: '60%'
          }, {
              top: '60%'
          }],
          series: [{
              type: 'line',
              showSymbol: false,
              data: valueList
          }, {
              type: 'line',
              showSymbol: false,
              data: valueList,
              xAxisIndex: 1,
              yAxisIndex: 1
          }]
      }
      
  )

var mychart4=echarts.init(document.getElementById("e4"))

mychart4.setOption(
    option = {
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data: ['直接访问', '邮件营销','联盟广告','视频广告','搜索引擎']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis:  {
            type: 'value'
        },
        yAxis: {
            type: 'category',
            data: ['周一','周二','周三','周四','周五','周六','周日']
        },
        series: [
            {
                name: '直接访问',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: [320, 302, 301, 334, 390, 330, 320]
            },
            {
                name: '邮件营销',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: '联盟广告',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
                name: '视频广告',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: [150, 212, 201, 154, 190, 330, 410]
            },
            {
                name: '搜索引擎',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: [820, 832, 901, 934, 1290, 1330, 1320]
            }
        ]
    }

)

var mychart5=echarts.init(document.getElementById("e5"))

mychart5.setOption(
    option = {
        title : {
            text: '某地区蒸发量和降水量',
            subtext: '纯属虚构'
        },
        tooltip : {
            trigger: 'axis'
        },
        legend: {
            data:['蒸发量','降水量']
        },
        toolbox: {
            show : true,
            feature : {
                dataView : {show: true, readOnly: false},
                magicType : {show: true, type: ['line', 'bar']},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'蒸发量',
                type:'bar',
                data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
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
                name:'降水量',
                type:'bar',
                data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
                markPoint : {
                    data : [
                        {name : '年最高', value : 182.2, xAxis: 7, yAxis: 183},
                        {name : '年最低', value : 2.3, xAxis: 11, yAxis: 3}
                    ]
                },
                markLine : {
                    data : [
                        {type : 'average', name : '平均值'}
                    ]
                }
            }
        ]
    }
)


var data6 = [
    [5000, 10000, 6785.71],
    [4000, 10000, 6825],
    [3000, 6500, 4463.33],
    [2500, 5600, 3793.83],
    [2000, 4000, 3060],
    [2000, 4000, 3222.33],
    [2500, 4000, 3133.33],
    [1800, 4000, 3100],
    [2000, 3500, 2750],
    [2000, 3000, 2500],
    [1800, 3000, 2433.33],
    [2000, 2700, 2375],
    [1500, 2800, 2150],
    [1500, 2300, 2100],
    [1600, 3500, 2057.14],
    [1500, 2600, 2037.5],
    [1500, 2417.54, 1905.85],
    [1500, 2000, 1775],
    [1500, 1800, 1650]
];
var cities = ['北京', '上海', '深圳', '广州', '苏州', '杭州', '南京', '福州', '青岛', '济南', '长春', '大连', '温州', '郑州', '武汉', '成都', '东莞', '沈阳', '烟台'];
var barHeight = 50;
var  mychart6=echarts.init(document.getElementById("e6"))

mychart6.setOption(
    option = {
        title: {
            text: '在中国租个房子有多贵？',
            subtext: '市中心一室月租费（数据来源：https://www.numbeo.com）'
        },
        legend: {
            show: true,
            data: ['价格范围', '均值']
        },
        grid: {
            top: 100
        },
        angleAxis: {
            type: 'category',
            data: cities
        },
        tooltip: {
            show: true,
            formatter: function (params) {
                var id = params.dataIndex;
                return cities[id] + '<br>最低：' + data6[id][0] + '<br>最高：' + data6[id][1] + '<br>平均：' + data6[id][2];
            }
        },
        radiusAxis: {
        },
        polar: {
        },
        series: [{
            type: 'bar',
            itemStyle: {
                normal: {
                    color: 'transparent'
                }
            },
            data: data6.map(function (d) {
                return d[0];
            }),
            coordinateSystem: 'polar',
            stack: '最大最小值',
            silent: true
        }, {
            type: 'bar',
            data: data6.map(function (d) {
                return d[1] - d[0];
            }),
            coordinateSystem: 'polar',
            name: '价格范围',
            stack: '最大最小值'
        }, {
            type: 'bar',
            itemStyle: {
                normal: {
                    color: 'transparent'
                }
            },
            data: data.map(function (d) {
                return d[2] - barHeight;
            }),
            coordinateSystem: 'polar',
            stack: '均值',
            silent: true,
            z: 10
        }, {
            type: 'bar',
            data: data6.map(function (d) {
                return barHeight * 2
            }),
            coordinateSystem: 'polar',
            name: '均值',
            stack: '均值',
            barGap: '-100%',
            z: 10
        }],
        legend: {
            show: true,
            data: ['A', 'B', 'C']
        }
    }
)


var mychart7=echarts.init(document.getElementById("e7"));

mychart7.setOption(
    option = {
        angleAxis: {
            type: 'category',
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
            z: 10
        },
        radiusAxis: {
        },
        polar: {
        },
        series: [{
            type: 'bar',
            data: [1, 2, 3, 4, 3, 5, 1],
            coordinateSystem: 'polar',
            name: 'A',
            stack: 'a'
        }, {
            type: 'bar',
            data: [2, 4, 6, 1, 3, 2, 1],
            coordinateSystem: 'polar',
            name: 'B',
            stack: 'a'
        }, {
            type: 'bar',
            data: [1, 2, 3, 4, 1, 2, 5],
            coordinateSystem: 'polar',
            name: 'C',
            stack: 'a'
        }],
        legend: {
            show: true,
            data: ['A', 'B', 'C']
        }
    }
)
var mychart8=echarts.init(document.getElementById("e8"))

mychart8.setOption(
    option = {
        title: {
            text: '漏斗图(对比)',
            subtext: '纯属虚构',
            left: 'left',
            top: 'bottom'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c}%"
        },
        toolbox: {
            show: true,
            orient: 'vertical',
            top: 'center',
            feature: {
                dataView: {readOnly: false},
                restore: {},
                saveAsImage: {}
            }
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['产品A','产品B','产品C','产品D','产品E']
        },
        calculable: true,
        series: [
            {
                name: '漏斗图',
                type: 'funnel',
                width: '40%',
                height: '45%',
                left: '5%',
                top: '50%',
                funnelAlign: 'right',

                center: ['25%', '25%'],  // for pie

                data:[
                    {value:60, name:'产品C'},
                    {value:30, name:'产品D'},
                    {value:10, name:'产品E'},
                    {value:80, name:'产品B'},
                    {value:100, name:'产品A'}
                ]
            },
            {
                name: '金字塔',
                type:'funnel',
                width: '40%',
                height: '45%',
                left: '5%',
                top: '5%',
                sort: 'ascending',
                funnelAlign: 'right',

                center: ['25%', '75%'],  // for pie

                data:[
                    {value:60, name:'产品C'},
                    {value:30, name:'产品D'},
                    {value:10, name:'产品E'},
                    {value:80, name:'产品B'},
                    {value:100, name:'产品A'}
                ]
            },
            {
                name:'漏斗图',
                type:'funnel',
                width: '40%',
                height: '45%',
                left: '55%',
                top: '5%',
                funnelAlign: 'left',

                center: ['75%', '25%'],  // for pie

                data: [
                    {value: 60, name: '产品C'},
                    {value: 30, name: '产品D'},
                    {value: 10, name: '产品E'},
                    {value: 80, name: '产品B'},
                    {value: 100, name: '产品A'}
                ]
            },
            {
                name: '金字塔',
                type:'funnel',
                width: '40%',
                height: '45%',
                left: '55%',
                top: '50%',
                sort: 'ascending',
                funnelAlign: 'left',

                center: ['75%', '75%'],  // for pie

                data: [
                    {value: 60, name: '产品C'},
                    {value: 30, name: '产品D'},
                    {value: 10, name: '产品E'},
                    {value: 80, name: '产品B'},
                    {value: 100, name: '产品A'}
                ]
            }
        ]
    }
)

var mychart9=echarts.init(document.getElementById("e9"))
mychart9.setOption(
    option = {
        backgroundColor: '#2c343c',

        title: {
            text: 'Customized Pie',
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
                name:'访问来源',
                type:'pie',
                radius : '55%',
                center: ['50%', '50%'],
                data:[
                    {value:335, name:'直接访问'},
                    {value:310, name:'邮件营销'},
                    {value:274, name:'联盟广告'},
                    {value:235, name:'视频广告'},
                    {value:400, name:'搜索引擎'}
                ].sort(function (a, b) { return a.value - b.value; }),
                roseType: 'radius',
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

var mychart10=echarts.init(document.getElementById("e10"))
mychart10.setOption(
    option = {
        title : {
            text: '南丁格尔玫瑰图',
            subtext: '纯属虚构',
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            x : 'center',
            y : 'bottom',
            data:['rose1','rose2','rose3','rose4','rose5','rose6','rose7','rose8']
        },
        toolbox: {
            show : true,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                magicType : {
                    show: true,
                    type: ['pie', 'funnel']
                },
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable : true,
        series : [
            {
                name:'半径模式',
                type:'pie',
                radius : [20, 110],
                center : ['25%', '50%'],
                roseType : 'radius',
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: true
                    }
                },
                lableLine: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: true
                    }
                },
                data:[
                    {value:10, name:'rose1'},
                    {value:5, name:'rose2'},
                    {value:15, name:'rose3'},
                    {value:25, name:'rose4'},
                    {value:20, name:'rose5'},
                    {value:35, name:'rose6'},
                    {value:30, name:'rose7'},
                    {value:40, name:'rose8'}
                ]
            },
            {
                name:'面积模式',
                type:'pie',
                radius : [30, 110],
                center : ['75%', '50%'],
                roseType : 'area',
                data:[
                    {value:10, name:'rose1'},
                    {value:5, name:'rose2'},
                    {value:15, name:'rose3'},
                    {value:25, name:'rose4'},
                    {value:20, name:'rose5'},
                    {value:35, name:'rose6'},
                    {value:30, name:'rose7'},
                    {value:40, name:'rose8'}
                ]
            }
        ]
    }

)