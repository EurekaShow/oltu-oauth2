//开发
/*require.config({
    paths: {
        mui: '../static/js/mui',
        vue:'../static/js/vue',
        zepto:'../static/js/zepto'
    }
});*/

//发布

require.config({
    shim: {
        muiview: ['mui'],
        touch:['zepto'],
        weui:['zepto']
        //vuetap:['vue'],
        //vuetouch:['vue','hammer']
    },
    paths: {
        mui: '../static/js/base/mui.min',
        muiview: '../static/js/base/mui.view',
        vue:'../static/js/base/vue.min',
        zepto:'../static/js/base/zepto.min',
        echarts : "../static/js/base/echarts.min",
        weui : "../static/js/jquery-weui",
        fastclick: "../static/js/fastclick",
        echarts: "../static/js/base/echarts.min",
        es5: "../static/js/base/es5.min",
        bootstrap:"../static/js/base/bootstrap",
        jquery:"../static/js/jquery.min",

        touch:'../static/js/touch',

        fxMethods : "../static/js/base/fx_methods",
        fx : "../static/js/base/fx",
        wx : "../static/js/base/wx",
        picker:"../static/js/base/mui.picker",
        popPicker:"../static/js/base/mui.poppicker",
        dtPicker:"../static/js/base/mui.dtpicker",

        basic:"../static/js/wechat.basic",
        logic:"../static/js/wechat.logic",

        events:"../static/js/events",
        toast:"../static/js/base/toast",
        loading:"../static/js/base/loading",

        swiper:"../static/js/base/swiper.min"

        //gaode:"http://webapi.amap.com/maps?v=1.3&key=427ac4186d26e58601613e458cf6103a&plugin=AMap.Geocoder",
        //gaodetoolbar:"http://cache.amap.com/lbs/static/addToolbar.js",


        //vue:v-for 动画插件
        //vanimated:'../static/js/base/vue-animated-list',

        //vuetap:'../static/js/base/vue-tap',
        //vuetouch:'../static/js/base/vue-touch',
        //hammer:'../static/js/base/hammer.min',
    }
});
