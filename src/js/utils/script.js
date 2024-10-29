import { removeClasses } from './utils';

window.addEventListener('load', function () {
  if (document.querySelector('.hamburger')) {
    document.querySelector('.hamburger').addEventListener('click', function () {
      document.documentElement.classList.toggle('_show-menu');
    });
  }

  if (document.querySelectorAll('.accordion').length) {
    document.querySelectorAll('.accordion').forEach(accordion => {
      accordion.addEventListener('click', function (e) {
        if (e.target.closest('.accordion__item._is-active')) {
          e.target.closest('.accordion__item').classList.remove('_is-active');
        } else if (e.target.closest('.accordion__item')) {
          removeClasses(
            accordion.querySelectorAll('.accordion__item'),
            '_is-active'
          );
          e.target.closest('.accordion__item').classList.add('_is-active');
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
