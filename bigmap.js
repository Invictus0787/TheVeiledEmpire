const map = document.getElementById('zoomable-map');
const mapContainer = document.querySelector('.map-container');

map.addEventListener('click', function () {
    if (map.classList.contains('zoomed')) {
        map.classList.remove('zoomed');
    } else {
        map.classList.add('zoomed');
    }
});
