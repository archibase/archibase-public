document.addEventListener('DOMContentLoaded', function() {
  // Humberger
  {
    var trigger = document.getElementsByClassName('js-humberger-trigger')[0];
    var target = document.getElementsByClassName('js-humberger-target')[0];

    trigger.addEventListener('click', function() {
      if (trigger.classList.contains('-active')) {
        trigger.classList.remove('-active')
        target.classList.remove('-active')
      } else {
        trigger.classList.add('-active')
        target.classList.add('-active')
      }
    });
  }

  // Return top

  //// ボタンの表示条件
  $topBtn = $('.js-return-top')
  $(window).scroll(function () {
    // スクロール量が500以上になったら
    if ($(this).scrollTop() > 500) {
      $topBtn.fadeIn();
    } else {
      $topBtn.fadeOut();
    }
  });


  $topBtn.on('click', function() {
    $('body,html').animate({scrollTop: 0},  'swing');

    return false;
  });
});
