// $(document).ready(function(){
//     $('.bannerContainer').slick({
//         autoplay: true,
//         autoplaySpeed: 3000,
//         arrows: false,
//         dots: false,
//         fade: true,
//     });

        
// });






const contactLink = document.querySelector('.contactLink');
const linkTocontactpage = document.querySelector('.linkTocontactpage');
const closeIcon = document.querySelector('.closeIcon');

contactLink.addEventListener('click', () => {
    linkTocontactpage.classList.add('is-visible');
});

closeIcon.addEventListener('click', () => {
    linkTocontactpage.classList.remove('is-visible');
});

const sideBar = document.querySelector('.link');
const showMenuIcon = document.querySelector('.bar-icon');
const closemenu = document.querySelector('.closeResponsiveMenu');


showMenuIcon.addEventListener('click' , ()=>{
    sideBar.classList.add('.show');
});

closemenu.addEventListener('click', ()=>{
    sideBar.classList.remove('.show');
})



// accordion

// document.addEventListener("DOMContentLoaded", function() {
//     var accordionItems = document.querySelectorAll(".accordion-item");
  
//     accordionItems.forEach(function(item) {
//       var header = item.querySelector(".accordion-header");
//       var icon = header.querySelector("i");
  
//       item.addEventListener("click", function() {
        
//         this.classList.add("active");
  
//         Toggle icon classes for open/close

//         if (icon.classList.contains("fa-plus")) {
//           icon.classList.remove("fa-plus");
//           icon.classList.add("fa-minus");
//         } else {
//           icon.classList.add("fa-plus");
//           icon.classList.remove("fa-minus");
//         }

       


  
//         Close other accordion items

//         accordionItems.forEach(function(otherItem) {
//           if (otherItem !== item) {
//             otherItem.classList.remove("active");
//             var otherIcon = otherItem.querySelector(".accordion-header i");
//             if (otherIcon.classList.contains("fa-plus")) {
//               otherIcon.classList.add("fa-plus");
//               otherIcon.classList.remove("fa-minus");

//             }
//           }
//         });
//       });

      
//     });
//   });


document.addEventListener("DOMContentLoaded", function() {
  var accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach(function(item) {
      var header = item.querySelector(".accordion-header");
      var icon = header.querySelector("i");

      item.addEventListener("click", function() {
        
          this.classList.add("active");

          
          if (icon.classList.contains("fa-plus")) {
              icon.classList.remove("fa-plus");
              icon.classList.add("fa-minus");
          } else {
              icon.classList.remove("fa-minus");
              icon.classList.add("fa-plus");
          }

          
          accordionItems.forEach(function(otherItem) {
              if (otherItem !== item) {
                  otherItem.classList.remove("active");
                  var otherIcon = otherItem.querySelector(".accordion-header i");
                  if (otherIcon.classList.contains("fa-minus")) {
                      otherIcon.classList.remove("fa-minus");
                      otherIcon.classList.add("fa-plus");
                  }
              }
          });
      });


  });
});



$(document).ready(function(){
    $('#slider1').slick({
      autoplay:true,  
      centerMode: true,
      centerPadding: '60px', 
      slidesToShow: 3, 
      responsive: [
        {
          breakpoint: 768,
          settings: {
            autoplay:true,
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
    });

    $('#slider1').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        $('.slick-slide').removeClass('zoomed zoomed-prev zoomed-next'); 
        $('.slick-slide[data-slick-index="' + nextSlide + '"]').addClass('zoomed'); 
        $('.slick-slide[data-slick-index="' + (nextSlide - 1) + '"]').addClass('zoomed-prev'); 
        $('.slick-slide[data-slick-index="' + (nextSlide + 1) + '"]').addClass('zoomed-next'); 
      });

      $('.bannerContainer').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        centerMode: false,
        dots: false,
        fade: true,
    });

    // $('.team-slider').slick({
    //   dots: true,
    //   infinite: true,
    //   speed: 300,
    //   slidesToShow: 1,
    // });

    $('.team-slider').slick({
      dots: true,
      infinite: true,
      speed: 300,
      arrow: true,
      slidesToShow: 1, // Change this value to the number of slides you want to show at a time
      slidesToScroll: 1 // Change this value to the number of slides you want to scroll at a time
  });

//   $(".ab-phone-icon").hover(function() {
//     $(".ab-phone-number").toggle(); // Toggle visibility of phone number
// });

});


// $(document).ready(function() {
//   $(".ab-phone-icon").hover(function() {
//       $(".ab-phone-number").toggle(); // Toggle visibility of phone number
//   });
// });