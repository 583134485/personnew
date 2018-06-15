var path=config.baseurl+"shengecanmou/"
$().ready(function () {
    $.validator.setDefaults({
        highlight: function(element) {
            $(element).closest('.form-group').removeClass('has-success').addClass('has-error');
        },
        success: function(element) {
            element.closest('.form-group').removeClass('has-error').addClass('has-success');
        },
        errorElement: "span",
        errorClass: "help-block m-b-none",
        validClass: "help-block m-b-none"

    });
    $("#area-form1").validate({
        submitHandler: function(form) {
            var realpath=path+"showfullgraph";
            $.ajax({
                type: "post",
               // url: "http://127.0.0.1:8080/libraryone/shengecanmou/showfullgraph",
                url:realpath,
                dataType:"json",
                crossDomain: true,
                data: {
                   brands:$("#brands1").val(),
                    keyword: $("#chosen1").val()

                },
                success: function(result) {
                    if(result){
                      //error:showfullgraph is not defined  方法没加载进来。。
                      //  var data=result;
/*                        try{
                            var data = JSON.parse(result);
                        } catch(e) {
                            var data = eval("("+result+")");
                        }*/
                     //  var data = eval("("+result+")");
                        var data=result;
                        showfullgraph(data);
                    }

                }

            });
        },
        /*debug test not really submit*/
        //debug:true,
  /*      rules:{
            brands:{
                required: true,
                minlength:10
                //远程异步验证
                /!*                    remote: {
                                        url: "",
                                        crossDomain: true,
                                        type: "post",
                                        dataType: "json",
                                        data: {
                                            brands: function() {
                                                return $("#brands").val();
                                            }
                                        }
                                    }*!/
            },

        },
        messages:{
            brands:{
                required:"not empty",
                minlength:"至少10位数"
                // remote:"ID不存在老哥",
            }

        }*/

    })

    $("#area-form2").validate({
        submitHandler: function(form) {
            var realpath=path+"showHotWord";
            $.ajax({
                type: "post",
                //url: "http://127.0.0.1:8080/libraryone/shengecanmou/showHotWord",
                url:realpath,
                dataType:"json",
                crossDomain: true,
                data: {
                    brands:$("#brands2").val(),
                    limit:$("#number2").val(),
                    keyword: $("#chosen2").val()


                },
                success: function(result) {
                    if(result){
                        //error:showfullgraph is not defined  方法没加载进来。。
                        //  var data=result;
                        /*                        try{
                                                    var data = JSON.parse(result);
                                                } catch(e) {
                                                    var data = eval("("+result+")");
                                                }*/
                        //  var data = eval("("+result+")");
                        var data=result;
                        showhotwords(data);
                    }

                }

            });
        },
        /*debug test not really submit*/
        //debug:true,
             rules:{
                 number2:{
                   required:true,
                     max:50,
                     digits:true
                 },
                  brands2:{
                      required: true,

                      //远程异步验证
   /*                                     remote: {
                                              url: "",
                                              crossDomain: true,
                                              type: "post",
                                              dataType: "json",
                                              data: {
                                                  brands: function() {
                                                      return $("#brands2").val();
                                                  }
                                              }
                                          }*/
                  },

              },
              messages:{
                  brands2:{
                      required:"not empty",

                      // remote:"ID不存在老哥",
                  },
                  number2:{
                      required:"not empty",
                      max:"太大了。。",
                      digits:"整数..."
                  }


              }

    })
})