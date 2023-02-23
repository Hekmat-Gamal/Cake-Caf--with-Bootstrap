$(function () {
  "use strict";
  //Featured Work Shuffle
  $(".Menu-Section ul li").on("click", function () {
    $(this).addClass("active").siblings().removeClass("active");
    if ($(this).data("class") === "menu") {
      $(".images-shuffel .card").css("opacity", "1");
    } else {
      $(".images-shuffel .card").css("opacity", ".2");
      $($(this).data("class")).parent().css("opacity", "1");
    }
  });
});
