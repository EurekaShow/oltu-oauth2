
define(['vue',"zepto","touch","mui","fastclick"], function(vue,$,touch,mui,fastclick) {

    var index =new vue({
        el: '#app',
        data: {
            phone:'',
            pwd:'',
            wechat:''
        },
        methods: {
            login:function(){
                loggin();
            }
        }
    });

    var QueryString =function getQueryString(name) {

        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");

        var r = window.location.search.substr(1).match(reg);

        if (r != null) {
            return decodeURIComponent(r[2]);
        }
        return null;

    };

    var loggin=function(){

        if(!index.phone || !index.pwd){

            //mui.toast("phone:["+index.phone+"] pwd:["+index.pwd+"] wechat:["+index.wechat+"]");
            mui.toast("手机号和密码不能为空~!");
            return;
        }

        $.ajax({
            type:'POST',
            url:'../consumer/thirdLogin?mobile='+index.phone+"&wechat="+index.wechat+"&password="+index.pwd,
            contentType: 'text/html',
            success:function(data){
                var dt = JSON.parse(data);

                //console.log(dt.code);
                //console.log(dt.object);

                if(dt.code=="1.0"){

                    //mui.toast("登录成功~!");
                    //mui.toast("index.html?consumerId="+dt.object.id+"&name="+ decodeURIComponent(dt.object.name));

                    sessionStorage["consumerId"] = dt.object.id;

                    sessionStorage["consumerName"] = dt.object.name;

                    window.location.href = "index.html";
                    //window.location.href = "index.html?consumerId="+dt.object.id+"&name="+ decodeURIComponent(dt.object.name);

                }else{
                    mui.toast("登录失败~!");
                }

            },
            error:function(xhr, type){

            }
        });
    };

    $(function () {

        fastclick.attach(document.body);

        index.wechat = QueryString("wechat");
    });

    return {
        index:index
    };
});
