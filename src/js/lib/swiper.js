import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper/modules';
import { remToPx } from '../utils/utils';

if (document.querySelector('.reviews__slider')) {
  new Swiper('.reviews__slider', {
    modules: [Navigation, Autoplay, Pagination],
    speed: 800,
    loop: true,
    spaceBetween: 90,
    navigation: {
      prevEl: '.reviews .controls__btn_prev',
      nextEl: '.reviews .controls__btn_next',
    },
    pagination: {
      el: '.reviews .pagination',
      type: 'bullets',
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 'auto',
      },
    },
    // autoplay: {
    //   delay: 3500,
    //   disableOnInteraction: false,
    // },
  });
}

if (document.querySelector('.clients__slider')) {
  new Swiper('.clients__slider', {
    modules: [Navigation, Autoplay, Pagination],
    speed: 800,
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: remToPx(5),
    navigation: {
      prevEl: '.clients .controls__btn_prev',
      nextEl: '.clients .controls__btn_next',
    },
    pagination: {
      el: '.clients .pagination',
      type: 'bullets',
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 4,
        spaceBetween: remToPx(9),
      },
    },
    // autoplay: {
    //   delay: 3500,
    //   disableOnInteraction: false,
    // },
  });
}

if (document.querySelector('.docs__slider')) {
  new Swiper('.docs__slider', {
    modules: [Navigation, Autoplay, Pagination],
    speed: 800,
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: remToPx(8),
    navigation: {
      prevEl: '.docs .controls__btn_prev',
      nextEl: '.docs .controls__btn_next',
    },
    pagination: {
      el: '.docs .pagination',
      type: 'bullets',
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 4,
        spaceBetween: remToPx(15.4),
      },
    },
    // autoplay: {
    //   delay: 3500,
    //   disableOnInteraction: false,
    // },
  });
}
