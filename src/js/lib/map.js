export const markersCollection = [
  {
    coordinate: [37.8830065, 55.710063069038036],
  },
];

async function initMap() {
  await ymaps3.ready;

  const {
    YMap,
    YMapDefaultSchemeLayer,
    YMapDefaultFeaturesLayer,
    YMapMarker,
    YMapCenterLocation,
  } = ymaps3;
  const map = new YMap(document.getElementById('map'), {
    location: {
      center:
        window.innerWidth <= 768
          ? [37.8830065, 55.710063069038036]
          : [37.893506821444205, 55.707114994453676],
      zoom: 15,
    },
    behaviors: ['default', 'drag', 'scrollZoom', 'multiTouch'],
  });

  map.addChild(new YMapDefaultSchemeLayer());
  map.addChild(new YMapDefaultFeaturesLayer({ zIndex: 1800 }));

  markersCollection.forEach(el => {
    let content = document.createElement('div');
    content.dataset.index = el.idx;
    content.classList.add('marker', el.type);
    content.insertAdjacentHTML(
      'beforeend',
      `
		<svg width="47" height="67" viewBox="0 0 47 67" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.3334 31.6665C21.1233 31.6665 19.0037 30.7885 17.4409 29.2257C15.8781 27.6629 15.0001 25.5433 15.0001 23.3332C15.0001 21.123 15.8781 19.0034 17.4409 17.4406C19.0037 15.8778 21.1233 14.9998 23.3334 14.9998C25.5436 14.9998 27.6632 15.8778 29.226 17.4406C30.7888 19.0034 31.6667 21.123 31.6667 23.3332C31.6667 24.4275 31.4512 25.5112 31.0324 26.5222C30.6136 27.5332 29.9998 28.4519 29.226 29.2257C28.4522 29.9995 27.5335 30.6134 26.5224 31.0322C25.5114 31.451 24.4278 31.6665 23.3334 31.6665ZM23.3334 -0.000160217C17.145 -0.000160217 11.2101 2.45817 6.83426 6.83401C2.45841 11.2099 8.01086e-05 17.1448 8.01086e-05 23.3332C8.01086e-05 40.8332 23.3334 66.6665 23.3334 66.6665C23.3334 66.6665 46.6667 40.8332 46.6667 23.3332C46.6667 17.1448 44.2084 11.2099 39.8326 6.83401C35.4567 2.45817 29.5218 -0.000160217 23.3334 -0.000160217Z" fill="#008AB8"/>
</svg>

      `
    );
    const marker = new YMapMarker(
      {
        coordinates: el.coordinate,
        draggable: false,
        offset: ['-50%', '-50%'],
      },
      content
    );
    map.addChild(marker);
  });
}

if (document.getElementById('map')) {
  initMap();
}
