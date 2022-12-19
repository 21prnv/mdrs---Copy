const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}
if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

$("#gallery a").each(function (i) {
  $(this)
    .delay(i * 200)
    .fadeIn("slow");
});

var $counter = $(".hi");
var $slider = $(".carousel-inner");

$slider.on(
  "init reInit afterChange",
  function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $counter.text(i + "/" + slick.slideCount);
  }
);
