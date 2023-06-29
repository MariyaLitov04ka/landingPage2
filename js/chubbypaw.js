$(document).ready(function() {
    $('.header_burger').click(function(event) {
        $('.header_burger,.header_menu').toggleClass('active');
        $('body').toggleClass('lock');
        $('.swiper-container').toggleClass('inactive');
    });
});
function alerted(){
    alert("Успешно!");
  }

  $(document).ready(function(){
    // = Вешаем событие прокрутки к нужному месту
    	//	 на все ссылки якорь которых начинается на #
    	$('a[href^="#"]').bind('click.smoothscroll',function (e) {
    		e.preventDefault();
    
    		var target = this.hash,
    		$target = $(target);
    
    		$('html, body').stop().animate({
    			'scrollTop': $target.offset().top 
    		}, 900, 'swing', function () {
    			window.location.hash = target;
    		});
    	});
    
    });