$(document).ready(function() {



$('.main-content-wrapper').stickyStack({
        containerElement: '.main-content-wrapper',
        stackingElement: '#one',
     });

$('.main-header__title').addClass('animated bounceInDown');
$('.main-header__text').addClass('animated bounceInDown');
  $('.promo').addClass('animated bounceInRight ');

  $('.btn--media').on('mouseover', function() {

  	$(this).addClass('animated shake');


 $(this).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
  $(this).removeClass('animated  shake'); });

  });

$('.btn').addClass('animated animated-fadeIn fadeIn');
  $('.btn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
  $('.btn').removeClass('animated  animated-fadeIn fadeIn'); });
 
 var options = {
    animateThreshold: 500,
    scrollPollInterval: 50
}


 var options1 = {
    animateThreshold: 100,
    scrollPollInterval: 30
}

$('.block__list').AniView(options) ;
$('.features__item').AniView();
$('.btn--coach').AniView();
$('.column-wrap').AniView();
$('.media__column-right').AniView() ;
$('.media__column-left').AniView() ;
$('.btn-wrap').AniView() ;


});