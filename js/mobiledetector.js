
  
  
  $(function() {

//alert(navigator.userAgent);
   
    if (navigator.userAgent.match(/Android/)) {
        $('body').addClass('Android');
        $(window).on('orientationchange', orientationChangeHandler);
        function orientationChangeHandler(e) {
            setTimeout(function() {$(window).trigger('resize');}, 500);
          //  alert("orientationchange14");  
        };

        window.onresize = function() {
        $('.iosSlider').iosSlider('destroy');
        setTimeout(function() {            
              $('.iosSlider').iosSlider({
              snapToChildren: true,
    					desktopClickDrag: true,
    					keyboardControls: true,
    					navNextSelector: $('.next'),
    					navPrevSelector: $('.prev'),
    					navSlideSelector: $('.selectors .item'),
    					onSlideChange: slideChange,
              infiniteSlider: true,
              autoSlide: true,
              autoSlideTimer: 1500
      				});
              function slideChange(args) {
      				
      				$('.selectors .item').removeClass('selected');
      				$('.selectors .item:eq(' + (args.currentSlideNumber - 1) + ')').addClass('selected');
      				
      			  }
            }, 200);
        
        };
    
    }
    if (navigator.userAgent.match(/Linuxx/)) {
        $('body').addClass('Android');
        $(window).on('orientationchange', orientationChangeHandler);
        function orientationChangeHandler(e) {
            setTimeout(function() {$(window).trigger('resize');}, 500);
                    
        };

        window.onresize = function() {
        $('.iosSlider').iosSlider('destroy');
        setTimeout(function() {            
              $('.iosSlider').iosSlider({
              snapToChildren: true,
    					desktopClickDrag: true,
    					keyboardControls: true,
    					navNextSelector: $('.next'),
    					navPrevSelector: $('.prev'),
    					navSlideSelector: $('.selectors .item'),
    					onSlideChange: slideChange,
              infiniteSlider: true,
              autoSlide: true,
              autoSlideTimer: 1500
      				});
              function slideChange(args) {
      				
      				$('.selectors .item').removeClass('selected');
      				$('.selectors .item:eq(' + (args.currentSlideNumber - 1) + ')').addClass('selected');
      				
      			  }
            }, 200);
        
        };

        
    }
    
    if (navigator.userAgent.match(/iPhone/)) {
        $('body').addClass('iPhone');
             
    }
    
    if (navigator.userAgent.match(/iPad/)) {
        $('body').addClass('iPad');  
       window.onresize = function() {
       
        }; 
        
    }
    
    if (navigator.userAgent.match(/WOW64/)) {
        $( "body" ).addClass( "WOW" );
    }
    
  /* if(window.attachEvent) {
    window.attachEvent('onresize', function() {
        $('.iosSlider').iosSlider('onSlideChange');
        });
    }
    else if(window.addEventListener) {
        window.addEventListener('resize', function() {
            $('.iosSlider').iosSlider('onSlideChange');
        }, false);
    }
    else
    {
        
    }   */
    
}); 



