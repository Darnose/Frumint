$(document).ready(function(){

	if ($(window).width() > 100)
    { 
		// Кешируем объект окна
			$window = $(window);
		                
		   $('[data-type="background"]').each(function(){
		     var $bgobj = $(this); // Назначаем объект
		                    
		      $(window).scroll(function() {
		                    
				// Прокручиваем фон со скоростью var.
				// Значение yPos отрицательное, так как прокручивание осуществляется вверх!
				var yPos = ($window.scrollTop() / $bgobj.data('speed')); 
				
				// Размещаем все вместе в конечной точке
				var coords = +yPos + 'px';

				// Смещаем фон
				$bgobj.css({ top: coords });
				
			}); 

		 });	
    }
	

}); 