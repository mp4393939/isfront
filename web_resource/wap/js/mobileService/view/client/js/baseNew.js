// JavaScript Document
/* 站点说明： 中国联通手机客户端
 * 开发时间： 2011-04-14
 * 开发者： 宁玉波
 * 维护者： 胡建
 *
 * 样式版本： v3.0
 * 版本时间： 2014-03-14
 * 注意事项： 共用JS文件
 */
/*
GET https://img.client.10010.com/mobileService/view/client/js/baseNew.js?_=1539756662331 HTTP/1.1
Host: img.client.10010.com
*/

;jQuery(function ($) {

    //Initialization
    //use this quick url
    url = function (url) {
        window.location.href = url;
    };

    //you can try it go back
    var backBtn = $('.goback');
    var goBack = function () {
        window.history.back();
    };
    backBtn.bind('click', goBack);

    //弹出层调用
    function popupfn(popupBtn, popup, ensureBtn) {
        $(popupBtn).click(function () {
            $(popup).show();
        });
        $(ensureBtn).click(function () {
            $(this).parents(popup).hide();
        });
    };
    popupfn('.popupBtn', '.bg_popup', '.ensureBtn');

    //三级页面共用js（部分共用效果可以参考base.js,用到时拷贝到此文件,并重新命名）
    //头部用户信息
    $("#clientInfo").find('.clientInfo_top').click(function () {
        $(".clientInfo_table").toggle();
        $(this).find('section').toggleClass('hover');
    });

    //办理类页面选项卡
    !$('.tab').length || (function () {
        $('.tab').find('li').click(function () {
            var index = $('.tab').find('li').index(this);
            $(this).addClass('active').siblings().removeClass('active');
            $('.tabCon').eq(index).show().siblings('.tabCon').hide();
        });
    })();

    //办理类页面选项卡
    !$('.tab_new').length || (function () {
        $('.tab_new').find('li').click(function () {
            var index = $('.tab_new').find('li').index(this);
            $(this).addClass('active').siblings().removeClass('active');
            //$('.tabCon').eq(index).show().siblings('.tabCon').hide();
            $('.tab_new').find('span').attr('style', '');
            $(this).find('span').attr('style', 'color:#fe7f05;');
        });
    })();

    //点击瞬间效果
    (function () {
        function setBtnColor(className, addClass) {
            $(className).bind('mousedown touchstart', function () {
                $(this).addClass(addClass);
            }).bind('mouseup touchend', function () {
                $(this).removeClass(addClass);
            }).bind('mouseover touchmove', function () {
                $(this).removeClass(addClass);
            });
        };
        setBtnColor('#confirm_pop', 'active');
        setBtnColor('.tips_dial', 'active');
        setBtnColor('.tab_list', 'active');
        setBtnColor('.btn', 'active');
    })();

    //温馨提示展开显示
    $('#wenxin').find('ul li:gt(1)').hide();
    $('#wenxin').click(function () {
        $(this).find('ul li:gt(1)').show();
        $(this).find('.show_more').hide();
    });

    //流量包 | 展开定单详情
    $('.img_btn:eq(0)').prev('p').click(function () {
        $('.img_btn:eq(0)').toggleClass('img_tab');
        $('.ex:eq(0)').toggle();

    })
    $('.img_btn:eq(0)').click(function () {
        $('.img_btn:eq(0)').toggleClass('img_tab');
        $('.ex:eq(0)').toggle();

    })

    $('.img_btn:eq(1)').prev('p').click(function () {
        $('.img_btn:eq(1)').toggleClass('img_tab');
        $('.ex:eq(1)').toggle();

    })
    $('.img_btn:eq(1)').click(function () {
        $('.img_btn:eq(1)').toggleClass('img_tab');
        $('.ex:eq(1)').toggle();

    })

    //通话详单 | 田绍敏 | 2014.3.20
    $('.callDetail_top').find('li').click(function () {
        $(this).toggleClass('active').siblings().removeClass('active');
    });
    $('.call_tab').find('li').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });

    //查询方式弹出层
    $('.choose_query').find('.close_btn').click(function () {
        $(this).parent('.choose_query').hide();
    });

    //月份选择
    $('.month_list li').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });

    //月查询结果页图标固定效果
//	var calendar = $('.callMonth_list').find('.calendar');
//	var len = calendar.length;
//	var i = 0;
//
//	$(window).scroll(function(){
//		//alert(111);
//		var scrolla = $(window).scrollTop();
//		for(i=0;i<len;i++)
//			if(scrolla > calendar.eq(i).offset().top && scrolla < calendar.eq(i+1).offset().top){
//					calendar.removeClass('fixed');
//					calendar.eq(i).addClass('fixed');
//			}else{
//					calendar.eq(i).removeClass('fixed');
//			}
//	});

    !$('.criditT').length || (function () {
        $('.criditT').click(function () {
            $(this).find('.arrow').toggleClass('active');
            $(this).next().toggle();
        });
    })();


    //省份特色 | 展开业务说明
    $('.flow_page .con +div').click(function () {
        $(this).find('.img_btn').toggleClass('img_tab');
        $(this).parent('.flow_page').next().next('.flow_page').find('.ex').toggle();
    });
});


$(document).ready(function () {

    //通话详单|月详情分析  每日通话柱状图JS代码
    var net = $('input[name="net"]').val();
    var count = $('input[name="count"]');
    var textValue = '次';
    var xarry = new Array();  //5日通话次数
    for (var i = 0; i < count.length; i++) {
        xarry[i] = count[i].value;

    }
    var maxNum = Math.max.apply(Math, xarry);  //取数组中的最大值
    var index = $('.tu_s .load2 li').length;
    var thisConLi = $('.tu_s .load2 li');
    var kk = $('.detail_con .texts li');
    for (var i = 0; i < index; i++) {
        var total = (xarry[i] / maxNum) * 100 + '%';
        //取数组中的最大值比较
        if (xarry[i] == maxNum) {
            $(thisConLi).eq(i).find('.tu_h').addClass('zhu_active');
            $(thisConLi).eq(i).find('span').addClass('font_org');
        }
        if (net == "net") {
            textValue = 'KB';
            if (xarry[i] >= 1000) {
                textValue = 'MB';
                xarry[i] = xarry[i] / 1024;
                if (xarry[i] >= 1000) {
                    textValue = 'GB';
                    xarry[i] = xarry[i] / 1024;
                }
            }

            var num = new Number(xarry[i]);
            xarry[i] = num.toPrecision(3);
        }
        $(thisConLi).eq(i).find('span').text(xarry[i] + textValue);
        $(thisConLi).eq(i).find('.tu_h').animate({height: total}, 1000);
        if (i == index - 1) {
            $(thisConLi).eq(i).addClass('last');
            $(kk).eq(i).addClass('last');
        }

    }
    //通话详单|月详情分析  您经常通话的时间分布JS代码
    var smsTimeCount = $('input[name="smsTimeCount"]').val();
    var timeTextValue = "次";
    if (smsTimeCount == "smsTimeCount") {
        timeTextValue = "条";
    }
    var xarry2 = new Array();  //经常通话次数
    var timeCount = $('input[name="timeCount"]');
    for (var i = 0; i < timeCount.length; i++) {
        xarry2[i] = timeCount[i].value;
    }
    var maxNum2 = Math.max.apply(Math, xarry2);  //取数组中的最大值
    var index2 = $('.tu_s_02 .tu_s2 li').length;
    var thisConLi2 = $('.tu_s_02 .tu_s2 li');

    for (var i = 0; i < index2; i++) {
        var total2 = (xarry2[i] / maxNum2) * 100 + '%';
        //取数组中的最大值比较
        if (xarry2[i] == maxNum2) {
            $(thisConLi2).eq(i).find('.tu_h').addClass('zhu_active');
            $(thisConLi2).eq(i).find('span').addClass('font_org');
        }
        if (net == "net") {
            timeTextValue = 'KB';
            if (xarry2[i] >= 1000) {
                timeTextValue = 'MB';
                xarry2[i] = Math.round(xarry2[i] / 1024);
                if (xarry2[i] >= 1000) {
                    timeTextValue = 'GB';
                    xarry2[i] = Math.round(xarry2[i] / 1024);
                }
            }

        }
        $(thisConLi2).eq(i).find('.tu_h').animate({height: total2}, 1000);
        if (smsTimeCount == "smsTimeCount" || smsTimeCount == "callTimeCount") {
            $(thisConLi2).eq(i).find('span').html(xarry2[i] + timeTextValue);
        }
        if (smsTimeCount == "netTimeCount") {
            var num2 = new Number(xarry2[i]);
            $(thisConLi2).eq(i).find('span').html("<em style='font-size:10px;'>" + num2.toPrecision(3) + "</em>" + "<em style='font-size:10px;'>" + timeTextValue + "</em>");
        }

        if (i == index2 - 1) {
            $(thisConLi2).eq(i).addClass('last_02');
            if (smsTimeCount == "smsTimeCount" || smsTimeCount == "netTimeCount" || smsTimeCount == "callTimeCount") {
                $(thisConLi2).eq(i).attr("style", "margin-right:-1px;");
            }
        }

    }

    //通话详单|月详情分析 常联系您的小伙伴
    var arry = new Array();
    var arry1 = new Array();
    var numCount = $('input[name="numCount"]');
    var numCount1 = $('input[name="numCount1"]');
    for (var i = 0; i < numCount.length; i++) {
        arry[i] = numCount[i].value;
    }
    for (var i = 0; i < numCount1.length; i++) {
        arry1[i] = numCount1[i].value;
    }
    var maxNum = Math.max.apply(Math, arry);
    var maxNum1 = Math.max.apply(Math, arry1);
    var textValue = '次';
    if (smsTimeCount == "smsTimeCount") {
        textValue = "条";
    }
    var oLoading = $('.phone_01 li');  //联系人01
    var oLoading2 = $('.phone_02 li');  //联系人02
    var length = $('.phone_01 li').length;
    var length2 = $('.phone_02 li').length;
    for (var i = 0; i < length; i++) {
        var total = (arry[i] / maxNum) * 100 + '%';
        $(oLoading).eq(i).animate({width: total}, 1000);
        $(oLoading).eq(i).find('.value').text(arry[i] + textValue);
        if (i == length - 1) {
            $(oLoading).eq(i).addClass('last');
        }
        if (arry[i] == maxNum) {
            $(oLoading).eq(i).find('.jindu').addClass('jin_active');
            $(oLoading).eq(i).find('.value').addClass('font_org');
        }
    }
    for (var i = 0; i < length2; i++) {
        var total = (arry1[i] / maxNum1) * 100 + '%';
        $(oLoading2).eq(i).animate({width: total}, 1000);
        $(oLoading2).eq(i).find('.value').text(arry1[i] + textValue);
        if (i == length2 - 1) {
            $(oLoading2).eq(i).addClass('last');
        }
        if (arry1[i] == maxNum1) {
            $(oLoading2).eq(i).find('.jindu').addClass('jin_active');
            $(oLoading2).eq(i).find('.value').addClass('font_org');
        }
    }

    //短彩信详单|月详情分析  每日发送柱状图JS代码
    var smstextValue = '条';
    var smsxarry = new Array();  //5日发送条数
    var kk = $('.detail_con .texts li');
    var rankCount = $('input[name="rankCount"]');
    for (var i = 0; i < rankCount.length; i++) {
        smsxarry[i] = rankCount[i].value;
    }
    var smsmaxNum = Math.max.apply(Math, smsxarry);  //取数组中的最大值
    var index3 = $('.tu_s .load3 li').length;
    var thisConLi3 = $('.tu_s .load3 li');
    for (var i = 0; i < index3; i++) {
        var total3 = (smsxarry[i] / smsmaxNum) * 100 + '%';
        $(thisConLi3).eq(i).find('span').text(smsxarry[i] + smstextValue);
        $(thisConLi3).eq(i).find('.tu_h').animate({height: total3}, 1000);
        if (i == index3 - 1) {
            $(thisConLi3).eq(i).addClass('last');
            $(kk).eq(i).addClass('last');
        }
        //取数组中的最大值比较
        if (smsxarry[i] == smsmaxNum) {
            $(thisConLi3).eq(i).find('.tu_h').addClass('zhu_active');
            $(thisConLi3).eq(i).find('span').addClass('font_org');
        }
    }

    //手机上网记录图表 进度条代码
    var percent = $('input[name="percent"]');
    var arry_3 = new Array();
    for (var i = 0; i < percent.length; i++) {
        arry_3[i] = percent[i].value;
    }
    var maxNum_3 = Math.max.apply(Math, arry_3);
    var textValue_3 = '%';
    var oLoading_3 = $('.phone_03 li');
    var aa = $('.phone_s .phone_03 li');
    var length_3 = oLoading_3.length;
    for (var i = 0; i < length_3; i++) {
        var total_3 = arry_3[i] + '%';
        $(oLoading_3).eq(i).animate({width: total_3}, 1000);
        $(oLoading_3).eq(i).find('.value_2').text(arry_3[i] + textValue_3);

        if (arry_3[i] == maxNum_3) {
            $(oLoading_3).eq(i).find('.jindu').addClass('jin_active');
            $(oLoading_3).eq(i).find('.value_2').addClass('font_org');
        }
    }


    //温馨提示收缩
    var arr = new Array();
    var tip1 = $("#tip1").html();
    var newTips = "";
    if (tip1 != null && tip1 != "") {
        arr = tip1.split("<br>");
        if (arr.length - 1 <= 2) {
            $("#warmMsg").find("span").hide();
            $("#tip2").html(tip1);
        } else {
            newTips = arr[0] + "<br>" + arr[1];
            $("#tip2").html(newTips);
            $("#warmMsg").find('.warm_hide').click(function () {
                $("#tip3").html(tip1);
                $("#warmMsg").find(".more").show();
                $("#tip2").hide();
                $(this).find("span").hide();
            });
        }
    } else {
        $(".warmMsg").hide();
    }

    //温馨提示收缩（详单页面条件查询温馨提示）
    var arr1 = new Array();
    var tip11 = $("#tip11").html();
    var newTips1 = "";
    if (tip11 != null && tip11 != "") {
        arr1 = tip11.split("<br>");
        if (arr1.length - 1 <= 2) {
            $("#warmMsg_tj").find("span").hide();
            $("#tip12").html(tip11);
        } else {
            newTips1 = arr1[0] + "<br>" + arr1[1];
            $("#tip12").html(newTips);
            $("#warmMsg_tj").find('.warm_hide').click(function () {
                $("#tip13").html(tip1);
                $("#warmMsg_tj").find(".more").show();
                $("#tip12").hide();
                $(this).find("span").hide();
            });
        }
    } else {
        $("#warmMsg_tj").find(".warmMsg").hide();
    }


    //首页悬停效果JS
    /*
     $(window).scroll(function(){
     var infoTop = $('#clientInfo').height();
     var scrolla = $(window).scrollTop();
     if (scrolla > infoTop){
     $('.choose_query_outer1').show();
     } else {
     $('.choose_query_outer1').hide();
     }
     });
     */
    $(window).scroll(function () {
        var infoTop = $('#clientInfo').height();
        var infoTop1 = $('.clientInfo4').height();
        var gaphead = $('.gaphead').height();
        var infoTopNew = infoTop1 + gaphead + infoTop;
        var scrolla = $(window).scrollTop();
        if (scrolla > infoTopNew) {
            $('.choose_query_outer1').show();
        } else {
            $('.choose_query_outer1').hide();
        }
    });

    $('.pop_bg').click(function () {
        $(this).hide();
        $('.call_popbox').hide();
        $('.pop_outer').height('100%');
        $('.queryMethod').removeClass('active');
    });

    // 基础业务开通js tab标签切换
    $('.order_top li').click(function () {

        var index = $('.order_top li').index($(this));

        $(this).addClass('tab_bg').siblings().removeClass('tab_bg ');

        $('#tab_function .tab_con').eq(index).show().siblings().hide();

    });

});

//2G网龄升级计划
$('.tab_net').find('li').click(function () {
    $(this).find('img').show().parent('.tab').siblings().find('img').hide();
    $(this).addClass('twentys_borer').siblings('.tab').removeClass('twentys_borer');
    var index = $(this).index();
    $('.tab_net_content').eq(index).show().siblings('.tab_net_content').hide();
});

//短信网龄升级计划
$('.sms_icon').click(function () {
    $(this).find('.icon_enroll').toggleClass('active');
    if ($(this).find('.icon_enroll').hasClass('active')) {
        $(this).siblings('.sms_confirm').addClass('btn_grey');
    }
    else if (!$('this').find('.icon_enroll').hasClass('active')) {
        $(this).siblings('.sms_confirm').removeClass('btn_grey');
    }
});

//升级4G资费查询
$('.tab_new_list').click(function () {
    $(this).find('.tab_list_arrow').toggleClass('hover');
    $(this).parent().siblings('.flow_page').find('.ex').toggle();
});

//弹出层代码 (新)
$('.query_no').click(function () {
    showid('arry');
});
$('#arry_popup').click(function () {
    showid('arry');
});
$('#arry_popup2').click(function () {
    showid('arry2');
});
$('#arry_close').click(function () {
    $('#arry').hide();
    $('div#layer').remove();
});
function showid(idname) {
    var isIE = (document.all) ? true : false;
    var isIE6 = isIE && ([/MSIE (\d)\.0/i.exec(navigator.userAgent)][0][1] == 6);
    var newbox = document.getElementById(idname);
    newbox.style.zIndex = "9999999";
    newbox.style.display = "block"
    newbox.style.position = !isIE6 ? "fixed" : "absolute";
    newbox.style.top = newbox.style.left = "50%";
    newbox.style.marginTop = -newbox.offsetHeight / 2 + "px";
    newbox.style.marginLeft = -newbox.offsetWidth / 2 + "px";
    var layer = document.createElement("div");
    layer.id = "layer";
    layer.style.width = layer.style.height = "100%";
    layer.style.position = !isIE6 ? "fixed" : "absolute";
    layer.style.top = layer.style.left = 0;
    layer.style.backgroundColor = "#888";
    layer.style.zIndex = "9999998";
    layer.style.opacity = "0.6";
    document.body.appendChild(layer);

    function layer_iestyle() {
        layer.style.width = Math.max(document.documentElement.scrollWidth, document.documentElement.clientWidth) +
            "px";
        layer.style.height = Math.max(document.documentElement.scrollHeight, document.documentElement.clientHeight) +
            "px";
    }

    function newbox_iestyle() {
        newbox.style.marginTop = document.documentElement.scrollTop - newbox.offsetHeight / 2 + "px";
        newbox.style.marginLeft = document.documentElement.scrollLeft - newbox.offsetWidth / 2 + "px";
    }

    if (isIE) {
        layer.style.filter = "alpha(opacity=60)";
    }
    if (isIE6) {
        layer_iestyle()
        newbox_iestyle();
        window.attachEvent("onscroll", function () {
            newbox_iestyle();
        })
        window.attachEvent("onresize", layer_iestyle)
    }
}


//境外朋友攻略 弹层

function showSelCover(cover, id) {
    //将页面全部select换件设为不可用状态
    var Sys = {};
    var ua = navigator.userAgent.toLowerCase();
    var s;
    (s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] :
        (s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0;
    //如果是ie6，隐藏页面select
    if (Sys.ie == "6.0") {

        var n = document.getElementsByTagName("select").length;
        var m = $('#' + id).find('select').length;
        for (var i = 0; i < n; i++) {
            document.getElementsByTagName("select")[i].style.display = "none";
        }
        for (var j = 0; j < m; j++) {
            $('#' + id).find('select')[j].style.display = "block";
        }
    }
    var objCover = document.getElementById(cover);
    var objId = document.getElementById(id);
    var scrollW = document.documentElement.scrollWidth;
    if (document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
        var scrollH = document.documentElement.clientHeight;
    } else {
        var scrollH = document.documentElement.scrollHeight;
    }
    if (Sys.safari) {
        var T = (document.documentElement.clientHeight - objId.clientHeight) / 2 + document.body.scrollTop;
    } else {
        var T = (document.documentElement.clientHeight - objId.clientHeight) / 2 + document.documentElement.scrollTop;
    }
    var L = (document.documentElement.clientWidth - objId.clientWidth) / 2 + document.documentElement.scrollLeft;

    objCover.style.width = scrollW + "px";
    objCover.style.height = scrollH + "px";
    objCover.style.visibility = "visible";

    objId.style.top = T + "px";
    objId.style.left = L + "px";
    objId.style.visibility = "visible";
}

//function hideCover
function hideSelCover(cover, id) {
    //将页面全部select换件设为可用状态
    var Sys = {};
    var ua = navigator.userAgent.toLowerCase();
    var s;
    (s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] : 0;
    if (Sys.ie == "6.0") {
        var n = document.getElementsByTagName("select").length;
        for (var i = 0; i < n; i++) {
            document.getElementsByTagName("select")[i].style.display = "block";
        }
    }
    var objCover = document.getElementById(cover);
    var objId = document.getElementById(id);
    objCover.style.visibility = "hidden";
    objId.style.visibility = "hidden";
}


/*2014 10 16*/
/*魏彬*/
/*拨号助手*/
//var dial_Timer = null
/*$('#dial_select').focus(function()
 {

 $(this).val("");

 }
 )
 $('#dial_select').blur(function()
 {
 var txt_address = $(this).val();
 if(txt_address == "")
 $(this).val("国家码或城市区号：+86")
 }
 )*/
/* $('.dial_input').click(function(){

 $(this).children(".dial_input_hide").show();

 }, function(){

 $(this).children(".dial_input_hide").hide();

 });


 $(".dial_tip").click(function(){
 $(this).parent().children(".dial_input_hide").show();


 })


 $(".dial_input_hide").hover(function(){
 $(this).show();
 },function(){
 $(this).hide();
 })

 $(".dial_input_hide ul li").hover(function(){
 $(this).children('em').show().parent().siblings('li').children('em').hide()
 $(this).addClass("hover").siblings().removeClass("hover")
 },function(){

 })*/

$(".dial_tip").click(function () {
    $(this).parent().children(".dial_input_hide").show();

})
$(".dial_input").click(function () {
    $(this).siblings().children(".dial_input_hide").hide();
})


$(".dial_input_hide ul li").click(function () {
    var text = $(this).text();
    var text1 = $(this).parent().parent().siblings(".dial_tip").val(text)
    $(this).parent().parent().hide();
    //alert(text1)
})
$(document).click(function (event) {
    if (!$(event.target).parents('.dial_input_hide').length && !$(event.target).parents('.dial_input').length) {
        $('.dial_input_hide').hide();
    }
    ;

});


//境外朋友攻略 弹层

function showSelCover(cover, id) {
    //将页面全部select换件设为不可用状态
    var Sys = {};
    var ua = navigator.userAgent.toLowerCase();
    var s;
    (s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] :
        (s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0;
    //如果是ie6，隐藏页面select
    if (Sys.ie == "6.0") {

        var n = document.getElementsByTagName("select").length;
        var m = $('#' + id).find('select').length;
        for (var i = 0; i < n; i++) {
            document.getElementsByTagName("select")[i].style.display = "none";
        }
        for (var j = 0; j < m; j++) {
            $('#' + id).find('select')[j].style.display = "block";
        }
    }
    var objCover = document.getElementById(cover);
    var objId = document.getElementById(id);
    var scrollW = document.documentElement.scrollWidth;
    if (document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
        var scrollH = document.documentElement.clientHeight;
    } else {
        var scrollH = document.documentElement.scrollHeight;
    }
    if (Sys.safari) {
        var T = (document.documentElement.clientHeight - objId.clientHeight) / 2 + document.body.scrollTop;
    } else {
        var T = (document.documentElement.clientHeight - objId.clientHeight) / 2 + document.documentElement.scrollTop;
    }
    var L = (document.documentElement.clientWidth - objId.clientWidth) / 2 + document.documentElement.scrollLeft;

    objCover.style.width = scrollW + "px";
    objCover.style.height = scrollH + "px";
    objCover.style.visibility = "visible";

    objId.style.top = T + "px";
    objId.style.left = L + "px";
    objId.style.visibility = "visible";
}

//function hideCover
function hideSelCover(cover, id) {
    //将页面全部select换件设为可用状态
    var Sys = {};
    var ua = navigator.userAgent.toLowerCase();
    var s;
    (s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] : 0;
    if (Sys.ie == "6.0") {
        var n = document.getElementsByTagName("select").length;
        for (var i = 0; i < n; i++) {
            document.getElementsByTagName("select")[i].style.display = "block";
        }
    }
    var objCover = document.getElementById(cover);
    var objId = document.getElementById(id);
    objCover.style.visibility = "hidden";
    objId.style.visibility = "hidden";
}


/*漫游小贴士*/


//点击瞬间效果
(function () {
    function setBtnColor(className, addClass) {
        $(className).bind('mousedown touchstart', function () {
            $(this).addClass(addClass);
        }).bind('mouseup touchend', function () {
            $(this).removeClass(addClass);
        }).bind('mouseover touchmove', function () {
            $(this).removeClass(addClass);
        });
    };
    setBtnColor('.my_tip_ul_li', 'hover');   //漫游小贴士点击效果
    setBtnColor('.index_left_1', 'index_left_1_hover');//首页点击效果
    setBtnColor('.dial_list_li', 'hover');//拨号助手

})();

/*选择国家*/

$('.sc_tab li').click(function () {

    var index = $(this).index();

    $(this).addClass('hover').siblings().removeClass('hover ');

    $('#tab_function .tab_con1').eq(index).show().siblings().hide();

});


$('#country_select').toggle(function () {
    $(".country_search").eq(0).hide();
    $(".country_search").eq(1).show();
}, function () {
    $(".country_search").eq(1).hide();
    $(".country_search").eq(0).show();
})

$(".country_more").click(function () {
    $(this).next('ul').show();
})

//cj 12.24 宽带转移修改

$(document).mouseup(function (event) {
    if ((!$(event.target).parents('.selctList').length) && (!$(event.target).is('.selectBox')) && (!$(event.target).is('.selectBtn img'))) {
        $('.selctList').css('display', 'none');
        $('.morebank').hide();
    }
});

$('.selectBox').click(function (e) {
    $(this).siblings('.selctList, .morebank').toggle();

});
$('.selectBtn').click(function (e) {
    $(this).siblings('.selctList, .morebank').toggle();
});

$('.more_broad_a').click(function () {
    $(this).hide().parents('.detail_con').removeClass('tab_bottom').next('.more_broad_cont').slideDown();

});

/*4g共享组合套餐优化 cj 15.1.18 */
!$('.easeFlow').length > 0 || (function () {
    var easeFlow_box = $('.easeFlow_box');
    $('.easeFlow').click(function () {
        easeFlow_box.toggle();
    });
})();

/*闲时流量包语音包相关开始*/
jQuery(function ($) {
    //是否已阅读状态对按钮订单影响
    !$('.isReadCheck').length > 0 || (function () {
        $('.isReadCheck').change(function () {
            var btn_goBuy = $('.btn_goBuy');
            if (!$(this).is(':checked')) {
                btn_goBuy.addClass('btn_grey').attr('disabled', 'disabled');
            } else {
                btn_goBuy.removeClass('btn_grey').removeAttr('disabled');
            }
        });
        $(window).load(function () {
            $('.isReadCheck').triggerHandler('change');
        });
    })();

});
function PromptBox(oBtnId, oPromptBoxId, oClose) {
    var oBtn = $(oBtnId);
    this.oPromptBox = $(oPromptBoxId);
    this.oClose = $(oPromptBoxId).find(oClose);
    this.oPage = $('#pageNew');
    this.oPageHeight = this.oPage.height();
    this.oPromptBoxWidth = this.oPromptBox.outerWidth();
    this.oPromptBoxHeight = this.oPromptBox.outerHeight();
    var _this = this;

    function fnLeftTop() {
        _this.oPromptBoxWidth = _this.oPage.width() * 0.88;
        _this.oPromptBoxLeft = ( _this.oPage.width() - _this.oPromptBoxWidth ) / 2 + (($(document).width() - _this.oPage.width()) / 2 - 2) + 'px';
        _this.oPromptBoxTop = ( _this.fnHeight() - _this.oPromptBoxHeight ) / 2 + $(document).scrollTop() + 'px';
    }

    fnLeftTop();
    window.onscroll = window.onresize = function () {
        fnLeftTop();
        _this.oPromptBox.css({left: _this.oPromptBoxLeft, top: _this.oPromptBoxTop, width: _this.oPromptBoxWidth});
    }
    oBtn.click(function () {
        _this.fnPopup();
    });
}
PromptBox.prototype.fnPopup = function () {
    this.oPromptBox.show();
    this.oPromptBox.css({left: this.oPromptBoxLeft, top: this.oPromptBoxTop, width: this.oPromptBoxWidth});
    var _this = this;
    this.oClose.click(function () {
        _this.oPromptBox.hide();
    });
}
PromptBox.prototype.fnHeight = function () {
    if ($(window).height() >= this.oPageHeight) {
        return this.oPageHeight;
    } else {
        return $(window).height();
    }
}
jQuery(function ($) {

    var oLoading = $('.load1');
    oLoading.each(function (index) {
        var index = oLoading.index(this);
        var ran = 6;
        var ran = random(),
            total = ran + '%';
        var inputval = $(this).attr('data');
        if (inputval != null) {
            total = inputval + '%';
            ran = inputval;
            $(this).siblings('.loadRight1').children('.num_font').text(total);
        } else {
            $('.num_font').text(total);
        }
        /*	$('.num_font').text(total);*/
        if (ran >= 90) {
            oLoading.eq(index).find('div').addClass('useup1');
            oLoading.eq(index).next().children('.rightImg_btn').addClass('red');
            //$('.table_arrow').eq(index).css('left',(ran-12)+'%');
            //$('.bg_san').eq(index).css('left',(ran-12)+'%');
        }
        ;

        oLoading.eq(index).find('div').stop().animate({width: total}, 1000);

        if (ran <= 4) {
            ran = 4;
            $('.loadRight1').eq(index).css('left', (ran - 4) + '%').find('.col666').text(total);
            $('.table_arrow').eq(index).css('left', (ran - 4) + '%');
            $('.table_triangle').eq(index).css('left', (ran - 4) + '%');
            $('.num_font').css('padding-left', '6px');

        }
        if (ran == 100) {
            ran = 100;
            $('.loadRight1').eq(index).animate({left: (ran - 5) + '%'}, 1000);
            $('.num_font').css('margin-left', '-15px');
        }
        if (ran >= 95 && ran < 99) {
            //ran =95;
            $('.loadRight1').eq(index).animate({left: (ran - 4) + '%'}, 1000);
            $('.table_triangle').eq(index).css('left', (ran - 4) + '%');
        }
        if (ran == 99) {
            ran = 99;
            $('.loadRight1').eq(index).animate({left: (ran - 5) + '%'}, 1000);
            $('.table_triangle').eq(index).css('left', (ran - 4) + '%');
        }
        if (ran >= 4 && ran <= 94) {
            $('.loadRight1').eq(index).animate({left: (ran - 4) + '%'}, 1000).find('.col666').css('marginLeft', '0px').text(total);
            $('.table_triangle').eq(index).animate({left: (ran - 4) + '%'}, 1000);
            $('.table_arrow').eq(index).css('left', (ran - 4) + '%');

        }

    });

    $('#sendBtn').click(function () {
        showid('arry');
    });
    $('.arry_img').click(function () {
        $('#arry').hide();
        $('div#layer').remove();
    });

    new PromptBox('#queryBtn', '#warmPromptBox', '.ensureBtn');
});
function random() {
    return Math.round(Math.random() * 100) || 10000;
}

/*闲时流量包语音包相关结束*/

/*智慧服务对接开始*/
$('.swiper-slide').each(function () {
    var url = $(this).attr('name');
    var timeoutstart;

    $(this).bind('mousedown touchstart', function (e) {
        timeoutstart = new Date();
        $(this).addClass('onpoint');
        //stopBubble(e);

    }).bind('mouseup touchend', function (e) {
        var timeoutend = new Date();
        var timeloop = timeoutend.getTime() - timeoutstart.getTime();
        console.log('time==' + timeloop);
        //stopBubble(e)
        if (timeloop < 500) {
            window.location.href = $(this).attr('name');
            //$(this).removeClass('onpoint');
        }
        $(this).removeClass('onpoint');
    }).bind('mouseover touchmove', function (e) {
        //stopBubble(e);
        timeout = setTimeout(function () {
        }, 500);
        $(this).addClass('onpoint');

    })

})
function stopBubble(e) {
    var evt = e || window.event;
    evt.stopPropagation ? evt.stopPropagation() : (evt.cancelBubble = true);//阻止冒泡
    //evt.preventDefault();//阻止浏览器默认行为，这样链接就不会跳转
}

$('.namepage').each(function () {
    var shorttext = $(this).text();
    if (shorttext.length > 8) {
        var temp = shorttext.substring(0, 8);
        var newtext = temp + '...';
        $(this).text(newtext);
    }
});

//前端调用后台功能
function querySmartBiz(bizUrl, operateType, bizCode, showType) {
    var time = new Date().getTime();
    //订单提交
    jQuery.ajax({
        type: "POST",
        url: bizUrl + "?num=" + time,
        //提交的数据
        data: {operateType: operateType, bizCode: bizCode, height: $(document).height(), width: $(document).width()},
        datatype: "json",//"xml", "html", "script", "json", "jsonp", "text",xml
        contentType: "application/x-www-form-urlencoded;charset=UTF-8",
        //成功返回之后调用的函数
        success: function (data) {
            var list = '';
            if (data != null && data != '') {
                for (var i = 0; i < data.length; i++) {
                    if (i == 2) {
                        break;
                    }
                    var url = data[i].productRedirecturl;
                    if (url.indexOf('&') != -1) {
                        url += '&c_src=zhfw';
                    } else if (url.indexOf('?') != -1) {
                        url += '&c_src=zhfw';
                    } else if (url.indexOf('?') == -1) {
                        url += '?c_src=zhfw';
                    }
                    list += '<li style=" border-bottom: 1px solid #d4d4d4; margin-top: 13px; padding-bottom: 13px;" onclick="url(\'' + url + '\')"><div class="leftimgcontaner"><div class="iconborder"><img src=' + data[i].productUrl + ' /></div></div><div class="needtext"><p class="needtitle">' + data[i].productName + '<span>服务</span></p><p class="introdetail">' + data[i].productDesc + '</p></div><div class="clr"></div></li>';
                }
                $(".needlist").html(list);
                $(".youneed").show();
            } else {

            }
        },
        error: function (XMLHttpRequest, textStatus,
                         errorThrown) {

        }
    });
}
/*智慧服务对接结束*/

// 对Date的扩展，将 Date 转化为指定格式的String
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
// 例子：
// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
// (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
Date.prototype.Format = function (fmt) { //author: meizz
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
};