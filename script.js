mapboxgl.accessToken = 'pk.eyJ1IjoiYnJhbWJsZTIyIiwiYSI6ImNsdDE2b283djExcHUya3BsdWs0OXFydzgifQ.r3GWm3olfdS8hRsntYWIzA';
const center = [18.000031, 48.870137];
const bounds = [[17.975, 48.855], [18.025, 48.885]];
var map = new mapboxgl.Map({
    container: 'map',
    center: center,
    zoom: 16,
    bearing: -90.37,
    pitch: 54.53,
    style: 'mapbox://styles/bramble22/clt5vn98s000901qs2fmqft7o',
    minZoom: 15,
    maxZoom: 17,
    maxBounds: bounds
});
map.touchPitch.disable();
document.getElementById('return-to-center').onclick = function() {
    this.classList.add('pressed');
    map.flyTo({
        center: center,
        zoom: 16,
        speed: 0.5,
        curve: 1
    });
    setTimeout(() => {
        this.classList.remove('pressed');
    }, 200);
};
function updateCompass() {
    var rotate = `rotate(${-map.getBearing()}deg)`;
    document.getElementById('compass').style.transform = rotate;
}
map.on('rotate', updateCompass);
updateCompass();
document.getElementById('expandable-menu-button').onclick = function() {
    var expandedMenu = document.getElementById('expandable-menu');
    expandedMenu.classList.toggle('expanded');
    this.classList.toggle('pressed');
    setTimeout(() => {
        this.classList.remove('pressed');
    }, 200);
};
map.once('load', function() {
    var logo = document.getElementsByClassName('mapboxgl-ctrl-logo')[0];
    if (logo) {
        logo.style.display = 'none';
    }
    var attributionToRemove = document.querySelector('.mapboxgl-ctrl-attrib');
    attributionToRemove.remove();
});

