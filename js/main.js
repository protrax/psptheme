jQuery(function ($) {
  
  // Enable tooltip
  $('[data-toggle="tooltip"]').tooltip()

  // Fixed sidebar functionality
  $('#main-sidebar').affix({ 
  offset: {
    top: 100,
    bottom: function () {
      return (this.bottom = $('.footer').outerHeight(true))
    }
  }
})

  //Enable Sidebar offcanvas
  $(document).ready(function () {
  $('[data-toggle="offcanvas"]').click(function () {
    $('.row-offcanvas').toggleClass('active') 
  });
});

});



//***************************************************************
//****** Start Isotope functions blog and portfolio masonry *****
//***************************************************************

//Isotope function


jQuery(function($){

// Make a loading function

  // Ajax
    // append a loading class
    // End the ajax dfunction
    // Show all

      // var isotopeContainer = $('.isotope');

      // // Load function
      //   function pfLoading(e){
          
      //     e.find()

      //   };
      //   // Call the load function
      //   pfLoading( isotopeContainer );





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
      columnWidth: '.grid-sizer'
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




//********************************************************************
//****** Start Isotope functions Portfolio page all column pages *****
//********************************************************************

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


//********************************************
//************* Ajax portfolio ***************
//********************************************

  //******** TODO ********/
    // Load data form html document
    // make layout
    // append data
    // make it posssible to add animations on opening and closing.
    // Add navigation (Arrows / number / image - next - previous post)


//****************************************
//************ Main menu *****************
//****************************************



/****** sticky  main menu *****/
  // TODO 
  // Make logo scale on scroll (with no browser conflicts)


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
            $('.dropdown-menu').addClass('menu-animation zoomIn');
          }
         
    }, function() {
      if($(window).width() >= 767) { 
         $(this).removeClass('open');
         $('.dropdown-menu').removeClass('menu-animation zoomIn');
       }
      });
    }); 
  
  /****** Show/Hide search form *****/
  jQuery(function($) {

    $("#main-search-button").click(function(e) {
        e.preventDefault();
        var $toClose = $("#main-search-form")

        // Show the search div/form
        $("#main-search-form").show( function() {

          // Close the menu when clicking outside the search form
            if($toClose.is(':visible')) { 
                $('#main-search-button').addClass('visibility');
                $('body').one('click', function(e) {
                    e.preventDefault();
                    $toClose.hide(600);
                    $('#main-search-button').removeClass('visibility');
                });
            }
            else {

                $('body').unbind('click');
            }
        });
    });
    // Prevent Menu to close when targeting the search div
    $("#main-search-form").click(function(e) {
       e.stopPropagation(); // This is the preferred method.
  });
});


//****************************************
//************ PSP Slider *****************
//****************************************
jQuery(document).ready(function($){
// general vars
  var slider           = $('.swiper-container'),
      buttonPrev       = $('.swiper-button-prev'),
      buttonNext       = $('.swiper-button-next'),
      sliderHeading    = $('.swiper-slide  .content h1'),
      sliderParagraph  = $('.swiper-slide .content .content-inner'),
      sliderButtons    = $('.swiper-slide .content .content-buttons');

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
var pspSlider = new Swiper ('.swiper-container', {
      //Slider options
      direction: 'horizontal',
      watchVisibility: true,
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
      }
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

// Navigate slideshow
$( buttonPrev ).on('click', function(e){
    e.preventDefault();
    pspSlider.slidePrev();
  });

$( buttonNext ).on('click', function(e){
    e.preventDefault();
    pspSlider.slideNext();
  });
// Navigate slideshow label
  
  $( buttonPrev ).hover(function(index){
    $(this).find('span').show().addClass('animated flipInX');
  }, function(){
    $(this).find('span').hide();
  });


  $( buttonNext ).hover(function(){
    $(this).find('span').show().addClass('animated flipInX');
  }, function(){
    $(this).find('span').hide();
  });


// Slider video





}); // end document.ready


/*************************************************************
Parallax
*************************************************************/
  
jQuery(document).ready(function($){
      skrollr.init({
        forceHeight: false
      });
});

/*************************************************************
 PIE chart ANIMATION
*************************************************************/




jQuery(function($) {
  var chart = $('.chart');
  var brColor   = [],
      ctSize    = [],
      icoType   = [],
      icoColor  = [],
      prctColor = [],
      trcColor  = [],
      sclColor  = [];



  $( chart ).each(function(){
    var barColor     = $(this).data('barcolor'),
        counterSize  = $(this).data('countersize'),
        iconType     = $(this).data('showicon'),
        iconColor    = $(this).data('iconcolor'),
        percentColor = $(this).data('percentcolor'),
        trackColor   = $(this).data('trackcolor'),
        scaleColor   = $(this).data('scalecolor');


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
        // Scale color to array
        sclColor.push(scaleColor);
  });
    // Init pie chart
    $( chart ).easyPieChart({
      animate: 6000,
      easing: 'easeOut',
      onStep: function(from, to, percent) {
        $(this.el).find('.percent').text(Math.round(percent));
      },

        lineWidth: 5,
    });

  $( chart ).each(function(index){
    var counterIcon = $(this).data('showicon');
    // set bar color
    $(this).data('easyPieChart').options.barColor   = brColor[index];
   var track =  $(this).data('easyPieChart').options.trackColor = trcColor[index];
   var scale =  $(this).data('easyPieChart').options.scaleColor = sclColor[index];

    if( track == "" ) {
      $(this).data('easyPieChart').options.trackColor = "#f9f9f9";
    } else {
      track =  $(this).data('easyPieChart').options.trackColor = trcColor[index];
    }

    if( scale == "" ){
      $(this).data('easyPieChart').options.scaleColor = "#dfe0e0";
    }else {
      $(this).data('easyPieChart').options.scaleColor = "sclColor[index]";
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
PROGRESS BAR ANIMATION
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
COUNTER
*************************************************************/

   jQuery(document).ready(function($) {
            $('.counter').counterUp({
                delay: 80,
                time: 2000,
            });

        });  

/*************************************************************
REQUEST ANIMATION FRAME DECLARATION FOR SCROLLING
*************************************************************/

var scroll = window.requestAnimationFrame ||
             window.webkitRequestAnimationFrame ||
             window.mozRequestAnimationFrame ||
             window.msRequestAnimationFrame ||
             window.oRequestAnimationFrame ||
             function(callback){ window.setTimeout(callback, 1000/6); };

/*************************************************************
DEBOUNCED RESIZE (http://www.paulirish.com/2009/throttled-smartresize-jquery-event-handler)  
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
TABS
*************************************************************/

  var tabholder = '.toggle-tabs-holder',
    tab = '.toggle-tabs li',
    tabLine = '.toggle-tabs-line',
    activetab = 'active-tab';
  
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
TOGGLES
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
ACCORDIONS
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


/*************************************************************
FORM VALIDATION
*************************************************************/

 


  /*********** Scroll reveal **********/
  jQuery(document).ready(function(){
    window.sr = new scrollReveal(); 
  })
  



/*************************************************************
Google maps
*************************************************************/

      $(function() { 

        var $this = $(this),
            empty = "",
            // Latitude and longitude
            latitude        = $this.find('#maps-boxed').attr('map-lat'),
            longitude       = $this.find('#maps-boxed').attr('map-long'),
            // Default map options
            mapType         = $this.find('#maps-boxed').attr('map-type'),
            zoom            = $this.find('#maps-boxed').attr('map-zoom'),
            MY_MAPTYPE_ID = 'custom_style',
            // Map controll UI options
            zoomControll    = $this.find('#maps-boxed').attr('map-zoomcontroll'),
            streetview      = $this.find('#maps-boxed').attr('map-streetview'),         
            panControll     = $this.find('#maps-boxed').attr('map-pancontroll'),
            mapTypeControl  = $this.find('#maps-boxed').attr('map-maptypecontroll'),
            // Map color settings
            landscapeColor  = $this.find('#maps-boxed').attr('map-landscapecolor'),
            roadColor       = $this.find('#maps-boxed').attr('map-roadcolor'),
            waterColor      = $this.find('#maps-boxed').attr('map-watercolor'),
            poiColor        = $this.find('#maps-boxed').attr('map-poicolor'),
            lables          = $this.find('#maps-boxed').attr('map-lables'),
            // vars
            bounceTimer,
            map;
        

            
            // If params not set
               if( zoom == empty ){
                   zoom = 12;
                }
               if( mapType == empty ){
                   mapType = "roadmap";
                }
               if( latitude == empty ){
                   latitude = "40.782865,";
                }
               if( longitude == empty ){
                   longitude = "-73.965355,17z";
                }


       function initialize() {

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
                { visibility: lables }
              ]
            },
            {
              featureType: "landscape",
              stylers: [
                { visibility: "on" },
                { color: landscapeColor }
              ]
            },{
              featureType: "road",
              stylers: [
                { visibility: "on" },
                { weight: 1.1 },
                { color: roadColor }
              ]
            },{
              featureType: "water",
              stylers: [
                { visibility: "on" },
                { color: waterColor }
              ]
            },{
              featureType: "poi",
              elementType: "geometry",
              stylers: [
                { visibility: "on" },
                { color: poiColor }
              ]
            }
                    ];

          // map Options
          var mapOptions = {
            center: new google.maps.LatLng(latitude, longitude),
            zoom: parseInt(zoom),
            zoomControl: zoomControll,
            disableDefaultUI: true,
            panControl: panControll,
            streetViewControl: streetview,
            mapTypeControl: mapTypeControl,
            mapTypeControlOptions: {
              mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
            },
            mapTypeId: MY_MAPTYPE_ID
          };
  
          map = new google.maps.Map(document.getElementById('maps-boxed'),
              mapOptions);

          var styledMapOptions = {
            name: 'Custom Style'
          };

          var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);
          map.mapTypes.set(MY_MAPTYPE_ID, customMapType);
           
           setMarkers(map, beaches);
    
        }; // end init

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
        console.log(beaches);
    
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
            // add marker ( marker options )  
            var marker = new google.maps.Marker({
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


       if ( $('.google-maps').hasClass( "google-maps" ) ) {
        google.maps.event.addDomListener(window, 'load', initialize);

       }else {
        return false;
       }

      }); // end anon func


/************************************
 *********** Button styles **********
/************************************/

jQuery(document).ready(function($){
//Values stored in array

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
$('.ps-btn').each(function(){
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
$('.ps-btn').each(function(index){

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

      $(this).attr('style', 'background-color:' + buttonBgHoverColor[index] + '!important; '
       + 'border-color:' + buttonHoverBorderColor[index] + '!important; ' + 'color:' + buttonHoverColor[index] + '!important; ' );
      // icon color
      $(this).find('i').attr('style', 'color:' + buttonHoverIconColor[index] + '!important;' );

    // Mouse leave
    }, function(){
      
  $(this).attr('style',
     'border-color:' + buttonBorderColor[index] + '!important; '
      + 'background-color:' + buttonBgColor[index] + '!important; '
       + 'color:' + buttonColor[index] + '!important; ');
  // Icon color
  $(this).find('i').attr('style', 'color:' + buttonIconColor[index] + '!important;');
    
    }); // end hover
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

})

 }); // End document.ready

/*===========================
  Related post slider
 ===========================*/







$(document).ready(function(){

  var ww = $(window).width();
      console.log(ww);
     var relatedProjectsSlider = new Swiper ('.related-projects-slide', {
        direction: 'horizontal',
        loop: false,
        touchEventsTarget: 'container',
        nextButton: '.swiper-related-next',
        prevButton: '.swiper-related-prev',
        spaceBetween: 30,
        centeredSlides: false,
        slidesPerView: slidesPrView(),
        touchRatio: 0.6,
        slideToClickedSlide: true,
    });
function slidesPrView() {
    var three = 3,
        one = 1;
          
    if( ww < 767  ) {
        return one;
      }else {
       return three;
      }
} // end slidesPrView

}); // end anon
 



/*===========================
  Partners 
 ===========================*/

