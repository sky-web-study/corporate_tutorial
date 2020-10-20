$(function () {
  const $win = $(window);
  const $btnMenu = $('.btn-menu');
  const $nav = $('header > nav');
  const isAnimate  = 'is-animate';
  const isOpen = 'is-open';

  //ボタンクリック時の処理
  $btnMenu.on('click', function () {

      const $this = $(this);
      if($nav.is(':animated')){
         return;
      }

      if(!$this.hasClass(isOpen)){
         $nav.slideDown();
         $this.addClass(isOpen).addClass(isAnimate);
      }else{
         $nav.slideUp();
         $this.removeClass(isOpen).removeClass(isAnimate);
      }
  });

  //ウィンドウリサイズ時の処理
  $win.on('resize', function () {

   if ($win.width() > 768) {
      $nav.show();
      $btnMenu.removeClass(isOpen).removeClass(isAnimate);
    } else {
      if (!$btnMenu.hasClass(isOpen)) {
        $nav.hide();
      }
    }
  });
 });