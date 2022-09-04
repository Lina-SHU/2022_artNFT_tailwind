"use strict";

$(document).ready(function () {
  if ($('.grid')) {
    $('.grid').imagesLoaded().progress(function () {
      $('.grid').masonry(); // 渲染整體畫面
    });
  }
});
//# sourceMappingURL=all.js.map
