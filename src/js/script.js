
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
  
// ハンバーガー
$('.bl_burger').on('click', function () {
  const $menu = $('.bl_gloNav');
  const $burger = $(this);
  const $textElement = $burger.find('.bl_burger_txt'); // テキスト要素を取得

  if ($menu.hasClass('is_active')) {
    // 閉じるとき
    $menu.addClass('is_closing'); // アニメーション用クラスを追加
    setTimeout(() => {
      $menu.removeClass('is_active is_closing'); // クラスをリセット
      $burger.removeClass('is_active');
      $('.bl_head').removeClass('is_active');
    }, 300); // アニメーション時間 (0.3s) に合わせる

    // メニューの文字を「メニュー」に戻す
    $textElement.text('メニュー');
  } else {
    // 開くとき
    $burger.addClass('is_active');
    $menu.addClass('is_active');
    $('.bl_head').addClass('is_active');
  }
});

// メニューのボタンを押したときの処理
$('.bl_gloNav_btn').on('click', function () {
  const $menu = $('.bl_gloNav');
  const $burger = $('.bl_burger');
  const $textElement = $burger.find('.bl_burger_txt');

  if ($menu.hasClass('is_active')) {
    // 閉じるとき
    $menu.addClass('closing');
    setTimeout(() => {
      $menu.removeClass('is_active closing');
      $burger.removeClass('is_active');
      $('.bl_head').removeClass('is_active');
    }, 300);

    // メニューの文字を「メニュー」に戻す
    $textElement.text('メニュー');
  }
});




});
