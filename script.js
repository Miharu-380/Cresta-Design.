$('.burger-btn').on('click',function(){
  $('.burger-btn').toggleClass('close');
  $('.site-menu').fadeToggle(500);
  $('body').toggleClass('noscroll'); //bodyにnoscrollクラスを付与(スクロールを固定)
});

 if( $(window).width() < 769 ){//デバイスの幅が768以下のとき
  $('.nav-item>a').on('click',function(){ //.nav-item>aをクリックすると
    $('body').removeClass('noscroll'); //bodyのnoscrollクラスを削除
    $('.site-menu').fadeOut(500); //.site-menuが0.5秒でフェードアウト(メニューのフェードアウト)
    $('.burger-btn').removeClass('close'); //.btn_triggerのcloseクラスを削除
  });
}