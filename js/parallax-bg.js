$(document).ready(function(){

	if ($(window).width() > 0)
    { 
		// Кешируем объект окна
			$window = $(window);
		                
		   $('[data-type="background"]').each(function(){
		     var $bgobj = $(this); // Назначаем объект
		                    
		      $(window).scroll(function() {
		                    
				var yPos = -($window.scrollTop() / $bgobj.data('speed')); 
				
				var coords = +yPos + 'px';

				$bgobj.css({ top: coords });
				
			}); 

		 });	
    }
	

}); 