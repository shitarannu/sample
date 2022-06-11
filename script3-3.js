$(function() {

    $(function () {
        $('.migiue2').click(function(){
            $('#modalArea').fadeIn();
            $('header').fadeOut();
        });
        $('#closeModal , #modalBg').click(function(){
          $('#modalArea').fadeOut();
          $('header').fadeIn();
        });
      });
      
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
  
    if (scroll > 0) { //150pxスクロールすると起動
      $('header').addClass('change-color');
    } else { //スクロールしていないときは起動しない
      $('header').removeClass('change-color');
    }
  });



    $(window).scroll(function () {
      const windowHeight = $(window).height();
      const scroll = $(window).scrollTop();
  
      $('.waribiki').each(function () {
        const targetPosition = $(this).offset().top;
        if (scroll > targetPosition - windowHeight + 100) {
          $(this).addClass("is-fadein");
        }else{
            $(this).removeClass("is-fadein") ;
        }
      });
    });
 
    $(function(){
        var topBtn=$('#pageTop');
        topBtn.hide();
        
         
        
        
        $(window).scroll(function(){
          if($(this).scrollTop()>80){
        
            topBtn.fadeIn();
        
          }else{
        
            topBtn.fadeOut();
        
          }
        });
        
         
        
        // ◇ボタンをクリックしたら、スクロールして上に戻る
        topBtn.click(function(){
          $('body,html').animate({
          scrollTop: 0},500);
          return false;
        
        });
        
        
    });

    $('#page-link a[href*="#sisetu"]').click(function () {
        var elmHash = $(this).attr('href'); 
        var pos = $(elmHash).offset().top;  
        $('body,html').animate({scrollTop: pos}, 500);
        return false;
      });

      $('#page-link a[href*="#taiken"]').click(function () {
        var elmHash = $(this).attr('href'); 
        var pos = $(elmHash).offset().top;  
        $('body,html').animate({scrollTop: pos}, 500);
        return false;
      });

      $('#page-link a[href*="#teian"]').click(function () {
        var elmHash = $(this).attr('href'); 
        var pos = $(elmHash).offset().top;  
        $('body,html').animate({scrollTop: pos}, 500);
        return false;
      });

      $('#page-link a[href*="#osirase"]').click(function () {
        var elmHash = $(this).attr('href'); 
        var pos = $(elmHash).offset().top;  
        $('body,html').animate({scrollTop: pos}, 500);
        return false;
      });
      
});

