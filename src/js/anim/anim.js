import gsap from 'gsap';
import splt from 'spltjs';
import { ScrollTrigger } from 'gsap/all';

gsap.defaults({ duration: 1 });
gsap.registerPlugin(ScrollTrigger);

splt({});

let mm = gsap.matchMedia();

window.addEventListener('load', function () {
  const heroTl = gsap.timeline();
  const numbersTl = gsap.timeline();

  document.querySelectorAll('section').forEach(section => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 60%',
          once: true,
        },
      })
      .to(section, { opacity: 1, translateY: 0 })
      .to(section.querySelector('.title-wrap__svg'), { width: '49.1rem' })
      .to(
        section.querySelectorAll(
          '.title-wrap__title, .section-head .btn , .section-head .controls'
        ),
        { translateY: 0, opacity: 1 },
        0
      )
      .to(
        section.querySelector('.accordion'),
        {
          '--scaleX': 1,
          '--opacity': 1,
        },
        0
      )
      .to(
        section.querySelectorAll('.accordion__number'),
        { translateY: 0, opacity: 1 },
        0
      )
      .to(
        section.querySelectorAll('.accordion__title .char'),
        { opacity: 1, stagger: 0.02, duration: 0.3 },
        0.5
      )
      .to(
        section.querySelectorAll('.accordion__icon'),
        { opacity: 1, stagger: 0.3 },
        0.5
      )

      .to(
        section.querySelector('.request__marquee'),
        {
          '--width': '100%',
          opacity: 1,
        },
        0
      )
      .to(
        section.querySelectorAll('.request .field'),
        {
          '--scaleX': 1,
          opacity: 1,
        },
        0.5
      )
      .to(
        section.querySelectorAll('.request__btn, .request__txt .char'),
        {
          opacity: 1,
          stagger: 0.02,
          duration: 0.3,
        },
        1.5
      )
      .to(
        section.querySelector('.reviews__slider'),
        {
          opacity: 1,
        },
        0.5
      )
      .to(
        section.querySelector('.pagination'),
        {
          opacity: 1,
        },
        1
      )
      .to(
        section.querySelectorAll('.clients-card__inner'),
        {
          opacity: 1,
          stagger: 0.3,
        },
        0.5
      )
      .to(
        section.querySelectorAll('.slide-docs'),
        {
          opacity: 1,
          stagger: 0.3,
        },
        0.5
      );
  });

  gsap.to('header', { translateY: 0 });
  gsap.to(
    '.header__logo-wrap, .header__item, .header__hamburger',
    { opacity: 1, stagger: 0.1 },
    0.5
  );
  gsap.to('.header', { '--scaleX': 1 }, 1);

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

    mm.add('(max-width: 768px)', () => {
      document.querySelectorAll('.steps__item').forEach(item => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: item,
              once: true,
            },
          })
          .to(item, { '--x': 1 })
          .to(item, { '--y': 1 }, 2)
          .to(item, { '--opacity': 1 })
          .to(
            item,
            {
              '--scaleY': 1,
              '--scaleX': 1,
              stagger: 0.5,
              duration: 0.5,
            },
            1
          )
          .to(
            item.querySelector('.item-steps__inner'),
            {
              opacity: 1,
              stagger: 0.5,
              '--scaleX': 1,
              '--scaleY': 1,
              duration: 0.5,
            },
            1
          );
      });
    });

    mm.add('(min-width: 768px)', () => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: '.steps',
            once: true,
          },
        })
        .to(
          '.steps__item',
          {
            '--y': 1,
          },
          0.5
        )
        .to(
          '.steps__item',
          {
            '--x': 1,
          },
          1.5
        )
        .to(
          '.steps__item',
          {
            '--opacity': 1,
          },
          2.5
        )
        .to(
          '.item-steps__inner',
          {
            opacity: 1,
            stagger: 0.5,
            '--scaleX': 1,
            '--scaleY': 1,
            duration: 0.5,
          },
          0
        );
      return () => {};
    });

    document.querySelectorAll('.advantages__slide').forEach(item => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: item,
            once: true,
            start: 'top 70%',
          },
        })
        .to(item.querySelector('.item-advantages__inner'), {
          '--scaleY': 1,
          opacity: 1,
        });
    });
  } else if (document.querySelector('.contacts')) {
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
  } else if (document.querySelector('.about-hero')) {
    gsap.to(
      '.about-hero__breadcrumbs, .about-hero__title, .about-hero__txt, .about-hero__btn',
      {
        opacity: 1,
        translateY: 0,
        stagger: 0.3,
      }
    );

    gsap
      .timeline({
        scrollTrigger: {
          trigger: '.about__content',
          start: 'top 80%',
          once: true,
        },
      })
      .to(
        '.about__content .about__text',
        { opacity: 1, translateY: 0, stagger: 0.1 },
        0.5
      );

    gsap
      .timeline({
        scrollTrigger: {
          trigger: '.about__info',
          start: 'top 80%',
          once: true,
        },
      })
      .to('.about__subtitle, .about__info .about__text-wrap', {
        opacity: 1,
        translateY: 0,
        stagger: 0.3,
      });
  }
});
