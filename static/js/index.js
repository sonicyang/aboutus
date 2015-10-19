// Smooth scroll when click navbar
$(document).ready(function(){
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash,
        $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 50
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });
});

// hide navbar collapse on click
$('.nav a').on('click', function(){


    if($(window).width() < 753){
        $('.navbar-toggle').click()
    }

});

// change color of clicked navbar item
$('nav a').on('click', function(){
    $("nav li").attr("class", "");
    $(this).parent().attr("class", "active");
})

// put a dark layer on the header image 
$(function(){
    // 預設的透明度值
    var _opacity = 0.4;
    // 在 .mask-div 中加入一個遮罩用的 .cover-mask, 並設定其透明度為預設的透明度值
    // 接著加入 .hover() 事件
    $('.mask-div').append('<div class="cover-mask"></div>').find('.cover-mask').css({
        opacity: _opacity
    });
});