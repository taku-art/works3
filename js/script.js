$(function () {});

$(function () {
  // ハンバーガーメニュー
  $(".js-hamburger,.js-drawer").click(function () {
    $(".js-hamburger").toggleClass("is-active");
    $(".js-fv__title").toggleClass("is-active");
    $(".js-drawer").fadeToggle();
  });
});

// スライダー
const swiper = new Swiper(".swiper", {
  loop: true,
  effect: "fade",
  speed: 3000,
  allowTouchMove: false,
  autoplay: {
    delay: 3000,
  },
});

// ページトップボタン
$(function () {
  const pageTop = $(".js-page-top");
  pageTop.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 20) {
      pageTop.fadeIn();
    } else {
      pageTop.fadeOut();
    }
  });
  pageTop.click(function () {
    $("body, html").animate(
      {
        scrollTop: 0,
      },
      300
    );
    return false;
  });
});

// ページ内スクロール
$(function () {
  // メインビューの高さ取得（100vh = ウィンドウの高さ）
  const mainViewHeight = $(window).height();
  const header = $(".js-header");

  // スクロールイベントの処理
  $(window).on("scroll", function () {
    const scrollPosition = $(this).scrollTop();

    // スクロール位置がメインビューの高さを超えたら .scrolled クラスを追加
    if (scrollPosition > mainViewHeight) {
      header.addClass("scrolled");
    } else {
      header.removeClass("scrolled");
    }
  });
});
