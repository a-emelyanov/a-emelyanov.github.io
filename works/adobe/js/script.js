$(document).ready(function() {

var div = $("input");
var btn = $('.btn--main');
var list = $('.lang__list');
var item = $('.lang__item');


$('label').on('click', function(e) {

  if (div.hasClass('visible')) {

      div.removeClass('visible')
      $('.icon-up').css('display','none');
      $('.icon-down').css('display','inline');

  }

  else { 

    div.addClass('visible');
    $('.icon-up').css('display','inline');
    $('.icon-down').css('display','none');

  }
});


$(document).mouseup(function (e){ // событие клика по веб-документу
     // тут указываем ID элемента
    if (!div.is(e.target) && !$('label').is(e.target) && div.hasClass('visible') // если клик был не по нашему блоку
        && div.has(e.target).length === 0) { // и не по его дочерним элементам

      $('.icon-up').css('display','none');
    $('.icon-down').css('display','inline');
      div.removeClass('visible'); // скрываем его
     
    }
  });


  btn.on('mousedown', function() {

    if (list.hasClass('visible')) {
      btn.removeClass('active');
      list.removeClass('visible');
    }

    else {
      btn.addClass('active');
      list.addClass('visible');
    }

  });

  list.on('mouseleave', function () {
    btn.removeClass('active');
    list.removeClass('visible');
  });

});