$(function () {
  const $win = $(window);
  const $btnMenu = $('.btn-menu');
  const $nav = $('header &gt; nav');
  const animate = 'is-animate';
  const isOpen = 'is-open';

  $btnMenu.on('click', function () {

     //ボタンをクリックしたときの記述

  });
  
  function resizeDisplay() {

     //ウィンドウ幅を変えた時の記述

  }
  resizeDisplay();

  $win.on('resize', function () {
    resizeDisplay();
  });
 });