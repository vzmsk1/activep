import { removeClasses } from './utils';

window.addEventListener('load', function () {
  if (document.querySelector('.hamburger')) {
    document.querySelector('.hamburger').addEventListener('click', function () {
      document.documentElement.classList.toggle('_show-menu');
    });
  }

  if (document.querySelectorAll('[data-accordion]').length) {
    document.querySelectorAll('[data-accordion]').forEach(accordion => {
      accordion.addEventListener('click', function (e) {
        if (e.target.closest('[data-accordion-item]._is-active')) {
          e.target
            .closest('[data-accordion-item]')
            .classList.remove('_is-active');
        } else if (e.target.closest('[data-accordion-item]')) {
          removeClasses(
            accordion.querySelectorAll('[data-accordion-item]'),
            '_is-active'
          );
          e.target.closest('[data-accordion-item]').classList.add('_is-active');
        }
      });
    });
  }

  if (document.querySelectorAll('.field').length) {
    document.querySelectorAll('.field').forEach(field => {
      field.addEventListener('input', function () {
        if (field.querySelector('.field__input').value.length) {
          field.classList.add('_is-filled');
        } else {
          field.classList.remove('_is-filled');
        }
      });
    });
  }

  if (document.querySelector('.blog__filters-btn')) {
    document
      .querySelector('.blog__filters-btn')
      .addEventListener('click', function () {
        document.documentElement.classList.toggle('_show-filters');
      });
  }

  function onClickHandler(e) {
    if (
      e.target.closest('.header__item') &&
      e.target.closest('.header__item').querySelector('.header__sublist')
    ) {
      e.target.closest('.header__item').classList.toggle('_is-active');
    }
  }

  document.addEventListener('click', onClickHandler);
});
