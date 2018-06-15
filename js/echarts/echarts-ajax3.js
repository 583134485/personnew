function showfullgraph(data) {

    var option=graphechart.getOption();
    graphechart.showLoading({
        text:"loading"
    })
       var legend=[];
    var sdata=[];
    var firstdata=[];
     var all=[];
    //连接
    var link=[];
    var categories=[];
    var keyname;
    //key name get
    for(key in data[2]){
        if(key!='title'){
            keyname=key;
        }
    }
    for(key in data){

            //取 关键词

                //总
                if(data[key]['title']=='卓雅'){
                    firstdata.push({
                        name:data[key]['title'],
                       value:data[key][keyname],
                        symbolSize: 20,
                        draggable: "true"

                    })
                }
                //分支
                else{
                    sdata.push({
                        name:data[key]['title'],
                        value:data[key][keyname],
                       // symbolSize: Math.round(data[key][keyname]),
                        symbolSize: data[key][keyname]/50,
                       // category:data[key][keyname],
                        draggable: "true"

                    })
                    categories.push({name:data[key][keyname]})
                     link.push({
                         source:"卓雅",
                         target:data[key]['title']
                     })
                    legend.push(data[key]['title'])

                }



    }



 all=firstdata.concat(sdata)
    console.log("legend"+legend);
    console.log("fisjsonstri"+JSON.stringify(firstdata));
    console.log("fis"+firstdata);
    console.log("fiseval"+eval(firstdata));
    console.log("sdata"+JSON.stringify(sdata));
    console.log("sdata:"+sdata);
    console.log("all"+JSON.stringify(all));
    console.log("all:"+all);



        option.legend[0].data=legend;
        option.title[0].text="关于"+keyname+"关系分析"
       option.series[0]={
            data:all,
            name: '卓雅',
           links:link,
           categories:categories

       }
       // option.series[0].data=all;
        //option.series[0].name="卓雅";
  console.log(option.legend[0].data)
    graphechart.hideLoading();
    graphechart.setOption(option);

}

function  showhotwords(data) {
    var option =hotwordschart.getOption();
    hotwordschart.showLoading({
        text:"loading..."
    })

    var keyname=[]

    var sdata=[]
    for(key in data[1]){
        if(key!='title'){
            keyname=key
        }
    }
    for(key in data){

            sdata.push({
                name:data[key]['title'],
                value:data[key][keyname]
            })

        }



    option.title[0].text="关于"+keyname+"热度"
    option.series[0].data=sdata
    hotwordschart.hideLoading();
    hotwordschart.setOption(option);
}