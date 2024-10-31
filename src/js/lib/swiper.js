import Swiper from 'swiper';
import 'swiper/css';
import {
  Navigation,
  Pagination,
  EffectFade,
  Autoplay,
  Controller,
} from 'swiper/modules';
import { remToPx } from '../utils/utils';

const breakpoint = window.matchMedia('(min-width:768px)');

let advantagesSwiper;
let suitabilitySwiper;

if (document.querySelector('.reviews__slider')) {
  const slider = new Swiper('.reviews__slider', {
    modules: [Navigation, Controller, Pagination],
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
    on: {
      click: (swiper, e) => {
        if (
          e.target.closest('.reviews-card__image-wrap') &&
          document.querySelector('.popup-slider_reviews')
        ) {
          document
            .querySelector('.popup-slider_reviews')
            .classList.add('_is-active');
          document.documentElement.classList.add('_is-locked');
        }
      },
    },
  });

  if (document.querySelector('.popup-slider_reviews .swiper')) {
    const popupSlider = new Swiper('.popup-slider_reviews .swiper', {
      modules: [Navigation, Controller],
      speed: 800,
      rewind: true,
      navigation: {
        prevEl: '.popup-slider_reviews  .controls__btn_prev',
        nextEl: '.popup-slider_reviews  .controls__btn_next',
      },
    });

    document
      .querySelector('.popup-slider_reviews')
      .addEventListener('click', function (e) {
        if (
          !e.target.closest(
            '.popup-slider_reviews .popup-slider__image-wrap'
          ) &&
          !e.target.closest('.popup-slider_reviews .controls__btn')
        ) {
          document
            .querySelector('.popup-slider_reviews')
            .classList.remove('_is-active');
          document.documentElement.classList.remove('_is-locked');
        }
      });

    slider.controller.control = popupSlider;
    popupSlider.controller.control = slider;
  }
}

if (document.querySelector('.clients__slider')) {
  new Swiper('.clients__slider', {
    modules: [Navigation, Pagination],
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
  });
}

if (document.querySelector('.docs__slider')) {
  const slider = new Swiper('.docs__slider', {
    modules: [Navigation, Controller, Pagination],
    speed: 800,
    rewind: true,
    slidesPerView: 'auto',
    slideToClickedSlide: true,
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
    on: {
      click: (swiper, e) => {
        if (
          e.target.closest('.slide-docs__image-wrap') &&
          document.querySelector('.popup-slider_docs')
        ) {
          document
            .querySelector('.popup-slider_docs')
            .classList.add('_is-active');
          document.documentElement.classList.add('_is-locked');
        }
      },
    },
  });

  if (document.querySelector('.popup-slider_docs .swiper')) {
    const popupSlider = new Swiper('.popup-slider_docs .swiper', {
      modules: [Navigation, Controller],
      speed: 800,
      rewind: true,
      navigation: {
        prevEl: '.popup-slider_docs  .controls__btn_prev',
        nextEl: '.popup-slider_docs  .controls__btn_next',
      },
    });

    document
      .querySelector('.popup-slider_docs')
      .addEventListener('click', function (e) {
        if (
          !e.target.closest('.popup-slider_docs .popup-slider__image-wrap') &&
          !e.target.closest('.popup-slider_docs .controls__btn')
        ) {
          document
            .querySelector('.popup-slider_docs')
            .classList.remove('_is-active');
          document.documentElement.classList.remove('_is-locked');
        }
      });

    slider.controller.control = popupSlider;
    popupSlider.controller.control = slider;
  }
}

if (document.querySelector('.popup-slider__slider')) {
  new Swiper('.popup-slider__slider', {
    modules: [Navigation],
    speed: 800,
    loop: true,
    autoHeight: true,
    centeredSlides: true,
    centeredSlidesBounds: true,
    // navigation: {
    //   prevEl: '.docs .controls__btn_prev',
    //   nextEl: '.docs .controls__btn_next',
    // },
  });
}

function enableSliderOnResize() {
  if (document.querySelector('.advantages__slider')) {
    advantagesSwiper = new Swiper('.advantages__slider', {
      modules: [],
      speed: 800,
      loop: true,
      slidesPerView: 'auto',
      spaceBetween: remToPx(4),
    });
  }
  if (document.querySelector('.suitability__slider')) {
    suitabilitySwiper = new Swiper('.suitability__slider', {
      modules: [],
      speed: 800,
      loop: true,
      slidesPerView: 'auto',
      spaceBetween: remToPx(4),
    });
  }
}

function breakpointChecker() {
  if (breakpoint.matches === true) {
    if (advantagesSwiper !== undefined) advantagesSwiper.destroy(true, true);
    if (suitabilitySwiper !== undefined) suitabilitySwiper.destroy(true, true);
    return;
  } else if (breakpoint.matches === false) {
    return enableSliderOnResize();
  }
}

breakpoint.addListener(breakpointChecker);

breakpointChecker();
