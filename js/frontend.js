function isMobile() {
    if (window.innerWidth < 768)
        return true;

    mobile = ['iphone', 'ipad', 'android', 'blackberry', 'nokia', 'opera mini', 'windows mobile', 'windows phone', 'iemobile'];
    for (var i in mobile) if (navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) > 0) return true;
    return false;
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";path=/;" + expires + "";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function setClass(text, className) {
    $('.paramcell').each(function () {
        var first = $(this).find('div.first');
        var firstText = $.trim(first.text());
        //console.log(text + 'xxx' + firstText);
        if (firstText == text)
            $(this).addClass(className);
    });
}

$(".openButton").click( function() {
      var oDiv = $(this).attr('data-ide');
      var myButt = $('div[data-ide="'+oDiv+'"].openButton');
      var myODiv = $('div[data-ide="'+oDiv+'"].openDiv');
      var isO = myODiv.hasClass('isOpen');

      if(oDiv && !isO)
      {
        myODiv.addClass('isOpen');
        myButt.addClass(oDiv+'close');
      }
      else
      {
        myODiv.removeClass('isOpen');
        myButt.removeClass(oDiv+'close');
      }
});

setTimeout(function(){
        $('.contentwrapper').addClass('animated');
},500);


$(function() {

        //Odebrádní první položky z mm-menu
        $('#menu ul li').first().remove();
        //Přidání class do mm-menu u rozbalovacích
        $('#menu ul li').each(function(){
              //console.log($(this).children(':first').next().prop('nodeName') + 'oo');
              if($(this).children(":first").next().prop('nodeName')=='UL')
              $(this).addClass('mm-menu-rozbal');
        });
        // funkce pro skrývání menu on scroll použití např.: prospecta.cz//
       

        /*Vložení class libovolným parentům*/
        var a = [];
        a[0] = ['icowrpimg', 2, 'zmenseno'];
        a[1] = ['gray', 1, 'yyy'];
        a[2] = ['fullwrprow', 3, 'sedivka'];


        $.map(a, function (index, item) {
            //var items = index.split(',');
            var findClass = index[0];
            var steps = parseInt(index[1]);
            var setClassStr = index[2];
            if ($('.' + findClass).length > 0) {
                $('.' + findClass).each(function () {
                    $(this).parents().eq(steps - 1).addClass(setClassStr);
                });
            }
        });
        /*end vložení class libovolným parentům*/

        /*Vložení class libovolným parentům*/
        var c = [];
        c[0] = ['id1', 3, 'nadvlajkama'];
        c[1] = ['id3', 3, 'podvlajkama'];
        c[2] = ['m2cFlags', 3, 'vlajky'];

        $.map(c, function (index, item) {
            //var items = index.split(',');
            var findId = index[0];
            var steps = parseInt(index[1]);
            var setClassStr = index[2];
            if ($('#' + findId).length > 0) {
                $('#' + findId).each(function () {
                    $(this).parents().eq(steps - 1).addClass(setClassStr);
                });
            }
        });

        /*Fancybox html popupOpen*/
        var pop = [];
        pop[0] = ['mngrs']; //definice klikacích elementů

        $.map(pop, function (index, item) {
            //var items = index.split(',');
            var findClass = index[0];
            if ($('.' + findClass).length > 0) {
                $('.' + findClass).css('cursor', 'pointer');
                $('.' + findClass).click(function () {
                    $(this).addClass('compensate-for-scrollbar');
                    var secretHtml = $(this).children('.popUpMngrs').html();
                    $.fancybox.open({
                        transitionEffect: "fade",
                        'content': $(this).children('.popUpMngrs'),
                        iframe: {
                            css: {
                                width: '600px'
                            }
                        },
                        helpers: {
                            overlay: {
                                locked: true,
                                css: {
                                    'background': 'rgba(255, 42, 0, 0.5)'
                                }
                            }
                        }
                    });
                });
            }
        });
        /*end Fancybox html popupOpen*/



        /*Down anchor scroll*/
        var isDown = getCookie('anchor');
        if (isDown.length > 0) {
            if ($(isDown).length > 0) {
                setTimeout(function () {
                    $('html,body').animate({ scrollTop: $(isDown).offset().top }, 1200);
                    setCookie('anchor', '');
                }, 1200);
            }
        }
        else
            setCookie('anchor', '');

        var isHeavyDown = '#toHeader';
        console.log(isDown.length);
        if ($(isHeavyDown).length > 0 && isDown.length == 0) {
            setTimeout(function () {
                $('html,body').animate({ scrollTop: $(isHeavyDown).offset().top }, 1200);
                setCookie('anchor', '');
            }, 1200);
        }

        $('.getdown').click(function () {
            var myAnchor = '#' + $(this).data('anchor');
            var isExternUrl = $(this).attr('href');
            if ($(myAnchor).length > 0 && isExternUrl == '#') {
                setTimeout(function () {
                    $('html,body').animate({ scrollTop: $(myAnchor).offset().top }, 1200);
                }, 10);
            }
            else
                setCookie('anchor', myAnchor, '/');
        });
        /*Down anchor scroll*/

        $('.boxedlinksTrue a').hover(function () {
            $(this).parents('.boxedlinksTrue').addClass('ghover');
        }, function () {
            $('.boxedlinksTrue').removeClass('ghover');
        });

        /*Vlož obsah a vloží se třída*/
        setClass('Eshop', 'eshopclass');
        setClass('Cena s DPH:', 'cenaclass');
        setClass('Číselník:', 'ciselnikclass');

        //Vyhledávání
        var defaultSearchText = 'Zadejte hledaný text ...';
        $("#ASPxTextBoxSearchValue1").val(defaultSearchText);

        //Slick slidery
        $(".bigSlider").slick({
            dots: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 4000,
            speed: 1500,
            nextArrow: '<div class="big-next"></div>',
            prevArrow: '<div class="big-prev"></div>'
        });

        $('.bigSlider').each(function () {
            var videoplay = $(this).find('video');
            /*Když jsme na mobilu, videa smázneme*/
            console.log(isMobile());
            if (isMobile()) {
                var myvideoslide = videoplay.closest('div.slick-slide');
                var myvideoslideindex = myvideoslide.data('slick-index');
                $('.hlavni').slick('slickRemove', myvideoslideindex);
            }
            /*Spustit autoplay pokud video*/
            if (videoplay.data('vautoplay'))
                setTimeout(function () { $(videoplay).get(0).play(); }, 800);
        });

        $('.bigSlider').on('afterChange', function (event, slick, currentSlide) {
            //console.log(currentSlide);
            var vid = $(slick.$slides[currentSlide]).find('video');
            if (vid.length > 0)
                $(vid).get(0).play();

            $('.bigSlider .item.slide.slick-slide').each(function () {
                var slideNumber = $(this).data('slick-index');
                if (slideNumber != currentSlide) {
                    var otherVideo = $(this).find('video');
                    if (otherVideo.length > 0)
                        $(otherVideo).get(0).pause();
                }
            });

        });

        /*Kategorie slider*/
        $('.linkToCategory').each(function () {
                var linkh = $(this).attr('href');
                $(this).next().attr('href', linkh);
                $(this).remove();
            });
        $(".categorySlider").slick({
            dots: false,
            arrows: true,
            // nextArrow: '<i class="slickNewsNext fa fa-arrow-right"></i>',
            // prevArrow: '<i class="slickNewsPrev fa fa-arrow-left"></i>',
            infinite: true,
            centerMode: false,
            variableWidth: false,
            adaptiveHeight: false,
            slidesToShow: 4,
            slidesToScroll: 3,
            autoplay: true,
            autoplaySpeed: 3000,
            responsive: [
              {
                breakpoint: 1100,
                settings: {
                  arrows: false
                }
              },
              {
                breakpoint: 1500,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 2,    
                  arrows: false
                }
              },{
                breakpoint: 1100,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 2,    
                  arrows: false
                }
              },
              {
                breakpoint: 950,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  arrows: false
                }  
              },{
                breakpoint: 750,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows: false
                }  
              }
            ]
        });
        
        $(".productSlider").slick({
            dots: false,
            arrows: true,
            // nextArrow: '<i class="slickNewsNext fa fa-arrow-right"></i>',
            // prevArrow: '<i class="slickNewsPrev fa fa-arrow-left"></i>',
            infinite: true,
            centerMode: false,
            variableWidth: false,
            adaptiveHeight: false,
            slidesToShow: 4,
            slidesToScroll: 3,
            autoplay: true,
            autoplaySpeed: 3000,
            responsive: [
              {
                breakpoint: 1100,
                settings: {
                  arrows: false
                }
              },
              {
                breakpoint: 1650,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  arrows: false
                }
              },
              {
                breakpoint: 1100,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  arrows: false
                }
              },
              {
                breakpoint: 700,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows: false
                }
              }
            ]
        });
        /*Clik do produktu*/
        $('.clickLink').click(function(){ 
             var url = $(this).children('a.linkToProduct').attr('href');
             if(url.length>0)
             {
                setTimeout(function(){
                    window.location.href = url;
                    }, 800);
             }
        });

        /*logo slider*/
        $(".logoSlider").slick({
            dots: false,
            arrows: true,
            infinite: true,
            centerMode: false,
            variableWidth: false,
            slidesToShow: 4,
            slidesToScroll: 3,
            autoplay: true,
            autoplaySpeed: 3500,
            responsive: [
              {
                breakpoint: 1080,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 900,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
        });

        $(".sliderBottom").slick({
            dots: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
        });

         $('.linkToNews').each(function () {
                 var linkh = $(this).attr('href');
                 $(this).prev().attr('href', linkh);
                 $(this).remove();
         });

        /*Init AOS
        AOS.init({
           duration: 1200
          });*/
       $("#collageGallery").appendTo(".collageGallery");

       /*Shopmenu domenu*/
       var isProduct = $("li.tlacitko").find("[data-class='forShopMenu']");
       if(isProduct)
       {
          $('.ExtraShopMenu li, .ExtraShopMenu a').removeClass('forecolor1 shopItem sub');
          $('.ExtraShopMenu ul').removeAttr('style').removeClass('navmenu forecolorgray dn2').addClass('podmenu');
          $('.ExtraShopMenu ul i').remove();
          $('.ExtraShopMenu li i').remove();
          var getMenu = '<div class="boxmenu dn"><ul class="podmenu simple">' + $('.ExtraShopMenu').html() + '</ul></div>';
          //console.log(getMenu);
          isProduct.after(getMenu);
       }

       var isFilterBlock = $('.prdcs').find('[data-ide="filters"]');
       if(isFilterBlock.hasClass('hidden'))
       $('.fltrdiv span.flopen').addClass('hidden');
});

/*Galerie koláž*/
$(window).load(function () {
    $('.Collage').collagePlus(
    {
        'targetHeight': 240,
        'effect': "effect-5",
        'allowPartialLastRow': true
    });
});

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 119) {
        $('.mainmenu').addClass('fixed');
         $('.mainmenu').removeClass('nofixed');
    } else {
        $('.mainmenu').removeClass('fixed');
        $('.mainmenu').addClass('nofixed');
    }
});

// funkce pro div na klik open/close použití např.: oarklane-is.com//

$(document).on('click', '.openButton', function() {
      var oDiv = $(this).attr('data-ide');
      var myButt = $('div[data-ide="'+oDiv+'"].openButton');
      var myODiv = $('div[data-ide="'+oDiv+'"].openDiv');
      var isO = myODiv.hasClass('isOpen');

      if(oDiv && !isO)
      {
        myODiv.addClass('isOpen');
        myButt.addClass(oDiv+'close');
      }
      else
      {
        myODiv.removeClass('isOpen');
        myButt.removeClass(oDiv+'close');
      }
});

// funkce pro skrolovací šipku nahoru - použití např.: TCOX //
(function($){
	$.fn.UItoTop = function(options) {

 		var defaults = {
    			text: 'To Top',
    			min: 200,
    			inDelay:600,
    			outDelay:400,
      			containerID: 'toTop',
    			containerHoverID: 'toTopHover',
    			scrollSpeed: 1200,
    			easingType: 'linear'
 		    },
            settings = $.extend(defaults, options),
            containerIDhash = '#' + settings.containerID,
            containerHoverIDHash = '#'+settings.containerHoverID;


		$(containerIDhash).hide().on('click.UItoTop',function(){
			$('html, body').animate({scrollTop:0}, settings.scrollSpeed, settings.easingType);
			$('#'+settings.containerHoverID, this).stop().animate({'opacity': 0 }, settings.inDelay, settings.easingType);
			return false;
		})
		.prepend('<span id="'+settings.containerHoverID+'"></span>')
		.hover(function() {
				$(containerHoverIDHash, this).stop().animate({
					'opacity': 1
				}, 600, 'linear');
			}, function() {
				$(containerHoverIDHash, this).stop().animate({
					'opacity': 0
				}, 700, 'linear');
			});

		$(window).scroll(function() {
			var sd = $(window).scrollTop();
			if(typeof document.body.style.maxHeight === "undefined") {
				$(containerIDhash).css({
					'position': 'absolute',
					'top': sd + $(window).height() - 50
				});
			}
			if ( sd > settings.min )
				$(containerIDhash).fadeIn(settings.inDelay);
			else
				$(containerIDhash).fadeOut(settings.Outdelay);
		});
};
})(jQuery);
 

jQuery( window ).resize(function() {

    jQuery(".mcontent").mCustomScrollbar("update");

});