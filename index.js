console.log("Alena Zachová - CV");


$('a.sipka, .swipe').on('click', function(e) {
  let cil = $(this).attr('href');
  let rychlost = 1000;
  let menu = $('.hore');

  $("html, body").stop().animate(
      { scrollTop: $(cil).offset().top},
  rychlost);

  e.preventDefault();
});

$('a.pre-sipka, .pre-swipe').on('click', function(e) {
  let cil = $(this).attr('href');
  let rychlost = 1000;
  let menu = $('.pre-footer');

  $("html, body").stop().animate(
      { scrollTop: $(cil).offset().top},
  rychlost);

  e.preventDefault();