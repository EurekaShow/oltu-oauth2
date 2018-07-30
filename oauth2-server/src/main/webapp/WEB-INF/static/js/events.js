var events={
    selectClick:selectClick=function(element,args){
        args.each(function (index, ele) {
            $(ele).css({
                color: "#75869F",
                border: "1px dashed #75869F"
            })
            $(ele).removeClass('selected');
        })
        $(element).css({
            color: "#BA0109",
            border: "1px solid #BA0109"
        })
        $(element).addClass('selected');
    },
    active:active=function(element){
        $(element).siblings().removeClass('active');
        $(element).addClass('active');
    },
//            type:  0 血糖  1 血压  2 行走  3 体重 4 睡眠
    analyse:analyse=function(Object){
        var iconElement=$('.rule em');
        var messageElement=$('.rule_message');
        var bgElement=$('.bsResult_content');
        if(Object.type==0){
            if(Object.bloodType==1){
                icon_move=12.5;
                messageElement.text("低血糖");
                messageElement.css('color','#F8B93A');
                bgElement.css("background-color","#F8BC3D");
                iconElement.css("backgroundImage","url(images/icon_low.png)");
            } else if(Object.bloodType==2){
                icon_move=37.5;
                messageElement.text("正常");
                messageElement.css('color','#91C424');
                bgElement.css("background-color","#B9D30E");
                iconElement.css("backgroundImage","url(images/icon_normal.png)");
            }else if(Object.bloodType==3){
                icon_move=62.5;
                messageElement.text("糖尿病前期");
                messageElement.css('color','#EB6001');
                bgElement.css("background-color","#EF6B09");
                iconElement.css("backgroundImage","url(images/icon_prophasic.png)");
            }else if (Object.bloodType==4){
                icon_move=87.5;
                messageElement.text("高血糖");
                messageElement.css('color','#B90309');
                bgElement.css("background-color","#C10B07");
                iconElement.css("backgroundImage","url(images/icon_hot.png)");
            }
            deal_iconMove=icon_move-3.5+"%";
            iconElement.css("left",deal_iconMove);
        }else if(Object.type==1){
            if(Object.bloodType==1){
                icon_move=100/12;
                messageElement.text("低血压");
                messageElement.css('color','#F7CD05');
                bgElement.css("background-color","#F9C040");
                iconElement.css("backgroundImage","url(images/icon_low.png)");
            } else if(Object.bloodType==2){
                icon_move=100/6+100/12;
                messageElement.text("正常");
                messageElement.css('color','#8FC320');
                bgElement.css("background-color","#B9D30E");
                iconElement.css("backgroundImage","url(images/icon_normal.png)");
            }else if(Object.bloodType==3){
                icon_move=100/6*2+100/12;
                messageElement.text("轻微高血压");
                messageElement.css('color','#72829B');
                bgElement.css("background-color","#868F9E");
                iconElement.css("backgroundImage","url(images/icon_light.png)");
            }else if (Object.bloodType==4){
                icon_move=100/6*3+100/12;
                messageElement.text("轻度");
                messageElement.css('color','#F06C08');
                bgElement.css("background-color","#F06C08");
                iconElement.css("backgroundImage","url(images/icon_prophasic.png)");
            }else if (Object.bloodType==5){
                icon_move=100/6*4+100/12;
                messageElement.text("中度");
                messageElement.css('color','#B90006');
                bgElement.css("background-color","#BF0C07");
                iconElement.css("backgroundImage","url(images/icon_middle.png)");
            }else if (Object.bloodType==6){
                icon_move=100/6*5+100/12;
                messageElement.text("重度");
                messageElement.css('color','#60000C');
                bgElement.css("background-color","#70000C");
                iconElement.css("backgroundImage","url(images/icon_weight.png)");
            }
            deal_iconMove=icon_move-3.5+"%";
            iconElement.css("left",deal_iconMove);
        }else if(Object.type==2){
            if(Object.bloodType==1){
                Object.bgElement.css("background-color","#F8BC3D");
            } else if(Object.bloodType==2){
                Object.bgElement.css("background-color","#B9D30E");
            }else if(Object.bloodType==3){
                Object.bgElement.css("background-color","#EF6B09");
            }else if (Object.bloodType==4){
                Object.bgElement.css("background-color","#C10B07");
            }
        }
    },
    getNowFormatDate:getNowFormatDate=function(){
        var date = new Date();
        var seperator1 = "-";
        var seperator2 = ":";
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
            + " " + date.getHours() + seperator2 + date.getMinutes();
        return currentdate;
    },
    getNowYearMonth:getNowYearMonth=function(){
        var date = new Date();
        var seperator1 = "-";
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate;
        return currentdate;
    },
    setBodyHeight:getBodyHeight=function(){
        document.getElementsByTagName('body')[0].style.height=window.innerHeight+'px';
    }
}