$(document).ready(function () {
   $('.sidenav').sidenav();
});

//============//

$('.select').on('click','.placeholder',function(){
   var parent = $(this).closest('.select');
   if ( ! parent.hasClass('is-open')){
      parent.addClass('is-open');
      $('.select.is-open').not(parent).removeClass('is-open');
   }else{
      parent.removeClass('is-open');
   }
}).on('click','ul>li',function(){
   var parent = $(this).closest('.select');
   parent.removeClass('is-open').find('.placeholder').text( $(this).text() );
   parent.find('input[type=hidden]').attr('value', $(this).attr('data-value') );
});

//


$('.md-select').on('click', function(){
   $(this).toggleClass('active')
});

$('.md-select ul li').on('click', function() {
   var v = $(this).text();
   $('.md-select ul li').not($(this)).removeClass('active');
   $(this).addClass('active');
   $('.md-select label button').text(v)
});