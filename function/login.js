function  login(name,password) {
    var path=config.baseurl+"loginforperson";

    $.ajax
    ({ //请求登录处理页
        url:path, //登录处理页
        dataType: "json",
        //传送请求数据
        data: { username: name, password: password },
        success: function (strValue) { //登录成功后返回的数据
            //根据返回值进行状态显示
            if (strValue == "true") {//注意是True,不是true
                alert("login success");
                console.log('login then ');
                window.location.href="datatables.html";

            }
            else if(strValue == "false"){
               alert("login error");
            }
        }
    })
}