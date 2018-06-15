var path=config.baseurl+"shengecanmou/";
$().ready(function () {
    //以下为修改jQuery Validation插件兼容Bootstrap的方法，没有直接写在插件中是为了便于插件升级
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

        $("#area-form").validate({
            submitHandler: function(form) {
                var realpath=path+"showareatable";
                $.ajax({
                    type: "post",
                   //url: "http://127.0.0.1:8080/libraryone/shengecanmou/showareatable",
                    url:realpath,
                    dataType: "json",
                    crossDomain: true,
                    data: {
                        id: $("#id").val(),
                        word: $("#chosen1").val()

                    },
                    success: function(result) {
                        if(result){
                            //如下报错
                            // var data=eval("("+result+")");
                            //也报错
                            //var data=$.parseJSON(result);
                            console.info(result.type)
                            /* try{
                                 var data = JSON.parse(result);
                             } catch(e) {
                                 var data = eval("("+ result +")");
                             }*/
                            // alert(data);
                            // console.log(data);
                            //额。。。
                            var data=result;
                            showareatable(data);
                        }

                    }

                });
            },
            /*debug test not really submit*/
            //debug:true,
            rules:{
                id:{
                    required: true,
                    minlength:10
                    //远程异步验证
                    /*                    remote: {
                                            url: "",
                                            crossDomain: true,
                                            type: "post",
                                            dataType: "json",
                                            data: {
                                                id: function() {
                                                    return $("#id").val();
                                                }
                                            }
                                        }*/
                },

            },
            messages:{
                id:{
                    required:"not empty",
                    minlength:"至少10位数"
                    // remote:"ID不存在老哥",
                }

            }


        })

        $("#area-form2").validate({
            submitHandler: function(form) {
                var realpath=path+"showoderrefund";
                $.ajax({
                    type: "post",
                    //url: "http://127.0.0.1:8080/libraryone/shengecanmou/showoderrefund",
                    url:realpath,
                    dataType: "json",
                    crossDomain: true,
                    data: {
                        id: $("#id2").val()
                    },
                    success: function(result) {
                        if(result){
                            //如下报错
                            // var data=eval("("+result+")");
                            //也报错
                            //var data=$.parseJSON(result);
                           // console.info(result.type)
                            /* try{
                                 var data = JSON.parse(result);
                             } catch(e) {
                                 var data = eval("("+ result +")");
                             }*/
                            // alert(data);
                            // console.log(data);
                            //额。。。
                            var data =result;
                            showorderrefund(data);
                        }

                    }

                });
            },
            /*debug test not really submit*/
           // debug:true,
            rules:{
                id2:{
                    required: true,
                    minlength:10
                    //远程异步验证
                    /*                    remote: {
                                            url: "",
                                            crossDomain: true,
                                            type: "post",
                                            dataType: "json",
                                            data: {
                                                id: function() {
                                                    return $("#id").val();
                                                }
                                            }
                                        }*/
                },

            },
            messages:{
                id:{
                    required:"not empty",
                    minlength:"至少10位数"
                    // remote:"ID不存在老哥",
                }

            }

        })



$("#area-form3").validate({

    submitHandler: function(form) {
        var realpath=path+"showoderrefund";
        $.ajax({
            type: "post",
            //url: "http://127.0.0.1:8080/libraryone/shengecanmou/showoderrefund",
            url:realpath,
            dataType: "json",
            crossDomain: true,
            data: {
                id: $("#id3").val()
            },
            success: function(result) {
                if(result){
                    //如下报错
                    // var data=eval("("+result+")");
                    //也报错
                    //var data=$.parseJSON(result);
                    // console.info(result.type)
                    /* try{
                         var data = JSON.parse(result);
                     } catch(e) {
                         var data = eval("("+ result +")");
                     }*/
                    // alert(data);
                    // console.log(data);
                    //额。。。
                    var data =result;
                    showorderrefund2(data);
                }

            }

        });
    },
    /*debug test not really submit*/
    // debug:true,
    rules:{
        id3:{
            required: true,
            minlength:10
            //远程异步验证
            /*                    remote: {
                                    url: "",
                                    crossDomain: true,
                                    type: "post",
                                    dataType: "json",
                                    data: {
                                        id: function() {
                                            return $("#id").val();
                                        }
                                    }
                                }*/
        },

    },
    messages:{
        id:{
            required:"not empty",
            minlength:"至少10位数"
            // remote:"ID不存在老哥",
        }

    }


})
$("#form-4").validate({

    submitHandler: function(form) {
        var realpath=path+"showquarter";
        $.ajax({
            type: "post",
           // url: "http://127.0.0.1:8080/libraryone/shengecanmou/showquarter",
            url:realpath,
            dataType: "json",
            crossDomain: true,
            data: {
                keyword: $("#chosen2").val()
            },
            success: function(result) {
                if(result){
                    //如下报错
                    // var data=eval("("+result+")");
                    //也报错
                    //var data=$.parseJSON(result);
                    // console.info(result.type)
                    /* try{
                         var data = JSON.parse(result);
                     } catch(e) {
                         var data = eval("("+ result +")");
                     }*/
                    // alert(data);
                    // console.log(data);
                    //额。。。
                    var data =result;
                    showquarter(data);
                }

            }

        });
    },
    /*debug test not really submit*/
    // debug:true,
/*    rules:{
        id3:{
            required: true,
            minlength:10
            //远程异步验证
            /!*                    remote: {
                                    url: "",
                                    crossDomain: true,
                                    type: "post",
                                    dataType: "json",
                                    data: {
                                        id: function() {
                                            return $("#id").val();
                                        }
                                    }
                                }*!/
        },

    },
    messages:{
        id:{
            required:"not empty",
            minlength:"至少10位数"
            // remote:"ID不存在老哥",
        }

    }*/



})

    $("#form-5").validate({
        submitHandler: function(form) {
            var realpath=path+"showconversion";
            $.ajax({
                type: "post",
                //url: "http://127.0.0.1:8080/libraryone/shengecanmou/showconversion",
                url:realpath,
                dataType: "json",
                crossDomain: true,
                data: {
                    id: $("#id5").val()
                },
                success: function(result) {
                    if(result){
                        //如下报错
                        // var data=eval("("+result+")");
                        //也报错
                        //var data=$.parseJSON(result);
                        // console.info(result.type)
                        /* try{
                             var data = JSON.parse(result);
                         } catch(e) {
                             var data = eval("("+ result +")");
                         }*/
                        // alert(data);
                        // console.log(data);
                        //额。。。
                        var data =result;
                        showconversion(data);
                    }

                }

            });
        },
        /*debug test not really submit*/
        // debug:true,
        /*    rules:{
                id3:{
                    required: true,
                    minlength:10
                    //远程异步验证
                    /!*                    remote: {
                                            url: "",
                                            crossDomain: true,
                                            type: "post",
                                            dataType: "json",
                                            data: {
                                                id: function() {
                                                    return $("#id").val();
                                                }
                                            }
                                        }*!/
                },

            },
            messages:{
                id:{
                    required:"not empty",
                    minlength:"至少10位数"
                    // remote:"ID不存在老哥",
                }

            }*/

    })
})



