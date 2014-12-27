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


//*************************************************
//****** Start Isotope functions blog masonry *****
//*************************************************

//Isotope function
jQuery( function($) {
//Isotope masonry
$( function() {

    var $container = $('.isotope');
    $container.isotope({
      itemSelector: '.item',
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
$('.item').each(function(i) {
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
  var $item = $('<div class="item">'+

      '<img src="http://placehold.it/300x300" style="max-height:400px; width:100%;"  alt="...">' +
    '<h2>Article number 1</h2>' + '<p>' + 

      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' +


    '</p>' +

    '<p>' +
            '<span class="glyphicon glyphicon-calendar">' +
                'On:December 21, 2014' +
            '</span>' +

            '<span class="glyphicon glyphicon-heart-empty">' + '120' +
            '</span>' +
        '</p>'






     +'</div>'); 

  // add width and height class
  var wRand = Math.random();
  var hRand = Math.random();
  var widthClass = wRand > 0.85 ? 'width3' : wRand > 0.7 ? 'width2' : '';
  var heightClass = hRand > 0.85 ? 'height3' : hRand > 0.5 ? 'height2' : '';
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
}); // End isotope function
//End isotope functions


