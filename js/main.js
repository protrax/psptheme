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

})

//////// TODO/////////////

  // Fix math for loading item layout
  // Fix flickering (bug) when filtering data-categories
  // Do other changes if needed
  // Fix loading bugs
  // Make animation section dynamic for php vars
  // fix smoother animations
  // Remove classes used for load


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
    console.lof(filters);
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

  // Load time for animations
      
    // Container
  var animationQueueBox = 'slide-animation-box';
    // Heading
  var animationQueueHeader = 'slide-animation-first';
    // Main text
  var animationQueueContent = 'slide-animation-second';
    //Buttons
  var animationQueueButtons = 'slide-animation-third';

  // Animation
      // Animations from animate.css

    // Container
 var animationEffectBox     = 'fadeIn';
    // Heading
 var animationEffectHeader  = 'fadeInDown';
    // Main text
 var animationEffectContent = 'fadeInUp';
    //Buttons
 var animationEffectButtons = 'fadeInUp';

 // Load slider

  var pspSlider = $('.swiper-container').swiper({
    //Slider options
    mode:'horizontal',
    loop: true,
    autoplay: 4800,
    speed: 1200,
    // Slide out 
      onSlideChangeStart: function() {
        $('.slider-content-center').hide().removeClass( animationQueueBox   + ' ' +  animationEffectBox );
        $('.slider-content-center h2').removeClass( animationQueueHeader    + ' ' +  animationEffectHeader );
        $('.slider-content-center p').removeClass( animationQueueContent    + ' ' +  animationEffectContent );
        $('.button-container').removeClass( animationQueueButtons           + ' ' +  animationEffectButtons );
      },
      // Slide in
      onSlideChangeEnd: function() {
        $('.slider-content-center').show().addClass( animationQueueBox  + ' ' + animationEffectBox );
        $('.slider-content-center h2').addClass( animationQueueHeader   + ' ' + animationEffectHeader );
        $('.slider-content-center p').addClass( animationQueueContent   + ' ' + animationEffectContent );
        $('.button-container').addClass( animationQueueButtons          + ' ' + animationEffectButtons );
      },
      // First init of slider
      onFirstInit: function() {
        $('.slider-content-center').show().addClass( animationQueueBox  + ' ' + animationEffectBox );
        $('.slider-content-center h2').addClass( animationQueueHeader   + ' ' + animationEffectHeader );
        $('.slider-content-center p').addClass( animationQueueContent   + ' ' + animationEffectContent );
        $('.button-container').addClass( animationQueueButtons          + ' ' + animationEffectButtons );
      }

  });

// Navigation

// Navigate slideshow
$('.arrow-left').on('click', function(e){
    e.preventDefault();
    pspSlider.swipePrev();
  });
$('.arrow-right').on('click', function(e){
    e.preventDefault();
    pspSlider.swipeNext();
  });
// Navigate slideshow label
$('.arrow-left').on('hover', function(e){
    e.preventDefault();
    pspSlider.swipePrev();
  });
  
  $('.arrow-left').hover(function(){
    $(this).find('span').show().addClass('animated flipInX');
  }, function(){
    $(this).find('span').hide();
  });

  $('.arrow-right').hover(function(){
    $(this).find('span').show().addClass('animated flipInX');
  }, function(){
    $(this).find('span').hide();
  });
});


/*************************************************************
Parallax
*************************************************************/
  
jQuery(document).ready(function($){
      skrollr.init({
        forceHeight: false
      });
});

/*************************************************************
PROGRESS PIE ANIMATION
*************************************************************/
  



jQuery(function($) {
 
  $('.chart').waypoint(function() {
    
    $('.chart').easyPieChart({
      animate: 6000,
      easing: 'easeOut',
      onStep: function(from, to, percent) {
        $(this.el).find('.percent').text(Math.round(percent));
      },
        trackColor: '#eee',
        barColor: "#f78e20",
        scaleColor: "#4F5050",  
    });

  },

  {
    offset: '100%',
    triggerOnce: true
  });
});



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