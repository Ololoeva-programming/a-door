  $('.owl-ca1').owlCarousel({
    center: true,
    items:2,
    loop:true,
    margin:10,
    dots: false,
    responsive:{
      0:{ 
        items:2
      },
      600:{
        items:2
      },
      768:{
        items:4
      },
      1440:{
        items: 5
      }
    }
});


  $(".owl-ca2").owlCarousel({
    items: 1,
    loop:true,
    nav: true,
    dots: false
});
   $(".owl-ca3").owlCarousel({
    loop:true,
    items: 3,
    nav: true,
    dots: false,
    margin: 10,
    responsive:{
        0:{ 
          items: 1
        },
        600:{
            items: 1
        },
        768:
        {
          items: 2.5
        },
        1440:
        {
          items: 2.5
        }
    }

  });
$('.owl-ca3').on('changed.owl.carousel', function(e) {   
    owl_carousel_page_numbers3(e);   
});
function owl_carousel_page_numbers3(e){
    var items_per_page = e.page.size;
    if (items_per_page > 1){
        var min_item_index  = e.item.index,
            max_item_index  = min_item_index + items_per_page,
            display_text    = min_item_index - 1;
            rrr = e.item.count - 1;
        if (display_text > 0) {
      
           var display_text = min_item_index - 2;
           if (display_text==0){
            display_text= max_item_index+1;
           }
        } else {
      
           var display_text = 1;
        };

    } else {

       var display_text = (e.item.index + 1);
    };   
    $('#info3').html( '<span class="active-slide">'  + display_text + '</span>' + '<span class="no-active">' + '/ ' + (rrr + 1) + '</span>');
}

$("#navToggle").click(function() {
    $(this).toggleClass("active");
    $(".overlay").toggleClass("open");
    // this line ▼ prevents content scroll-behind
    $("body").toggleClass("locked");
});
$('.overlay').click(function() {
    $(this).removeClass('open');
    $('.navBurger').removeClass('active');
});

