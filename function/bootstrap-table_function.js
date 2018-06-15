function submit1(){
var path=config.baseurl+"shengecanmou/showfullgraph";
 console.log("submit 1");

/*    $.ajax({
        type:"post",
        url:path,
        async:true,
        datatype:"json",
        data: {
            brands:$("#brands1").val(),
            keyword: $("#chosen1").val()
        },
        //contentType:"application/json;charset=utf-8",
        success:function(result){
            if(result){
                var result=eval("("+result+")");
                  console.log(result);
                $("#exampleTableEvents").bootstrapTable('insertRow', {index:0, row:result});

            };
        },
        error:function(error){
            alert("后台问题请求失败");
        }
    });*/

    $('#exampleTableEvents').bootstrapTable({
        ajax : function (request) {
            $.ajax({
                type:"post",
                url:path,
                async:true,
                datatype:"json",
                data: {
                    brands:$("#brands1").val(),
                    keyword: $("#chosen1").val()
                },
                success : function (msg) {
                    var data = eval("("+msg+")");
                    request.success({
                        row : data
                    });
                    $('#exampleTableEvents').bootstrapTable('load', data);
                },
                error:function(){
                    alert("错误");
                }
            });
        },

       toolbar:'#toolbar',
        singleSelect:true,
        clickToSelect:true,
        sortName: "create_time",
        sortOrder: "desc",
        pageSize: 15,
        pageNumber: 1,
        pageList: "[10, 25, 50, 100, All]",
        showToggle: true,
        showRefresh: true,
        showColumns: true,
        search: true,
        pagination: true,
        columns: [{
            field: 'title',
            title: 'title',
            switchable: true
        }, {
            field: 'views',
            title: 'views',
            switchable: true
        },
            {
                field: 'visitors',
                title: 'visitors',
                switchable: true

            },
            {
                field: 'staytime',
                title: 'staytime',
                switchable: true
            }],

    });
}


function submist2(){

}