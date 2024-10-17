$('.has-childMenu').click(function(){
  let body = $('.mainMenu-inner')
  ,   field = $(this).attr('data-field')
  ,   child = $('#js-mainMenu').find(".childMenu[data-field='" + field + "']")
  
  body.find('.childMenu').attr('aria-disabled', true);
  child.attr('aria-disabled', false)
  
  let left = child.position().left - 32;

  body.css('transform', "translateX(" + -left + "px)")
})

$('.backBtn').click(function(){
  let body = $('.mainMenu-inner')

  body.css('transform', "translateX(" + 0 + "px)");
})