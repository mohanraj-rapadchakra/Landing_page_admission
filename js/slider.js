var swiper = new Swiper(".mySwiper", {

    slidesPerView: 3,

    spaceBetween: 25,

    pagination: {

      el: ".swiper-pagination",

      clickable: true,

    },

    navigation: {

      nextEl: ".swiper-button-next",

      prevEl: ".swiper-button-prev",

    },

    breakpoints:{

        0: {

            slidesPerView: 1,

        },

        520: {

            slidesPerView: 2,

        },

        1025: {

            slidesPerView: 3,

        },

    },

  });

var swiper = new Swiper(".mySwiperaward", {

    slidesPerView: 3,

    spaceBetween: 25,

    pagination: {

      el: ".swiper-pagination",

      clickable: true,

    },

    navigation: {

      nextEl: ".swiper-button-next",

      prevEl: ".swiper-button-prev",

    },

    breakpoints:{

        0: {

            slidesPerView: 1,

        },

        520: {

            slidesPerView: 2,

        },

        1025: {

            slidesPerView: 4,

        },

    },

  });