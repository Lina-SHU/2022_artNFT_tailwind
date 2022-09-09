"use strict";

$(document).ready(function () {
  if ($('.grid')) {
    $('.grid').imagesLoaded().progress(function () {
      $('.grid').masonry(); // 渲染整體畫面
    });
  }
  /* search bar */


  $('.searchBtn').click(function (e) {
    e.preventDefault();
    $('.searchBar').toggleClass('hidden');
  });
  $('.searchClose').click(function (e) {
    e.preventDefault();
    $('.searchBar').toggleClass('hidden');
  });
  /* nab menu */

  $('.menuBtn').click(function (e) {
    e.preventDefault();
    $('.menuList').slideToggle().toggleClass('hidden');
    $('.closeBtn').toggleClass('hidden');
    $('.menuBtn').toggleClass('hidden');
  });
  $('.closeBtn').click(function (e) {
    e.preventDefault();
    $('.menuList').slideToggle().toggleClass('hidden');
    $('.closeBtn').toggleClass('hidden');
    $('.menuBtn').toggleClass('hidden');
  });
  /* 藝術家介紹 */

  setTimeout(function () {
    $('.collection').hide();
  }, 500);
  $('.artworkBtn').click(function (e) {
    e.preventDefault();
    $('.artwork').show();
    $('.artworkBtn').addClass('border border-black border-b border-b-transparent');
    $('.artworkBtn').removeClass('text-dark');
    $('.collectionBtn').removeClass('border border-black border-b border-b-transparent');
    $('.collection').hide();
    $('.collectionBtn').addClass('text-dark');
  });
  $('.collectionBtn').click(function (e) {
    e.preventDefault();
    $('.collection').show();
    $('.collectionBtn').addClass('border border-black border-b border-b-transparent');
    $('.collectionBtn').removeClass('text-dark');
    $('.artworkBtn').removeClass('border border-black border-b border-b-transparent');
    $('.artwork').hide();
    $('.artworkBtn').addClass('text-dark');
  });
});
//# sourceMappingURL=all.js.map
