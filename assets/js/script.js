//  UiUx Trusted

$(document).ready(function () {
  $(".counter").each(function () {
    var e = $(this);
    var s = e.attr("data-count");
    $({
      countNum: 0,
    }).animate(
      {
        countNum: s,
      },
      {
        duration: 3e3,
        easing: "linear",
        step: function () {
          e.text(Math.floor(this.countNum));
        },
        complete: function () {
          e.text(this.countNum);
        },
      }
    );
  });

  // UiUx Services

  if ($(window).width() <= 1200) {
    $(".srvs_sldr").slick({
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      autoplay: false,
      autoplaySpeed: 2e3,
      infinite: true,
      loop: true,
      slidesToShow: 3,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }

  // UiUx Process

  if ($(window).width() <= 1200) {
    $(".uiux_prcs_sldr").slick({
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      autoplay: false,
      autoplaySpeed: 2e3,
      infinite: true,
      loop: true,
      slidesToShow: 3,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }

  // UiUx Leverage

  $(".uiux_levrg_lst li").on("mouseenter", function () {
    $(".uiux_levrg_lst li").removeClass("expnd_li");
    $(this).addClass("expnd_li");
  });
});
