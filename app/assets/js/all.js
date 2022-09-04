$(document).ready(() => {
  if ($('.grid')) {
    $('.grid').imagesLoaded().progress(function () {
      $('.grid').masonry(); // 渲染整體畫面
    });
  }
});