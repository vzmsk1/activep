import gsap from 'gsap';
import SplitType from 'split-type';
import { ScrollTrigger } from 'gsap/all';

gsap.defaults({ duration: 1 });
gsap.registerPlugin(ScrollTrigger);

const text = new SplitType('.splt');

let mm = gsap.matchMedia();

window.addEventListener('load', function () {
  document.documentElement.classList.add('_page-loaded');

  const heroTl = gsap.timeline();
  const numbersTl = gsap.timeline();

  gsap.to('header', { translateY: 0 });
  gsap.to(
    '.header__logo-wrap, .header__item, .header__socials, .header__hamburger',
    { opacity: 1, stagger: 0.1 },
    0.5
  );
  gsap.to('.header', { '--scaleX': 1 }, 1);

  if (document.querySelectorAll('.articles .blog-card').length) {
    mm.add('(min-width: 768px)', () => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: '.articles',
            once: true,
            start: 'top 70%',
          },
        })
        .to('.articles .blog-card, .btn', {
          opacity: 1,
          stagger: 0.3,
        });
    });
  }

  if (document.querySelector('.head-blog')) {
    gsap.to('.head-blog__breadcrumbs', {
      opacity: 1,
    });
    gsap.to(
      '.head-blog',
      {
        '--scaleX': 1,
        '--clipPath': 'inset(0% 0% 0% 0%)',
      },
      0
    );
    gsap.to(
      '.head-blog__title',
      {
        opacity: 1,
      },
      0.5
    );
  }

  if (document.querySelectorAll('[data-gsap-fadein]').length) {
    document.querySelectorAll('[data-gsap-fadein]').forEach(item => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: item,
            once: true,
            start: 'top 70%',
          },
        })
        .to(item, {
          opacity: 1,
        });
    });
  }

  if (document.querySelectorAll('[data-gsap-y]').length) {
    document.querySelectorAll('[data-gsap-y]').forEach(item => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: item,
            once: true,
            start: 'top 70%',
          },
        })
        .to(item, {
          opacity: 1,
          translateY: 0,
        });
    });
  }

  if (document.querySelectorAll('[data-gsap-clx]').length) {
    document.querySelectorAll('[data-gsap-clx]').forEach(item => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: item,
            once: true,
            start: 'top 70%',
          },
        })
        .to(item, {
          '--clx': 'inset(0% 0% 0% 0%)',
        });
    });
  }

  if (document.querySelectorAll('[data-gsap-cly]').length) {
    document.querySelectorAll('[data-gsap-cly]').forEach(item => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: item,
            once: true,
            start: 'top 70%',
          },
        })
        .to(item, {
          '--cly': 'inset(0% 0% 0% 0%)',
        });
    });
  }

  if (document.querySelector('.hero')) {
    heroTl.to(
      '.hero__title-txt',
      { opacity: 1, marginTop: 0, stagger: 0.1 },
      1
    );
    heroTl.to(
      '.hero__text, .hero__btn',
      {
        opacity: 1,
        translateY: 0,
        stagger: 0.3,
      },
      1.5
    );

    numbersTl.to('.numbers', { '--scaleX': 1, '--scaleX2': 1 }, 2);
    numbersTl.to(
      '.numbers__item',
      { opacity: 1, '--scaleY': 1, stagger: 0.3 },
      2
    );
  }
  if (document.querySelector('.contacts')) {
    gsap.to('.contacts__heading, .contacts__group', {
      opacity: 1,
      translateY: 0,
      stagger: 0.3,
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: '.contacts__content',
          once: true,
          start: 'top 90%',
        },
      })
      .to('.contacts__title .char', {
        opacity: 1,
        stagger: 0.02,
      })
      .to(
        '.contacts__item-content',
        {
          opacity: 1,
          stagger: 0.1,
        },
        0.5
      );

    gsap
      .timeline({
        scrollTrigger: {
          trigger: '.contacts__body',
          once: true,
          start: 'top 80%',
        },
      })
      .to('.contacts__body', {
        opacity: 1,
        translateY: 0,
      })
      .to(
        '.contacts__body',
        {
          '--clipPath': 'inset(0% 0% 0% 0%)',
        },
        0.5
      );
  }
  if (document.querySelector('.about-hero')) {
    gsap.to(
      '.about-hero__breadcrumbs, .about-hero__title, .about-hero__txt, .about-hero__btn',
      {
        opacity: 1,
        translateY: 0,
        stagger: 0.3,
      }
    );
  }
  if (document.querySelector('.services-hero')) {
    gsap.to('.services-hero__breadcrumbs', {
      opacity: 1,
    });
    gsap.to(
      '.services-hero, .services-hero__image-wrap',
      {
        '--scaleX': 1,
        opacity: 1,
        stagger: 0.5,
        '--y': 0,
        '--opacity': 1,
      },
      0
    );
    gsap.to(
      '.services-hero__title, .services-hero__txt, .services-hero__btn',
      {
        translateX: 0,
        translateY: 0,
        opacity: 1,
        stagger: 0.4,
        duration: 0.5,
      },
      0.5
    );
    gsap.to(
      '.services-hero',
      {
        '--clipPath': 'inset(0% 0% 0% 0%)',
      },
      0.8
    );
    gsap.to(
      '.services-hero__image',
      {
        opacity: 1,
        translateY: 0,
      },
      0.8
    );
  }
  if (document.querySelector('.blog-chapter-hero')) {
    gsap.to(
      '.blog-chapter-hero__breadcrumbs',
      {
        opacity: 1,
      },
      0.5
    );
    gsap.to(
      '.blog-chapter-hero__image-wrap',
      {
        opacity: 1,
      },
      0.5
    );
    gsap.to(
      '.blog-chapter-hero__content',
      {
        opacity: 1,
        translateY: 0,
      },
      0.5
    );
  }
});
