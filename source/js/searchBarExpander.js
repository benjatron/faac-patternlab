$(document).ready(function(){
  var submitIcon = $('.c-search-form__icon');
  var inputBox = $('.c-search-form__input');
  var searchBox = $('.c-search-form');
  var isOpen = false;
  submitIcon.click(function(){
    if(isOpen == false){
      searchBox.addClass('c-search-form--open');
      inputBox.focus();
      isOpen = true;
    } else {
      searchBox.removeClass('c-search-form--open');
      inputBox.focusout();
      isOpen = false;
    }
  });  
  submitIcon.mouseup(function(){
    return false;
  });
  searchBox.mouseup(function(){
    return false;
  });
  $(document).mouseup(function(){
    if(isOpen == true){
      $('.c-search-form__icon').css('display','block');
      submitIcon.click();
    }
  });
});

function buttonUp(){
  var inputVal = $('.c-search-form__input').val();
  inputVal = $.trim(inputVal).length;
  if( inputVal !== 0){
    $('.c-search-form__icon').css('display','none');
  } else {
    $('.c-search-form__input').val('');
    $('.c-search-form__icon').css('display','block');
  }
}

