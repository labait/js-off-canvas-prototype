var $button = $("#button")
var $menu = $("#menu")

$button.on("click",toggleMenu)

function toggleMenu(){
  $button.toggleClass("active")
  $menu.toggleClass("active")

}

$('.menu').click(function () {
  $(this).toggleClass('open');
  $button.toggleClass("active")
  $menu.toggleClass("active")
});