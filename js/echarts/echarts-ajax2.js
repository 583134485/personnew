function  showareatable (data) {
   var optionchartarea= mychartarea.getOption();
   mychartarea.showLoading({
       text:"在加载别急"
   })
   var xdata=[];
   var value=[];
   var keyname=[];
for(i=0;i<data.length;i++){
    /*遍历 对象 属性 的 方法*/
    for(  var key in data[i]){
        console.info("key"+key)

        if(key=='recordtime'){
            xdata.push(data[i][key]);
        }
         else{
            value.push(data[i][key]);
        }

    }
    for(var key in data[0]){
        if(key!='recordtime'){
            keyname=key;
        }

    }

}
console.info(xdata+"value"+value);

   optionchartarea.title[0].text="周期内"+keyname+"的详情"
   optionchartarea.xAxis[0].data=xdata;
    optionchartarea.series[0].data=value;
    optionchartarea.series[0].name=keyname+"真实值"
    mychartarea.hideLoading();
    mychartarea.setOption(optionchartarea);
}

function showorderrefund(data) {
    var option=doublebarchart.getOption();
     doublebarchart.showLoading({
         text:"在加载别急"
     })
    var date=[]
   var order=[];
   var refund=[];
   for(i=0;i<data.length;i++){

       for(key in data[i]){
           if(key=="ordergoods"){
               order.push(data[i][key]);
           }
           else if(key=="refundnumbers"){
               refund.push(-data[i][key]);
           }
           else if(key=="recordtime"){
               date.push(data[i][key]);
           }

       }
   }
   option.yAxis[0].data=date;
    option.series[0].data=order;
    option.series[1].data=refund;

    doublebarchart.hideLoading();
    doublebarchart.setOption(option);

}

function showorderrefund2(data) {
    var option=ladderchart.getOption();
    ladderchart.showLoading({
        text:"在加载别急"
    })
    var date=[]
    var order=[];
    var refund=[];
    var purchase=[];
    var legend=[];
    for(i=0;i<data.length;i++){

        for(key in data[i]){
            if(key=="ordergoods"){
                order.push(data[i][key]);
            }
            else if(key=="refundnumbers"){
                refund.push(-data[i][key]);
            }
            else if(key=="recordtime"){
                date.push(data[i][key]);
            }
            else if(key=="purchase"){
                 purchase.push(data[i][key]);
            }

        }
        for(key in data[0]){
            legend.push(key);
        }
    }
  option.legend[0].data=legend;
    option.xAxis[0].data=date;
    option.series[0].data=purchase;
    option.series[0].name=legend[1];
    option.series[1].data=order;
    option.series[1].name=legend[0];
    option.series[2].data=refund;
    option.series[2].name=legend[3];

   ladderchart.hideLoading();
    ladderchart.setOption(option);
}

function showquarter(data) {
 var option =piechart.getOption();
  piechart.showLoading({
      text:"在加载别急"
  })
    var sdata=[];
    var keyword;
    for(key in data[0]){
        if(key!="id"&&key!="title"){
            keyword=key;
        }
    }
    for(i=0;i<data.length;i++){
       sdata.push({
           value:data[i][keyword],
           name:data[i]['title']
       })
    }
    console.log(sdata)
    option.series[0].data=sdata;
    option.title[0].text=keyword+"累计比例"
    piechart.hideLoading();
    piechart.setOption(option);

    
}
function  showconversion(data) {
var option =funnelchart.getOption();
funnelchart.showLoading({
    text:"在加载别急"
})
    option.title[0].text="用户对"+data["title"]+"行为";
    option.series[0].data=[
        {value:100,name:"浏览"},
        {value:data["detailspage"],name:"详情页跳出率"},
        {value:data["orderconrate"],name:"下单率"},
         {value:data["payconrate"],name:"支付率"}
    ]
   funnelchart.hideLoading();
    funnelchart.setOption(option);




}