
define(['vue',"zepto","touch","fastclick","basic","logic"], function(vue,$,touch,fastclick,basic,logic) {
    //noinspection JSAnnotator
        var index =new vue({
            el: '#index',
            data: {

                consumerId:'',
                consumerName:'',
                healthUrl:'',
                workorderUrl:'',
                customerList:[]

            },
            methods: {

            }
        });

    $(function(){

        fastclick.attach(document.body);

        loginCheck(true,function(){
            resetCustomerList();
        });

        index.consumerId=sessionStorage.getItem("consumerId");
        index.consumerName=sessionStorage.getItem("consumerName");
    });

    function resetCustomerList() {

        if(sessionStorage["customerList"]) {
            index.customerList = JSON.parse(sessionStorage["customerList"]);
        }

        if(index.customerList) {

            if(index.customerList.length>1){

                index.healthUrl = 'customerList.html?sourceUrl=health/index.html';

                index.workorderUrl = 'customerList.html?sourceUrl=workorderFeedbackList.html';

            }else if(index.customerList.length ==1){

                index.healthUrl = 'health/index.html?id='+index.customerList[0].id+'&ukey='+index.customerList[0].customerUkey;

                index.workorderUrl = 'workorderFeedbackList.html?id='
                    +index.customerList[0].id+'&ukey='+index.customerList[0].customerUkey
                    +'&uname='+index.customerList[0].customerName;
            }else{

                //没有绑定老人信息，不做跳转
                index.healthUrl = '#';
                index.workorderUrl ='#';
            }
        }else {
            //没有绑定老人信息，不做跳转
            index.healthUrl = '#';
        }
    }



    return {
        index:index
    };
});
