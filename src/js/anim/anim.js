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
      )
      .to(
        section.querySelector('.price__form'),
        { opacity: 1, translateY: 0 },
        0.5
      );
  });

  gsap.to('header', { translateY: 0 });
  gsap.to(
    '.header__logo-wrap, .header__item, .header__socials, .header__hamburger',
    { opacity: 1, stagger: 0.1 },
    0.5
  );
  gsap.to('.header', { '--scaleX': 1 }, 1);

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

  if (document.querySelectorAll('.advantages__slide').length) {
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
  }

  if (document.querySelectorAll('.articles .blog-card').length) {
    mm.add('(max-width: 768px)', () => {
      document.querySelectorAll('.articles .blog-card').forEach(item => {
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
          })
          .to('.articles .btn', {
            opacity: 1,
          });
      });
    });

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
            start: 'top 70%',
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
  } else if (document.querySelector('.services-hero')) {
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

    gsap
      .timeline({
        scrollTrigger: {
          trigger: '.work',
          once: true,
          start: 'top 70%',
        },
      })
      .to('.work', {
        '--clipPath': 'inset(0% 0% 0% 0%)',
      });

    if (document.querySelectorAll('.work__item').length) {
      document.querySelectorAll('.work__item').forEach(item => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: item,
              once: true,
              start: 'top 70%',
            },
          })
          .to(item, {
            translateY: 0,
            opacity: 1,
          })
          .to(
            item.querySelector('.item-work__number'),
            {
              opacity: 1,
              duration: 0.5,
            },
            0.5
          )
          .to(
            item,
            {
              '--scaleY': 1,
            },
            1
          );
      });
    }

    if (document.querySelectorAll('.suitability-card').length) {
      mm.add('(max-width: 768px)', () => {
        document
          .querySelectorAll('.suitability-card, .suitability__btn')
          .forEach(item => {
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
                '--scaleX': 1,
              });
          });
      });

      mm.add('(min-width: 768px)', () => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: '.suitability',
              once: true,
              start: 'top 70%',
            },
          })
          .to('.suitability-card, .suitability__btn', {
            opacity: 1,
            '--scaleX': 1,
            stagger: 0.3,
          });
      });
    }

    if (document.querySelectorAll('.accordion-faq__item').length) {
      document.querySelectorAll('.accordion-faq__item').forEach(item => {
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

    if (document.querySelectorAll('.other-services__item').length) {
      mm.add('(max-width: 768px)', () => {
        document.querySelectorAll('.other-services__item').forEach(item => {
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
      });

      mm.add('(min-width: 768px)', () => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: '.other-services',
              once: true,
              start: 'top 70%',
            },
          })
          .to('.other-services__item', { opacity: 1, stagger: 0.3 });
      });
    }
  } else if (document.querySelector('.blog')) {
    gsap.to('.blog__breadcrumbs', {
      opacity: 1,
    });
    gsap.to(
      '.blog',
      {
        '--scaleX': 1,
        '--clipPath': 'inset(0% 0% 0% 0%)',
      },
      0
    );
    gsap.to(
      '.blog__title',
      {
        opacity: 1,
      },
      0.5
    );

    gsap.to(
      '.aside-blog__title .char',
      { opacity: 1, stagger: 0.02, duration: 0.3 },
      1.5
    );
    gsap.to(
      '.blog__filters-btn, .blog__filters-row',
      { opacity: 1, stagger: 0.3 },
      1.5
    );
    gsap.to('.aside-blog__list', { opacity: 1 }, 1.5);
    gsap.to('.blog', { '--x': 1, '--opacity': 1 }, 1.5);

    if (document.querySelectorAll('.blog__item').length) {
      setTimeout(() => {
        document.querySelectorAll('.blog__item').forEach(item => {
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
      }, 1000);
    }
  } else if (document.querySelector('.blog-chapter-hero')) {
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

    if (document.querySelectorAll('.blog-chapter [data-animate]').length) {
      document
        .querySelectorAll('.blog-chapter [data-animate]')
        .forEach(item => {
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
  }
});
