var loadCustomerList=function(callback){

    console.log("load customerList beginning~!");

    var consumerId = sessionStorage["consumerId"];

    var url = '../consumer/customerList?consumerId='+consumerId;

    console.log(url);

    $.ajax({
        type:'POST',

        url:url,
        //data: data,
        contentType: 'text/html',

        success:function(data){

            //console.log(data);

            var dt = JSON.parse(data);

            if(dt.code==1.0){

                //obj.customerList = [];

                var array = $.map(dt.object, function(value, index) {
                    return [value];
                });

                //obj.customerList = array;

                sessionStorage["customerList"] = JSON.stringify(array);

                if(callback) {
                    callback();
                }

                //console.log(index.customerList[0]);

            }else{
                //mui.toast('');
            }
        },
        error:function(){

        }
    });
};

var loginCheck = function(isLoadCustomerList,callback){

    //var consumerId = obj.consumerId  =QueryString("consumerId");

    //var name = obj.consumerName  = QueryString("name");

    if(!sessionStorage.getItem("consumerId")){
        window.location.href ="login.html";
    }
    //
    // if(consumerId){
    //
    //     sessionStorage["consumerId"] = consumerId;
    //
    //     sessionStorage["consumerName"] = name;
    //
    //     console.log(consumerId);
    //
    // }else{
    //
    //     if(sessionStorage["consumerId"]) {
    //
    //         consumerId = obj.consumerId = sessionStorage["consumerId"];
    //
    //         name = obj.consumerName = sessionStorage["consumerName"];
    //     }
    // }

    // console.log(consumerId+" - "+name);


    // if(!consumerId){
    //     window.location.href ="login.html";
    // };

    if(isLoadCustomerList) {

        if (!sessionStorage["customerList"]) {

            loadCustomerList(callback);

        }else{
            if(callback) {
                callback();
            }
        }
        // else {
        //
        //     obj.customerList = JSON.parse(sessionStorage["customerList"]);
        //
        // }
    }
};