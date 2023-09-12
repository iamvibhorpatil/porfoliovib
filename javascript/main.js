// loader
let preloader = document.getElementById("onload");
function myLoader() {
  setTimeout(function () {
    preloader.style.display = "none";
  }, 3000);
}


//scroll to appear
$(window).on("scroll", function () {
  if ($(this).scrollTop() > 500) $(".scroll-top-arrow").fadeIn("slow");
  else $(".scroll-top-arrow").fadeOut("slow");
});

//Click event to scroll to top
$(document).on("click", ".scroll-top-arrow", function () {
  $("html, body").animate({ scrollTop: 0 }, 100);
  return false;
});


