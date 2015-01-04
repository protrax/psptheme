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
jQuery( function($) {
//Isotope masonry
$( function() {

    var $container = $('.isotope');
    $container.isotope({
      itemSelector: '.iso-item',
      layoutMode: 'fitRows',
      masonry: {
        columnWidth: '.grid-sizer'
      }
});
//Isotope apend on click
  $('#append').on( 'click', function() {
    // create new item elements
    var $elems = getItemElement().add( getItemElement() ).add( getItemElement() );
    // append elements to container
    $container.append( $elems )
      // add and lay out newly appended elements
      .isotope( 'appended', $elems);
  });

  // Isotope animation function
// Dynamic animation class variable
$animationclass = 'iso-animate ' + 'flipInX';
// Isotope Animation function
jQuery(function($) {
$('.iso-item').each(function(i) {
  $(this).hide();
  $(this).show( 100 ).delay((i++) * 100).queue(function( next ){
        $(this).addClass( $animationclass ); //add a custom class to isotope loading
        $(this).dequeue();
        $(this).finish();
    });
    });
  }); // End Isotope animation function

  
}); // End isotope masonry function

//Load more and generate it
// make <div class="item width# height#" />
function getItemElement() {
  //Append more divs
  var $item = $(
    '<div class="iso-item blog-masonry">'+
    '<div class="thumbnail">' +
    '<div class="caption">' +
    '<div class="col-md-12 ">' +
    '<p class="pull-right">' +
    'Posted by:' +
     '<a href="#">' +
     'Admin' +
     '</a>' +
     '</p>' +
    '</div>' +
    '<h3>' +
    'Article number 1' +
    '</h3>' +
      '<p>' +
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' + 
      '</p>' +
    '<hr>' +
    '<p>' +
            '<span class="glyphicon glyphicon-calendar">' +
                'On:December 21, 2014' +
            '</span>' +

            '<span class="glyphicon glyphicon-heart-empty">' +
                'Comments: 120' +
            '</span>' +
        '</p>' +
        '<p>' +
        '<a href="#" class="btn btn-primary" role="button">' +
        'Button' +
        '</a>' + 
        '<a href="#" class="btn btn-default" role="button">' +
        'Button' + 
        '</a>' +
        '</p>' +
        '</div>' +
        '</div>'

     +'</div>'); 

  // add width and height class
  var wRand = Math.random();
  var hRand = Math.random();
  var widthClass = wRand > 0.85 ? 'col-md-6' : wRand > 0.7 ? 'col-md-6' : ''; // TODO fix math
  var heightClass = hRand > 0.85 ? 'col-md-3' : hRand > 0.5 ? 'col-md-3' : ''; // TODO fix math
  //Append styles for layout and load animation for the items
  $item.addClass( widthClass ).addClass( heightClass ).addClass('loading');
  $('.loading').each(function(i) {
  $(this).hide();
  $(this).show( 100 ).delay((i++) * 100).queue(function(  ){
        $(this).addClass( $animationclass ); //add a custom class to isotope loading
        $(this).removeClass('loading');
        $(this).dequeue();
        $(this).finish();
    });
  });
  return $item;
}

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
  });

// End filder data groups


}); // End isotope function
//End isotope functions




//////// TODO/////////////

  // Fix flickering (bug) when filtering data-categories
  // Do other changes if needed
  // Fix loading bugs
  // Make animation section dynamic for php vars
  // fix smoother animations
  // Remove classes used for load


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
  $(document).scroll(function(){

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
          if($(window).width() > 767) {
            $(this).addClass('open');
            $('.dropdown-menu').addClass('menu-animation zoomIn');
          }
         
    }, function() {
      if($(window).width() > 767) {
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




