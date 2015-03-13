/*************************************************************
 1 GENERAL
*************************************************************/
$("body").css("overflow-x", "hidden");


jQuery(function ($) {
  
  // Enable tooltip
  $('[data-toggle="tooltip"]').tooltip()

  //Enable Sidebar offcanvas
$(document).ready(function () {
  $('[data-toggle="offcanvas"]').click(function () {
    $('.row-offcanvas').toggleClass('active')
  });
});

});



/*************************************************************
2 ISOTOPE AND BLOG MASONRY
*************************************************************/

//Isotope function


jQuery(function($){

// item column size

  $('.iso-item').addClass('col-sm-6 col-xs-12 col-md-3');
  $('.iso-item:odd').removeClass('col-md-3').addClass('col-md-6');

//Isotope masonry
$( function() {


    var $container = $('.isotope');
    $container.isotope({
      
      itemSelector: '.iso-item',
      layoutMode: 'masonry',
      transitionDuration: '0.8s',
     
          getSortData: {
            category: '[data-category]',

          },
      masonry: {
      columnWidth: '.grid-sizer',
     
      }
});

// Isotope Animation function
jQuery(function($) {
$('.iso-item').each(function(i) {
  $(this).hide();
  $(this).show( 100 ).delay((i++) * 100).queue(function( next ){
        // $(this).addClass( $animationclass ); //add a custom class to isotope loading
        $(this).dequeue();
        $(this).finish();
    });
    });
  }); // End Isotope animation function

  
}); // End isotope portfolio function

//Fiter data-groups
  // store filter for each group
  var filters = {};

  $('#filters').on( 'click', '.button', function() {
    
    var $this = $(this);
    
    // get group key
    var $buttonGroup = $this.parents('.button-group');
    var filterGroup = $buttonGroup.attr('data-filter-group');
    
    // set filter for group
    filters[ filterGroup ] = $this.attr('data-filter');
    // combine filters
    var filterValue = '';
    for ( var prop in filters ) {
      filterValue += filters[ prop ];
    }
    // set filter for Isotope
    $('.isotope').isotope({ filter: filterValue });
  });

  // change is-checked class on buttons
  $('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  }); // End filder data groups
  
}); //End isotope portfolio functions




/*************************************************************
3 PORTFOLIO ISOTOPE
*************************************************************/

//Isotope function
jQuery( function($) {
//Isotope masonry
$( function() {

    var $container = $('.iso-portfolio-page');
    $container.isotope({
      itemSelector: '.iso-portfolio-item',
      layoutMode: 'fitRows',
      masonry: {
        columnWidth: '.grid-sizer'
      }
});
//Isotope apend on click
  $('#append-portfolio-item').on( 'click', function() {
    // create new item elements
    var $elems = getItemElement().add( getItemElement() ).add( getItemElement() );
    // append elements to container
    $container.append( $elems )
      // add and lay out newly appended elements
      .isotope( 'appended', $elems);
  });

  // Isotope animation function
// Dynamic animation class variable
$animationclass_portfolio = 'iso-animate ' + 'fadeInUp';
// Isotope Animation function
jQuery(function($) {
$('.iso-portfolio-item').each(function(i) {
  $(this).hide();
  $(this).show( 100 ).delay((i++) * 100).queue(function( next ){
        $(this).addClass( $animationclass_portfolio ); //add a custom class to isotope loading
        $(this).dequeue();
        $(this).finish();
      });
    });
  }); // End Isotope animation function

  
}); // End isotope masonry function


//Fiter data-groups
  // store filter for each group
  var filters = {};

  $('#filters-portfolio').on( 'click', '.button', function() {
    var $this = $(this);
    // get group key
    var $buttonGroup = $this.parents('.button-group');
    var filterGroup = $buttonGroup.attr('data-filter-group');
    // set filter for group
    filters[ filterGroup ] = $this.attr('data-filter');
    // combine filters
    var filterValue = '';
    for ( var prop in filters ) {
      filterValue += filters[ prop ];
    }
    // set filter for Isotope
    $('.iso-portfolio-page').isotope({ filter: filterValue });
  });

  // change is-checked class on buttons
  $('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });
// End filder data groups
}); // End isotope function
//End isotope page-portfolio functions

$(document).scroll(function(){
  
  var $navigation = $('.main-nav');
  var $topbar    = $('.top-bar');
  var $logo      = $('.main-logo img');
 
  if($(window).scrollTop() >= 34){
    $navigation.addClass('navbar-fixed-top').addClass('main-nav-fixed');
    $topbar.hide(); 

  }else{
    $navigation.removeClass('navbar-fixed-top').removeClass('main-nav-fixed');
    $topbar.show();
  }
});



// Scroll to top function
jQuery(function($){
  $(document) .scroll(function(){

  if($(window).scrollTop() >= 400){
    $('#to-top').show().removeClass('animated fadeOutDown').addClass('animated fadeInDown');

  }else {
    $('#to-top').fadeOut().addClass('animated fadeOutDown').removeClass('animated fadeInDown');
  } 

});

$('#to-top').click(function(){
  $('html, body').animate({scrollTop : 0},700);
    return false;

});

});

  //********** Add open on hovered menus and add animation  ( Desktop ) ****/

    jQuery(function($){
         $('.navbar-default .nav li.dropdown').hover(function() {
          if($(window).width() >= 767) {
            $(this).addClass('open');
            $('.dropdown-menu').addClass('menu-animation fadeIn');
          }
         
    }, function() {
      if($(window).width() >= 767) { 
         $(this).removeClass('open');
         $('.dropdown-menu').removeClass('menu-animation fadeIn');
       }
      });
    }); 
  
  /****** Show/Hide search form *****/
  jQuery(function($) {
    $('#main-search-form').addClass('search-animation zoomIn');
    $("#main-search-button").click(function(e) {
        e.preventDefault();
        var $toClose = $("#main-search-form");
        // Show the search div/form
        $("#main-search-form").toggle(1, function() {
           
          // Close the menu when clicking outside the search form
            if($toClose.is(':visible')) { 
                $('#main-search-button').addClass('visibility');
                $('body').one('click', function(e) {
                    e.preventDefault();
                    $toClose.hide().addClass('search-animation zoomIn');
                    $('#main-search-button').removeClass('visibility');
                });
            }
            else {

                $('body').unbind('click');
            }
        }).addClass('search-animation zoomIn');
    });
    // Prevent Menu to close when targeting the search div
    $("#main-search-form").click(function(e) {
       e.stopPropagation(); // This is the preferred method.
  });
});



/*=============================
  Mega menu 
===============================*/
jQuery(function($) {
  window.prettyPrint && prettyPrint()
  $(document).on('click', '.mega-menu .dropdown-menu', function(e) {
    e.stopPropagation()
    });
  });

/*************************************************************
 4 PSP SLIDER
*************************************************************/
jQuery(document).ready(function($){

// general vars
  var slider                    = $('.swiper-container'),
      buttonSlideshowPrev       = $('.swiper-button-prev'),
      buttonSlideshowNext       = $('.swiper-button-next'),
      sliderHeading             = $('.swiper-slide  .content h1'),
      sliderParagraph           = $('.swiper-slide .content .content-inner'),
      sliderButtons             = $('.swiper-slide .content .content-buttons');

// Attr settings
  var sliderStart                = $( slider ).data('start'),
      slidereffect               = $( slider ).data('effect'),
      sliderAutoplayTime         = $( slider ).data('autoplaytime'),
      sliderTransitionSpeed      = $( slider ).data('transitionspeed'),
      sliderNav                  = $( slider ).data('navigationtype'),
      sliderAnimationHeading     = $( slider ).data('animationheading'),
      sliderAnimationParagraph   = $( slider ).data('animationparagraph');
      sliderAnimationButtons     = $( slider ).data('animationbuttons');
if( $('.front-slider').hasClass( "front-slider" )  ) {
var pspSlider = new Swiper ('.front-slider', {
      //Slider options
      direction: 'horizontal',
      watchVisibility: true,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      loop: false,
      autoplay: parseInt(sliderAutoplayTime),
      speed: parseInt(sliderTransitionSpeed),
      effect: slidereffect,
      initialSlide: parseInt(sliderStart),
      grabCursor: false,
      longSwipes: true,
      spaceBetween: 0,
      slidesPerView: 'auto',
      shortSwipes: true,
      allowSwipeToNext: true,
      allowSwipeToPrev: true,
      updateOnImagesReady: true,
      onInit: function() {
        slideInit();
      },
      onSlideChangeStart: function(){
        slideStart();

      },
      onSlideChangeEnd: function(){
        slideEnd();
      },
    });
}

// Slider init action
function slideInit() {
  // Hide elements
  $( sliderHeading ).addClass('hidden');
  $( sliderParagraph ).addClass('hidden');
  $( sliderButtons ).addClass('hidden');

  // Show elements
  $( sliderHeading ).removeClass('hidden').addClass('slider-animation ' + sliderAnimationHeading );
    setTimeout( function() {
      $( sliderParagraph ).removeClass('hidden').addClass('slider-animation ' + sliderAnimationParagraph );
    }, 800);

    setTimeout(function() {
      $( sliderButtons ).removeClass('hidden').addClass('slider-animation ' + sliderAnimationButtons );
    }, 1200);

} // End slideInit

// Slider start change action
function slideStart() {
    $( sliderHeading ).addClass('hidden').removeClass('slider-animation ' + sliderAnimationHeading );
    $( sliderParagraph ).addClass('hidden').removeClass('slider-animation ' + sliderAnimationParagraph );
    $( sliderButtons ).addClass('hidden').removeClass('slider-animation ' + sliderAnimationButtons );
} // End slideStart

// Slider end change action
function slideEnd() {
  // Show elements
  $( sliderHeading ).removeClass('hidden').addClass('slider-animation ' + sliderAnimationHeading );
    setTimeout( function() {
      $( sliderParagraph ).removeClass('hidden').addClass('slider-animation ' + sliderAnimationParagraph);
    }, 800);

    setTimeout(function() {
      $( sliderButtons ).removeClass('hidden').addClass('slider-animation ' + sliderAnimationButtons);
    }, 1200);
} // end slideEnd


// Navigation

// Navigate slideshow label
  
  $( buttonSlideshowPrev ).hover(function(index){
    $(this).find('span').show().addClass('animated flipInX');
  }, function(){
    $(this).find('span').hide();
  });

  $( buttonSlideshowNext ).hover(function(){
    $(this).find('span').show().addClass('animated flipInX');
  }, function(){
    $(this).find('span').hide();
  });

}); // end document.ready


/*************************************************************
5 Parallax
*************************************************************/



var s = skrollr.init();

/*************************************************************
6 PIE chart ANIMATION
*************************************************************/




jQuery(function($) {
  var chart = $('.chart');
  var brColor   = [],
      ctSize    = [],
      icoType   = [],
      icoColor  = [],
      prctColor = [],
      trcColor  = [];



  $( chart ).each(function(){
    var barColor     = $(this).data('barcolor'),
        counterSize  = $(this).data('countersize'),
        iconType     = $(this).data('showicon'),
        iconColor    = $(this).data('iconcolor'),
        percentColor = $(this).data('percentcolor'),
        trackColor   = $(this).data('trackcolor');



        // Bar colors to array
        brColor.push(barColor);
        // Sizes to array
        ctSize.push(counterSize);
        // Icons to array
        icoType.push(iconType);
        // Icon colors to array
        icoColor.push(iconColor);
        // Percent colors to array
        prctColor.push(percentColor);
        // Track color to array
        trcColor.push(trackColor);
  });
    // Init pie chart
    $( chart ).easyPieChart({
      animate: 6000,
      easing: 'easeOut',
      onStep: function(from, to, percent) {
        $(this.el).find('.percent').text(Math.round(percent));
      },
        scaleColor: false,
        lineWidth: 5,
    });

  $( chart ).each(function(index){
    var counterIcon = $(this).data('showicon');
    // set bar color
    $(this).data('easyPieChart').options.barColor   = brColor[index];
   var track =  $(this).data('easyPieChart').options.trackColor = trcColor[index];

    if( track == "" ) {
      $(this).data('easyPieChart').options.trackColor = "#f9f9f9";
    } else {
      track =  $(this).data('easyPieChart').options.trackColor = trcColor[index];
    }

   // Set size to counters
   $(this).addClass(ctSize[index]);

   // icon layout
   var iconType    = '<i class="fa ' + icoType[index] + '" style="color:' + icoColor[index] +'" ></i>',
       percentType = '<span class="percent" style="color:'+ prctColor[index] +';" ></span>'; 
   
   // Set icon else set percent
  if( !counterIcon == "" ) {
    $(this).append(iconType);
  }else{
    $(this).append(percentType)
  }

  }); // end loop
}); // End document.ready



/*************************************************************
7 PROGRESS BAR ANIMATION
*************************************************************/


jQuery(function($){
  var $this = $(this);
  
// Progressbar
  function progressBar() {
     $this.find('.progress-bar').progressbar({
        transition_delay: 300,
        refresh_speed: 50,
        display_text: 'center',
        use_percentage: true
      });
      
       
    }

      var prgrsColor   = [],
          prgrsBgColor = [];

      $this.find('.progress-bar').each(function(index){
          var progressColor = $(this).data('progresscolor');
          var progressBgColor = $(this).data('progressbgcolor');
              // Push to array
              prgrsColor.push(progressColor);
              prgrsBgColor.push(progressBgColor);
      });

        $this.find('.progress-bar').each(function(index){
           $(this).css('background-color', prgrsColor[index]);
      });

        $this.find('.progress').each(function(index){
           $(this).css('background-color', prgrsBgColor[index]);
        });

// Progressbar waypoint
$this.find('.toggle-tabs-content').waypoint(function() {

      progressBar();

      },

  {
    offset: '100%',
    triggerOnce: true
  });

// Progressbar tab loading
  $(document).on( 'click', '.toggle-tabs li', function() {
        var $this = $(this);

        $this.closest('.toggle-tabs-holder').find('.progress-bar')
        .hide().css('width', '0');

        $this.closest('.toggle-tabs-holder').find('.vertical .progress-bar')
        .hide().css({width: "100" + "%", height: "0" });

             
        setTimeout(function(){
            $this.closest('.toggle-tabs-holder').find('.progress-bar')
            .show().progressbar();
        }, 300 );
  });


}); // End


/*************************************************************
8 COUNTER
*************************************************************/

   jQuery(document).ready(function($) {
            $('.counter').counterUp({
                delay: 80,
                time: 2000,
            });

        });  

   $('.counter').each(function(index){

   });

/*************************************************************
 9 REQUEST ANIMATION FRAME DECLARATION FOR SCROLLING
*************************************************************/

var scroll = window.requestAnimationFrame ||
             window.webkitRequestAnimationFrame ||
             window.mozRequestAnimationFrame ||
             window.msRequestAnimationFrame ||
             window.oRequestAnimationFrame ||
             function(callback){ window.setTimeout(callback, 1000/6); };

/*************************************************************
 10 DEBOUNCED RESIZE (http://www.paulirish.com/2009/throttled-smartresize-jquery-event-handler)  
*************************************************************/

function smartresize(sr) {
  var debounce = function (func, threshold, execAsap) {
  var timeout;
  return function debounced () {
  var obj = this, args = arguments;
    function delayed () {
      if (!execAsap) {
        func.apply(obj, args);
      }
      timeout = null;
      }
      if (timeout) {
        clearTimeout(timeout);
      } else if (execAsap) {
        func.apply(obj, args);
      }
      timeout = setTimeout(delayed, threshold || 100);
    };
  };
  $.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };
}


/*************************************************************
11 TABS
*************************************************************/

  var tabholder = '.toggle-tabs-holder',
    tab         = '.toggle-tabs li',
    tabLine     = '.toggle-tabs-line',
    activetab   = 'active-tab';
  
  $(document).on( 'click',tab, function() {
    var $this = $(this);
    if(!$this.hasClass('active-tab') && $this.index()>1) {
      var i = $this.index()-2;
      $this.closest(tabholder).find('.toggle-tab').hide().removeClass('active-tab');
      $this.closest(tabholder).find('.toggle-tab').eq(i).fadeIn(500).addClass('active-tab');
      $this.closest(tabholder).find('li').removeClass(activetab);
      $this.addClass(activetab);
    }
  });


/*************************************************************
12 TOGGLES
*************************************************************/

  $(document).on('click', '.to-toggle-title', function(){
    if ($(this).find('.to-toggle-open .icon-to-plus').length) {
      $(this).find('.to-toggle-open').html('<i class="fa fa-minus accentColorHover"></i>');
    } else {
      $(this).find('.to-toggle-open').html('<i class="icon-to-plus accentColorHover"></i>');
    }
    $(this).next('.to-toggle-content').slideToggle(200);
  }); 

/*************************************************************
13 ACCORDIONS
*************************************************************/
    var accContent = '.accordion-content',
        accHolder  = 'accordion-holder',
        accOpen    = '.accordion-open',
        accPlus    = '.accordion-open .icon-to-plus';

  $(document).on('click', '.accordion-title', function(){

    $this = $(this);
    $prev = $this.parent().prev();

    while ($prev.hasClass(accHolder)) {
      if ($prev.find(accContent).is(':visible')) {
        $prev.find(accContent).slideToggle(300);
        $prev.find(accOpen).html('<i class="icon-to-plus fa fa-plus accentColorHover"></i>');
      }
      $prev = $prev.prev();
    }

    $next = $this.parent().next();
    while ($next.hasClass(accHolder)) {
      if ($next.find(accContent).is(':visible')) {
        $next.find(accContent).slideToggle(300);
        $next.find(accOpen).html('<i class="icon-to-plus fa fa-plus accentColorHover"></i>');
      }
      $next = $next.next();
    }
    if ($this.find(accPlus).length) {
      $this.next(accContent).slideToggle(300);
      $this.find(accOpen).html('<i class="fa fa-minus accentColorHover"></i>');
    }
  });

 
  /*********** Scroll reveal **********/
  jQuery(document).ready(function(){
    window.sr = new scrollReveal(); 
  })
  



/*************************************************************
 14 Google maps
*************************************************************/

      $(function() { 

        var $this = $(this),
            empty = "",
            // vars
            bounceTimer,
            map;

        var olatitude       = [],
            olongitude      = [],
            omapType        = [],
            ozoom           = [],
            oMY_MAPTYPE_ID  = [],
            ozoomControll   = [],
            ostreetview     = [],
            opanControll    = [],
            omapTypeControl = [],
            olandscapeColor = [],
            oroadColor      = [],
            owaterColor     = [],
            opoiColor       = [],
            olables         = [];

            $('.google-maps').each(function(index){
                                  // Latitude and longitude
                var latitude        = $(this).data('lat'),
                    longitude       = $(this).data('long'),
                    // Default map options
                    mapType         = $(this).data('type'),
                    zoom            = $(this).data('zoom'),
                    MY_MAPTYPE_ID   = 'custom_style',
                    // Map controll UI options
                    zoomControll    = $(this).data('zoomcontroll'),
                    streetview      = $(this).data('streetview'),         
                    panControll     = $(this).data('pancontroll'),
                    mapTypeControl  = $(this).data('maptypecontroll'),
                    // Map color settings
                    landscapeColor  = $(this).data('landscapecolor'),
                    roadColor       = $(this).data('roadcolor'),
                    waterColor      = $(this).data('watercolor'),
                    poiColor        = $(this).data('poicolor'),
                    lables          = $(this).data('map-lables');

                // Push to array
                  olatitude.push(latitude);
                  olongitude.push(longitude);
                  omapType.push(mapType);
                  ozoom.push(zoom);
                  oMY_MAPTYPE_ID.push(MY_MAPTYPE_ID);
                  ozoomControll.push(zoomControll);
                  ostreetview.push(streetview);
                  opanControll.push(panControll);
                  omapTypeControl.push(mapTypeControl);
                  olandscapeColor.push(landscapeColor);
                  oroadColor.push(roadColor);
                  owaterColor.push(waterColor);
                  opoiColor.push(poiColor);
                  olables.push(lables);
            }); // end each loop

              //If params not set
               if( ozoom == empty ){
                   ozoom = 12;
                }
               if( omapType == empty ){
                   omapType = "roadmap";
                }
               if( olatitude == empty ){
                   olatitude = "40.782865,";
                }
               if( olongitude == empty ){
                   olongitude = "-73.965355,17z";
                }

 function initialize() {  

      $('.google-maps').each(function(index){
          $(this).attr('id', 'maps-boxed' + index);

          // Map styles 

          var featureOpts = [
            {
              stylers: [
                { hue: '#890000' },
                { visibility: 'simplified' },
                { gamma: 0.5 },
                { weight: 0.5 }
              ]
            },
            {
              elementType: 'labels',
              stylers: [
                { visibility: olables[index] }
              ]
            },
            {
              featureType: "landscape",
              stylers: [
                { visibility: "on" },
                { color: olandscapeColor[index] }
              ]
            },{
              featureType: "road",
              stylers: [
                { visibility: "on" },
                { weight: 1.1 },
                { color: oroadColor[index] }
              ]
            },{
              featureType: "water",
              stylers: [
                { visibility: "on" },
                { color: owaterColor[index] }
              ]
            },{
              featureType: "poi",
              elementType: "geometry",
              stylers: [
                { visibility: "on" },
                { color: opoiColor[index] }
              ]
            }
              ];

console.log(featureOpts);
          // map Options
         var  mapOptions = {
            center: new google.maps.LatLng(olatitude[index], olongitude[index]),
            zoom: parseInt(ozoom[index]),
            zoomControl: ozoomControll[index],
            disableDefaultUI: true,
            panControl: opanControll[index],
            streetViewControl: ostreetview[index],
            mapTypeControl: omapTypeControl[index],
            mapTypeControlOptions: {
              mapTypeIds: [google.maps.MapTypeId.ROADMAP, oMY_MAPTYPE_ID[index]]
            },
            mapTypeId: oMY_MAPTYPE_ID[index]
          };

          map = new google.maps.Map(document.getElementById('maps-boxed' + index),
              mapOptions);

          var styledMapOptions = {
            name: 'Custom Style'
          };
          customMapType = [];
          customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);
          map.mapTypes.set(oMY_MAPTYPE_ID[index], customMapType);
           
           setMarkers(map, beaches);
    
     }); // end each loop

        }// end init
        
        // Load map to page
       if ( $('.google-maps').hasClass( "google-maps" ) ) {
        google.maps.event.addDomListener(window, 'load', initialize);

       }else {
        return false;
       }

        // Drop animation function
        function drop() {
          clearMarkers();
          for (var i = 0; i < neighborhoods.length; i++) {
            window.setTimeout(function() {
              addMarker(neighborhoods[i]);
            }, i * 200);
          }
          iterator = 0;
        }

        // Marker cords ( pushed in )
        var beaches = [];

        // Set markers
        function setMarkers(map, locations) {
          // Add markers to the map
    
          var image = {
            url: 'images/marker1.png',
            // This marker is 20 pixels wide by 32 pixels tall.
            size: new google.maps.Size(42, 68),
            // The origin for this image is 0,0.
            origin: new google.maps.Point(0,0),
            // The anchor for this image is the base of the flagpole at 0,32.
            anchor: new google.maps.Point(42, 42)
          };


      setTimeout(function(){

          for (var i = 0; i < locations.length; i++) {
            var beach = locations[i],
                myLatLng = new google.maps.LatLng(beach[1], beach[2]),
                myinfowindow = new google.maps.InfoWindow({
                    content: String(beach[4])
                });

                $('.markers').each(function(index){

                });


            // add marker ( marker options )  
            var marker = [];
             marker = new google.maps.Marker({
                position: myLatLng,
                draggable: false,
                optimized: false,
                map: map,
                icon: String(beach[5]),
                title: String(beach[0]),
                zIndex: parseInt(beach[3]),
                infowindow: myinfowindow,
                animation: google.maps.Animation.DROP
            });



            google.maps.event.addListener(marker, 'click', function() {
              this.infowindow.open(map, this);
            });


        google.maps.event.addListener(marker, 'mouseover', function() {
        if (this.getAnimation() == null || typeof this.getAnimation() === 'undefined') {
            
            clearTimeout(bounceTimer);
            
            var that = this;
             
            bounceTimer = setTimeout(function(){
                 that.setAnimation(google.maps.Animation.BOUNCE);
            },
            500);
 
        }
    });
    
    google.maps.event.addListener(marker, 'mouseout', function() {
        
         if (this.getAnimation() != null) {
            this.setAnimation(null);
         }
         
         // If we already left marker, no need to bounce when timer is ready
         clearTimeout(bounceTimer);
        
    });


          } // end loop 
      }, 1800);// end timeout

        }// end marker func

        $("[data-gmapping]").each(function(i,el) {
              var data = $(el).data('gmapping');
              var icon = data.mapicon;
              var markerPos = [
                                  [data.tags],
                                  [data.latlng.lat],
                                  [data.latlng.lng],
                                  [data.zindex],
                                  [data.content],
                                  [data.mapicon]
                              ];
              // Push marker data to array
              beaches.push(markerPos);


              });
      }); // end anon func


/*************************************************************
15 BUTTON STYLES
*************************************************************/
jQuery(document).ready(function($){
//Values stored in array
var button = $('.ps-btn'); 
 //Button background color

 var buttonBgColor           = [],
 // Button hover background color
     buttonBgHoverColor      = [],
 // Button text color
     buttonColor             = [],
 // Buton Hover text color
     buttonHoverColor        = [],
 // Append icon to the button     
     buttonHasIcon           = [],
 //Button icon color
     buttonIconColor         = [],
 //Button Hover icon color
     buttonHoverIconColor    = [],         
 // Button icon ( Change the icon )
     buttonIcon              = [],
 //Button border color
     buttonBorderColor       = [],
 // Button hover border color
     buttonHoverBorderColor  = [],
 // Button size
     buttonSize              = [],
 // Show icon
     buttonShowIcon          = [],
 // Button shape
     buttonShape             = [];

// Loop trough and get values from each data value
$( button ).each(function(){

  // Variables
   var btnBgColor             = $( this ).data('bgcolor'),
       btnBgHoverColor        = $( this ).data('bghovercolor'),
       btnColor               = $( this ).data('textcolor'),
       btnHoverColor          = $( this ).data('texthovercolor'),
       btnHasIcon             = $( this ).data('hasicon');
       btnIconColor           = $( this ).data('iconcolor'),
       btnHoverIconColor      = $( this ).data('iconhovercolor'),
       btnIcon                = $( this ).data('icon'),
       btnBorderColor         = $( this ).data('bordercolor'),
       btnHoverBorderColor    = $( this ).data('borderhovercolor'),
       btnButtonSize          = $( this ).data('buttonsize'),
       btnShowIcon            = $( this ).data('showicon'),
       btnShape               = $( this ).data('buttonshape');

// Push values to array
  
  // Default bg color
  buttonBgColor.push(btnBgColor);
  // Hover bg color
  buttonBgHoverColor.push(btnBgHoverColor);
  // Text color
  buttonColor.push(btnColor);
  // Text hover color
  buttonHoverColor.push(btnHoverColor);
  // has icon 
  buttonHasIcon.push(btnHasIcon);
  //icon color
  buttonIconColor.push(btnIconColor);
  //icon hover color
  buttonHoverIconColor.push(btnHoverIconColor);
  //icon
  buttonIcon.push(btnIcon);
  //Border color
  buttonBorderColor.push(btnBorderColor);
  //Border hover color
  buttonHoverBorderColor.push(btnHoverBorderColor);
  //Button size
  buttonSize.push(btnButtonSize);
  // Button icon animation
  buttonShowIcon.push(btnShowIcon);
  // Button shape
  buttonShape.push(btnShape);

}); 

//Set color to each element based on index
$( button ).each(function(index){
  if( buttonHasIcon[index] === ""){
    $(this).removeClass('ps-icon-anim');
    $(this).find("i").remove();
    $(this).removeClass('ps-btn-icon');
  }

// Set button icon
if( buttonIcon[index] == "" ){
  $(this).find('i').addClass('fa-arrow-right');
}else{
  $(this).find('i').addClass(buttonIcon[index]);
  }
// Set button size
if( buttonSize[index] == "" ){
  $(this).addClass('regular');
}else {
  $(this).addClass(buttonSize[index]);
}
// SHow buton or show button on hover
if( !buttonShowIcon[index] == "" ){
 $(this).addClass('ps-icon-anim');
}
// set Button shape
if( !buttonShape[index] == "" ){
 $(this).addClass(buttonShape[index]);
}
// init styles
  // Button colors
  $(this).attr('style',
     'border-color:' + buttonBorderColor[index] + '!important; '
      + 'background-color:' + buttonBgColor[index] + '!important; '
       + 'color:' + buttonColor[index] + '!important; ');
  
   //  icon color
   $(this).find('i').attr('style', 'color:' + buttonIconColor[index] + '!important;' );

  // Hover styles
    $(this).hover(function(){
      $(this).attr('style', 'background-color:' + buttonBgHoverColor[index] + '!important; display: inline-block; '
       + 'border-color:' + buttonHoverBorderColor[index] + '!important; ' + 'color:' + buttonHoverColor[index] + '!important; ' );
      // icon color
      $(this).find('i').attr('style', 'color:' + buttonHoverIconColor[index] + '!important;' );

    // Mouse leave
    }, function(){
      
  $(this).attr('style',
     'border-color:' + buttonBorderColor[index] + '!important; '
      + 'background-color:' + buttonBgColor[index] + '!important; '
       + 'color:' + buttonColor[index] + '!important; display: inline-block; ');
    // Icon color
    $(this).find('i').attr('style', 'color:' + buttonIconColor[index] + '!important;');
    }); // end hover
    $('.ps-btn').css('display', 'inline-block');
  }); // end loop
     

}); // End document.ready

/*===========================
  Gallery
 ===========================*/

 jQuery(window).ready(function(){

    var appendNumber  = 4;
    var prependNumber = 1;
    // Init gallery
    var psGallery = new Swiper ('.gallery-top', {
        spaceBetween: 0,
        centeredSlides: true,
        onTouchStart: false,
    });
    // Init gallery thumbs
    var galleryThumbs = new Swiper ('.gallery-thumbs', {
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 4,
        touchRatio: 0.2,
        slideToClickedSlide: true
    });
    if( $('.gallery-top').hasClass( "gallery-top" )  ) {
      psGallery.params.control     = galleryThumbs;
      galleryThumbs.params.control = psGallery;      
    }

    // Lightbox 
    var galleryOverlay = '<div class="gallery-overlay">';
        galleryOverlay += '<i class="fa fa-search-plus">';
        galleryOverlay += '</span>';
        galleryOverlay += '</div>';

    $('body').append('<div class="lightbox-container"></div>');
    
    // Append lightbox
    $('.gallery-top .swiper-slide a').click(function(e) {
      e.preventDefault();
      /*** general vars ***/
       $('body').append('<div class="lightbox-image-container"></div>');
      
      var lightboxImageUrl       = $(this).attr('href');
      var lightboxContainer      = $('.lightbox-container');
      var lightboxImageContainer = $('.lightbox-image-container');
      
      /*** lightbox image ***/
      var lightboxImage  = '<div class="lightbox-image">';      
          lightboxImage += '<img src="' + lightboxImageUrl + '" alt="" class="">';
          lightboxImage += '</div>';

      $(lightboxImageContainer).append(lightboxImage);
      $(lightboxContainer).show();
    });
    
// Detach lightbox
    $('.lightbox-container').click(function() {
      $(this).hide();
      $('.lightbox-image-container').detach();
    });

// Detach lightbox
$(document).on("click",".lightbox-image-container",function(){
     $(this).detach();
     $('.lightbox-container').hide();
    });

 }); // End document.ready

/*************************************************************
16 RELATED POSTS
*************************************************************/


// $(document).ready(function(){

//   var ww = $(window).width();
//      var relatedProjectsSlider = new Swiper ('.related-projects-slide', {
//         direction: 'horizontal',
//         loop: false,
//         touchEventsTarget: 'container',
//         nextButton: '.swiper-related-next',
//         prevButton: '.swiper-related-prev',
//         spaceBetween: 30,
//         centeredSlides: false,
//         slidesPerView: slidesPrView(),
//         touchRatio: 0.6,
//         slideToClickedSlide: true,
//     });
// function slidesPrView() {
//     var three = 3,
//         one = 1;
          
//     if( ww < 767  ) {
//         return one;
//       }else {
//        return three;
//       }
// } // end slidesPrView

// }); // end anon


/*************************************************************
17 TESTIMONIALS
*************************************************************/

$(document).ready(function(){

// Option array 
  var tstAmount   = [],
      tstAutoplay = [],
      tstSpeed    = [];


// Get attr data
$('.testimonials-slider').each(function(index){
  var testimonialAmount   = $(this).data('testimonialamount'),
      testimonialAutoplay = $(this).data('testimonialautoplay'),
      testimonialSpeed    = $(this).data('testimonialspeed');
     // Push to array
      tstAmount.push(testimonialAmount);
      tstSpeed.push(testimonialSpeed);
      tstAutoplay.push(testimonialAutoplay);
});


// Testimonial loop
$('.testimonials-slider').each(function(index){
    // Add classes
    $(this).addClass('testimonial-' + index);
    $(this).parent().find('.swiper-testimonials-next').addClass('testimonials-button-next' + index);
    $(this).parent().find('.swiper-testimonials-prev').addClass('testimonials-button-prev' + index);
    // inc buttons
    var buttonTestimonialPrev = '.testimonials-button-prev' + index,
        buttonTestimonialNext = '.testimonials-button-next' + index;
    // Init testimonial slider
     var testimonialsSlider = [index];
     var testimonialsSlider = new Swiper ('.testimonial-' + index, {
        direction: 'horizontal',
        loop: false,
        autoplay: tstAutoplay[index],
        speed: tstSpeed[index],
        touchEventsTarget: 'container',
        spaceBetween: 30,
        centeredSlides: false,
        slidesPerView: tstAmount[index],
        touchRatio: 0.6,
        slideToClickedSlide: true
    });


      // Navigate slideshow
      $( buttonTestimonialPrev ).on('click', function(e){
          e.preventDefault();
          testimonialsSlider.slidePrev();
        });

      $( buttonTestimonialNext ).on('click', function(e){
          e.preventDefault();
          testimonialsSlider.slideNext();
        }); 
      // Slide in tab fix
      $('.toggle-tabs li').hover(function(index){
        testimonialsSlider.update();
      });

  }); // End each loop
}); // end anon




/*************************************************************
18 OUR PARTNERS
*************************************************************/

$(document).ready(function(){





// Option array 
  var prtAmount   = [],
      prtAutoplay = [],
      prtSpeed    = [];


// Get attr data
$('.partner-slider').each(function(index){
  var partnerAmount   = $(this).data('partneramount'),
      partnerAutoplay = $(this).data('partnerautoplay'),
      partnerSpeed    = $(this).data('partnerspeed');
     // Push to array
      prtAmount.push(partnerAmount);
      prtSpeed.push(partnerSpeed);
      prtAutoplay.push(partnerAutoplay);
});




// Testimonial loop
$('.partner-slider').each(function(index){
    // Add classes
    $(this).addClass('partner-' + index);
    $(this).parent().find('.swiper-partners-next').addClass('partners-button-next' + index);
    $(this).parent().find('.swiper-partners-prev').addClass('partners-button-prev' + index);
    // inc buttons
    var buttonPartnerPrev = '.partners-button-prev' + index,
        buttonPartnerNext = '.partners-button-next' + index;
    // Init testimonial slider
     var partnersSlider = [index];
     var partnersSlider = new Swiper ('.partner-' + index, {
        direction: 'horizontal',
        loop: false,
        autoplay: prtAutoplay[index],
        speed: prtSpeed[index],
        touchEventsTarget: 'container',
        spaceBetween: 30,
        centeredSlides: false,
        slidesPerView: prtAmount[index],
        touchRatio: 0.6,
        slideToClickedSlide: true,
    });

      // Navigate slideshow
      $( buttonPartnerPrev ).on('click', function(e){
          e.preventDefault();
          partnersSlider.slidePrev();
        });

      $( buttonPartnerNext ).on('click', function(e){
          e.preventDefault();
          partnersSlider.slideNext();
        });     

}); // End each loop







}); // end anon



/*************************************************************
19 FORM VALIDATION
*************************************************************/


$(document).ready(function() {
   if( $('.cmxform').hasClass('cmxform') ){
    $("#ps-form").validate({
      rules: {
        name: "required",
        email: "required",
        comment: "required"
      },
    });
   }
 });


/*************************************************************
20 POPOVERS
*************************************************************/

$(document).ready(function() {
  $("#myPopOver").popover();
  $("#myPopOver2").popover();
  $("#myPopOver3").popover();
  $("#myPopOver4").popover();
  $("#myPopOver5").popover();
  $("#myPopOver6").popover();
  $("#myPopOver7").popover();
})

