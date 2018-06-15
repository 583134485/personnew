//show var pinglei1 bar echarts
var path=config.baseurl+"shengejing/";
function echartsbarpinglei1(){
    //var myChart = document.getElementById('echarts-bar-pinglei1');
    var option=myChart.getOption();
    myChart.showLoading({
        text:"在加载别急"
    });
    console.log($(".chosen-select").val()+
        $("#start").val());

    realpath=path+"onedayshow";
    $.ajax({
        type:"POST",
      //  url:"http://localhost:8080/libraryone/shengejing/onedayshow",
        url:realpath,
        async:false,
        crossDomain: true,
        datatype:"json",
        headers: { 'Access-Control-Allow-Origin': '*' },
        data: {shop:$(".chosen-select").val(),
            begindate:$("#start").val()},

        //contentType:"application/json;charset=utf-8",
        success:function(result){
            if(result){
                var result=eval("("+result+")");
                var shop=result['shop'];
                var recordtime=result['recordtime'];
                var hotword=[];
                var pc=[];
                var app=[];
                var type=[];
                var data=result['typedata'];
                for(key in data){
                    type.push(key);
                    pc.push(data[key]['pc']);
                    app.push(data[key]['app']);
                    hotword.push(data[key]['hotword']);
                }
                option.yAxis[0].data=type;
                option.series[0].data=hotword;
                option.series[1].data=app;
                option.series[2].data=pc;
                option.title[0].text=shop+recordtime;
                myChart.hideLoading();
                myChart.setOption(option);

            };
        },
        error:function(error){

            alert("后台问题请求失败");
            alert(("("+error+")"));
            /*	myChart.hideLoading();*/
            /*myChart.setOption();*/
        }
    });
}
/*longday */
function echartsbarpinglei2 () {
    var option=myChart.getOption();
    myChart.showLoading({
        text:"在加载别急"
    });
    var realpath=path+"longdayshow";
    $.ajax({
        type:"post",
       // url:"http://localhost:8080/libraryone/shengejing/longdayshow",
        url:realpath,
        async:true,
        datatype:"json",
        data: {shop:$("#selectbar .chosen-select").val(),
            begindate:$("#selectbar #start").val(),
            enddate:$("#selectbar #end").val()},
        //contentType:"application/json;charset=utf-8",
        success:function(result){
            if(result){
                var result=eval("("+result+")");
                var shop=result['shop'];
                var recordtime=result['recordtime'];
                var hotword=[];
                var pc=[];
                var app=[];
                var type=[];
                var data=result['typedata'];
                for(key in data){
                    type.push(key);
                    pc.push(data[key]['pc']);
                    app.push(data[key]['app']);
                    hotword.push(data[key]['hotword']);
                }
                option.yAxis[0].data=type;
                option.series[0].data=hotword;
                option.series[1].data=app;
                option.series[2].data=pc;
                option.title[0].text=shop+recordtime;
                myChart.hideLoading();
                myChart.setOption(option);

            };
        },
        error:function(error){

            alert("后台问题请求失败")
            myChart.hideLoading();
            myChart.setOption();
        }
    });
}


/**/
function echartspiepinglei1 () {
    var optionpie=myChartpie.getOption();
myChartpie.showLoading();
  var realpath=path+"onedayshow";
    $.ajax({
        type:"post",
        //url:"http://localhost:8080/libraryone/shengejing/onedayshow",
        url:realpath,
        async:true,
        datatype:"json",
        data: {shop:$("#selectpie .chosen-select").val(),
            begindate:$("#selectpie #start").val()},
        //contentType:"application/json;charset=utf-8",
        success:function(result){
            if(result){
                var result=eval("("+result+")");
                var shop=result['shop'];
                var recordtime=result['recordtime'];
                var app=[];
                var typedata=result['typedata'];
                var type=[];
                var data=[];
                var appcdata=[];
                for(key in typedata){
                    type.push(
                        key+'all'
                    );
                    data.push({
                        name:key+'app',
                        value:typedata[key]['app']
                    })
                    data.push({
                        name:key+'pc',
                        value:typedata[key]['pc']
                    })
                    appcdata.push({
                        name:key+'all',
                        value:Number(typedata[key]['pc'])+Number(typedata[key]['app'])
                    })



                }
                optionpie.title[0].text=shop+recordtime;
                //非要设置成[0]才出现
                optionpie.legend[0].data=type;
                optionpie.series[0].data=appcdata;
                optionpie.series[1].data=data;

              //  console.log(option.legend[0].data);
                myChartpie.hideLoading();
                myChartpie.setOption(optionpie);

            };
        },
        error:function(error){
            alert("后台问题请求失败")
            myChartpie.hideLoading();
            myChartpie.setOption();
        }
    });
}

/**/
function  echartspiepinglei2() {
    var optionpie=myChartpie.getOption();
    myChartpie.showLoading();
  var realpath=path+"longdayshow";
    $.ajax({
        type:"post",
       // url:"http://localhost:8080/libraryone/shengejing/longdayshow",
        url:realpath,
        async:true,
        datatype:"json",
        data: {shop:$("#selectpie .chosen-select").val(),
            begindate:$("#selectpie #start").val(),
		     enddate:$("#selectpie #end").val()},
        //contentType:"application/json;charset=utf-8",
        success:function(result){
            if(result){
                var result=eval("("+result+")");
                var shop=result['shop'];
                var recordtime=result['recordtime'];
                var app=[];
                var typedata=result['typedata'];
                var type=[];
                var data=[];
                var appcdata=[];
                for(key in typedata){
                    type.push(
                        key+'all'
                    );
                    data.push({
                        name:key+'app',
                        value:typedata[key]['app']
                    })
                    data.push({
                        name:key+'pc',
                        value:typedata[key]['pc']
                    })
                    appcdata.push({
                        name:key+'all',
                        value:Number(typedata[key]['pc'])+Number(typedata[key]['app'])
                    })



                }
                optionpie.title[0].text=shop+recordtime;
                //非要设置成[0]才出现
                optionpie.legend[0].data=type;
                optionpie.series[0].data=appcdata;
                optionpie.series[1].data=data;

                //  console.log(option.legend[0].data);
                myChartpie.hideLoading();
                myChartpie.setOption(optionpie);

            };
        },
        error:function(error){
            alert("后台问题请求失败")
            myChartpie.hideLoading();
            myChartpie.setOption();
        }
    });
}

function echarts3dpinglei1() {
    var option3d=myChart3d.getOption();
    var realpath=path+"onedayshow";
    $.ajax({
        type:"post",
        //url:"http://localhost:8080/libraryone/shengejing/onedayshow",
        url:realpath,
        async:false,
        datatype:"json",
        data: {shop:$("#3d .chosen-select").val(),
            begindate:$("#3d #start").val()},
        //contentType:"application/json;charset=utf-8",
        success:function(result){
            if(result){
                var result=eval("("+result+")");
                var shop=result['shop'];
                var recordtime=result['recordtime'];
                var app=[];
                var typedata=result['typedata'];
                var type=[];
                var data=[];
                var appcdata=[];
                for(key in typedata){
                    type.push(key)
                    data.push([key,recordtime,typedata[key]['app']])


                }
                option3d.title[0].text=shop+recordtime;
                //非要设置成[0]才出现
                //xdata=type;
                option3d.xAxis3D[0].data=type;
                //console.log(xdata);
                //ydata=recordtime;
                option3d.yAxis3D[0].data=recordtime;
               // console.log(option.yAxis3D[0].data);
                //zdata=data;
                option3d.series[0].data=data.map(function (item) {
                    return {
                        value: [item[0], item[1], item[2]],
                    }
                });
                //console.log(option.series[0].data);
                //console.log(zdata);
                /* option.legend[0].data=type;
                option.series[0].data=appcdata;
                option.series[1].data=data;   */

                //console.log();
                myChart3d.hideLoading();
                myChart3d.setOption(option3d);

            };
        },
        error:function(error){
            alert("后台问题请求失败")
            myChart3d.hideLoading();
            myChart3d.setOption();
        }
    })
}



function  echarts3dpinglei2() {
    var option3d=myChart3d.getOption();
    var realpath=path+"longdayshow3D";
    $.ajax({
        type:"post",
        //url:"http://localhost:8080/libraryone/shengejing/longdayshow3D",
        url:realpath,
        async:false,
        datatype:"json",
        data: {shop:$("#3d .chosen-select").val(),
            begindate:$("#3d #start").val(),
            enddate:$("#3d #end").val()},
        //contentType:"charset=utf-8",
        success:function(result){
            if(result){
                var result=eval("("+result+")");
                //最终的recordtime
                var listrecordtime=[];
                var shop=[];
                //最终的type
                var alltype=[];
                var alldata=[];
                for(var i=0;i<result.length;i++){
                    var shops=result[i]['shop'];
                    var recordtime=result[i]['recordtime'];
                    var app=[];
                    var typedata=result[i]['typedata'];
                    var type=[];
                    var data=[];
                    var alldate=[];
                    var appcdata=[];
                    for(key in typedata){
                        type.push(key);
                        /* data.push([key,recordtime,typedata[key]['app']]); */
                        alldata.push([key,recordtime,typedata[key]['app']]);
                    }
                    listrecordtime.push(recordtime);

                    shop=shops;
                    alltype=type;
                    //alldata.push(data);

                    //console.log("data:"+data);
                    console.log("alldata:"+alldata);
                }
                option3d.title[0].text=shop+"一段时间";
                //非要设置成[0]才出现
                //xdata=type;
                //console.log(alltype);
                option3d.xAxis3D[0].data=alltype;
                //console.log(option.xAxis3D[0].data);
                //ydata=recordtime;
                //console.log(listrecordtime);
                option3d.yAxis3D[0].data=listrecordtime;
              //  console.log(option.yAxis3D[0].data);
                //zdata=data;
                option3d.series[0].data=alldata.map(function (item) {
                    return {
                        value: [item[0], item[1], item[2]],
                    }
                });
                //console.log(option.series[0].data);
                myChart3d.hideLoading();
                myChart3d.setOption(option3d);

            };
        },
        error:function(error){
            alert("后台请求数据失败");
            myChart3d.hideLoading();
            myChart3d.setOption();
        }
    });
}

function echarts3dgoodsale() {
    console.info("3dgood function")
    var option3d=myChart3d.getOption();
    var realpath=path+"goodsale3D";
    $.ajax({
        type:"post",
        //url:"http://localhost:8080/libraryone/shengejing/goodsale3D",
        url:realpath,
        async:false,
        datatype:"json",
       /* data: {shop:$("#3d .chosen-select").val(),
            begindate:$("#3d #start").val(),
            enddate:$("#3d #end").val()},*/
        //contentType:"charset=utf-8",
        success:function(result){
            if(result){
                var result=eval("("+result+")");
                //最终的recordtime
                var listrecordtime=[];
                var shop=[];
                //最终的type
                var alltype=[];
                var alldata=[];
                for(var i=0;i<result.length;i++){
              /*      var shops=result[i]['shop'];
                    var recordtime=result[i]['recordtime'];
                    var app=[];
                    var typedata=result[i]['typedata'];
                    var type=[];
                    var data=[];
                    var alldate=[];
                    var appcdata=[];
                    for(key in typedata){
                        type.push(key);
                        /!* data.push([key,recordtime,typedata[key]['app']]); *!/
                        alldata.push([key,recordtime,typedata[key]['app']]);
                    }
                    listrecordtime.push(recordtime);

                    shop=shops;
                    alltype=type;
                    //alldata.push(data);

                    //console.log("data:"+data);*/

              var type=result[i]['type'];
              var sale=result[i]['sale'];
              var month=result[i]['month'];
              //jquery 半段数据 不存在
            if($.inArray(type,alltype)==-1){
                alltype.push(type);
            }
                    if($.inArray(month,listrecordtime)==-1){
                        listrecordtime.push(month);
                    }
              alldata.push([type,month,sale]);

                }
                console.log("alldata:"+alldata);
                console.log("alltype:"+alltype);
                console.log("time:"+listrecordtime);
                option3d.title[0].text="时间对应销量图";
                //非要设置成[0]才出现
                //xdata=type;
                //console.log(alltype);
                option3d. zAxis3D[0].name="销量";
                option3d.xAxis3D[0].data=alltype;
                //console.log(option.xAxis3D[0].data);
                //ydata=recordtime;
                //console.log(listrecordtime);
                option3d.yAxis3D[0].data=listrecordtime;
                //  console.log(option.yAxis3D[0].data);
                //zdata=data;
                option3d.series[0].data=alldata.map(function (item) {
                    return {
                        value: [item[0], item[1], item[2]],
                    }
                });
                //console.log(option.series[0].data);
                myChart3d.hideLoading();
                myChart3d.setOption(option3d);

            };
        },
        error:function(error){
            alert("后台请求数据失败");
            myChart3d.hideLoading();
            myChart3d.setOption();
        }
    });
}


