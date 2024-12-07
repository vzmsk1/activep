export const markersCollection = [
  {
    coordinate: [37.8830065, 55.710063069038036],
  },
];

async function initMap() {
  await ymaps3.ready;

  const coords = document
    .getElementById('map')
    .dataset.coordinates.trim()
    .split(',');
  const center = document
    .getElementById('map')
    .dataset.center.trim()
    .split(',');

  const {
    YMap,
    YMapDefaultSchemeLayer,
    YMapDefaultFeaturesLayer,
    YMapMarker,
    YMapCenterLocation,
  } = ymaps3;
  const map = new YMap(document.getElementById('map'), {
    location: {
      // center:
      //   window.innerWidth <= 768
      //     ? [37.912987097900384, 55.723855248468425]
      //     : [37.91702114025878, 55.72419433840608],
      center: [center[0], center[1]],
      zoom: 15,
    },
    behaviors: ['default', 'drag', 'scrollZoom', 'multiTouch'],
  });

  map.addChild(new YMapDefaultSchemeLayer());
  map.addChild(new YMapDefaultFeaturesLayer({ zIndex: 1800 }));

  console.log(document.getElementById('map').dataset.coordinates);

  markersCollection.forEach(el => {
    let content = document.createElement('div');
    content.dataset.index = el.idx;
    content.classList.add('marker', el.type);
    content.innerHTML =
      window.innerWidth <= 768
        ? `<svg width="38" height="55" viewBox="0 0 38 55" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19 26.125C17.2003 26.125 15.4743 25.4007 14.2018 24.1114C12.9292 22.822 12.2143 21.0734 12.2143 19.25C12.2143 17.4266 12.9292 15.678 14.2018 14.3886C15.4743 13.0993 17.2003 12.375 19 12.375C20.7997 12.375 22.5257 13.0993 23.7982 14.3886C25.0708 15.678 25.7857 17.4266 25.7857 19.25C25.7857 20.1528 25.6102 21.0468 25.2692 21.8809C24.9282 22.7151 24.4283 23.473 23.7982 24.1114C23.1681 24.7498 22.4201 25.2562 21.5968 25.6017C20.7735 25.9472 19.8911 26.125 19 26.125ZM19 0C13.9609 0 9.12816 2.02812 5.56497 5.63819C2.00178 9.24827 0 14.1446 0 19.25C0 33.6875 19 55 19 55C19 55 38 33.6875 38 19.25C38 14.1446 35.9982 9.24827 32.435 5.63819C28.8718 2.02812 24.0391 0 19 0Z" fill="#008AB8"/>
</svg>
`
        : `
		<svg width="47" height="67" viewBox="0 0 47 67" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.3334 31.6665C21.1233 31.6665 19.0037 30.7885 17.4409 29.2257C15.8781 27.6629 15.0001 25.5433 15.0001 23.3332C15.0001 21.123 15.8781 19.0034 17.4409 17.4406C19.0037 15.8778 21.1233 14.9998 23.3334 14.9998C25.5436 14.9998 27.6632 15.8778 29.226 17.4406C30.7888 19.0034 31.6667 21.123 31.6667 23.3332C31.6667 24.4275 31.4512 25.5112 31.0324 26.5222C30.6136 27.5332 29.9998 28.4519 29.226 29.2257C28.4522 29.9995 27.5335 30.6134 26.5224 31.0322C25.5114 31.451 24.4278 31.6665 23.3334 31.6665ZM23.3334 -0.000160217C17.145 -0.000160217 11.2101 2.45817 6.83426 6.83401C2.45841 11.2099 8.01086e-05 17.1448 8.01086e-05 23.3332C8.01086e-05 40.8332 23.3334 66.6665 23.3334 66.6665C23.3334 66.6665 46.6667 40.8332 46.6667 23.3332C46.6667 17.1448 44.2084 11.2099 39.8326 6.83401C35.4567 2.45817 29.5218 -0.000160217 23.3334 -0.000160217Z" fill="#008AB8"/>
</svg>

      `;

    content.style.height = window.innerWidth <= 768 ? '55px' : '67px';
    content.style.width = window.innerWidth <= 768 ? '38px' : '47px';
    content.style.position = 'relative';
    content.style.top = window.innerWidth <= 768 ? '-55px' : '-67px'; // вверх - на высоту маркера
    content.style.left = window.innerWidth <= 768 ? '-19px' : '-23.5px'; // влево - на половину ширины
    const marker = new YMapMarker(
      {
        coordinates: [coords[0], coords[1]],
        draggable: false,
      },
      content
    );
    map.addChild(marker);
  });
}

if (document.getElementById('map')) {
  initMap();
}
