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
  /* 藝術家介紹 end */

  /* 藝術品介紹 */

  $('.artAttrBtn').click(function (e) {
    e.preventDefault();
    $('.artAttr').slideToggle();
    $('.artAttrBtn .fa-angle-up').toggleClass('hidden');
    $('.artAttrBtn .fa-angle-down').toggleClass('hidden');
  });
  $('.priceBtn').click(function (e) {
    e.preventDefault();
    $('.price').slideToggle();
    $('.priceBtn .fa-angle-up').toggleClass('hidden');
    $('.priceBtn .fa-angle-down').toggleClass('hidden');
  });
  $('.basicinfoBtn').click(function (e) {
    e.preventDefault();
    $('.basicinfo').slideToggle();
    $('.basicinfoBtn .fa-angle-up').toggleClass('hidden');
    $('.basicinfoBtn .fa-angle-down').toggleClass('hidden');
  });
  $('.historyBtn').click(function (e) {
    e.preventDefault();
    $('.history').slideToggle();
    $('.historyBtn .fa-angle-up').toggleClass('hidden');
    $('.historyBtn .fa-angle-down').toggleClass('hidden');
  });
  /* 藝術品介紹 end */

  /* 藝術品系列-篩選 */

  $('.searchArtistBtn').click(function (e) {
    e.preventDefault();
    $('.searchArtist').slideToggle();
    $('.mainContent').toggleClass('hidden');
  });
  $('.networkBtn').click(function (e) {
    e.preventDefault();
    $('.network').slideToggle();
    $('.networkBtn .fa-angle-up').toggleClass('hidden');
    $('.networkBtn .fa-angle-down').toggleClass('hidden');
  });
  $('.statusBtn').click(function (e) {
    e.preventDefault();
    $('.status').slideToggle();
    $('.statusBtn .fa-angle-up').toggleClass('hidden');
    $('.statusBtn .fa-angle-down').toggleClass('hidden');
  });
  $('.artPriceBtn').click(function (e) {
    e.preventDefault();
    $('.artPrice').slideToggle();
    $('.artPriceBtn .fa-angle-up').toggleClass('hidden');
    $('.artPriceBtn .fa-angle-down').toggleClass('hidden');
  });
  $('.speciesBtn').click(function (e) {
    e.preventDefault();
    $('.species').slideToggle();
    $('.speciesBtn .fa-angle-up').toggleClass('hidden');
    $('.speciesBtn .fa-angle-down').toggleClass('hidden');
  });
  /* 藝術品系列-篩選 end */

  /* 市價排行榜 */

  var _loop = function _loop(i) {
    $(".openPrice".concat(i)).click(function (e) {
      e.preventDefault();
      $(".openPrice".concat(i)).toggleClass('hidden');
      $(".priceContent".concat(i)).slideToggle();
      $(".closePrice".concat(i)).toggleClass('hidden');
    });
    $(".closePrice".concat(i)).click(function (e) {
      e.preventDefault();
      $(".openPrice".concat(i)).toggleClass('hidden');
      $(".priceContent".concat(i)).slideToggle();
      $(".closePrice".concat(i)).toggleClass('hidden');
    });
  };

  for (var i = 1; i < 11; i++) {
    _loop(i);
  }
  /* 市價排行榜 end */

});
//# sourceMappingURL=all.js.map
