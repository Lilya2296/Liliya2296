const apiLink = "https://api.mapbox.com/styles/v1/liliya2296q/ck2xppbzg1xoy1co0hszajve3/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibGlsaXlhMjI5NnEiLCJhIjoiY2syeHA0NmN0MGR4NTNxcWgxc3BnaTZhZCJ9.QasxBkmJNLIROl2hQ6h5nA"

let map;
let layer;
let layerLabels;

const labels = ['Oceans', 'Gray', 'DarkGray', 'ShadedRelief'];
const imageryLabels = ['Imagery', 'ImageryClarity', 'ImageryFirefly'];

function initBackButton() {
$('#back-btn').on('click', event => {
window.history.back();
event.preventDefault();
})
}

init();

function init() {
constructor();
initBackButton();
handleMapSelection();
addPointsToMap();
}

function constructor() {
map = L.map('map').setView([55.8,49.0], 6);
layer = L.tileLayer(apiLink).addTo(map)
}

function handleMapSelection() {
document.querySelector('.map-selector').addEventListener('change', event => {
const chosenMap = event.target.value;
changeMap(chosenMap);
});
}

function changeMap(chosenMap) {
clearMap();
setMapLayer(chosenMap);

chooseAndAddLayerLabelsToMap(chosenMap);
}

function clearMap() {
if (layer) {
map.removeLayer(layer);
}

if (layerLabels) {
map.removeLayer(layerLabels);
}
}

function setMapLayer(chosenMap) {

if (chosenMap === '') {
layer = L.tileLayer(apiLink);
} else {
layer = L.esri.basemapLayer(chosenMap);
}

map.addLayer(layer);
}

function chooseAndAddLayerLabelsToMap(chosenMap) {
if (labels.includes(chosenMap)) {
addLayerLabelsToMap(chosenMap + 'Labels');
}
else if (imageryLabels.includes(chosenMap)) {
addLayerLabelsToMap('ImageryLabels');
}
}

function addLayerLabelsToMap(labels) {
layerLabels = L.esri.basemapLayer(labels);
map.addLayer(layerLabels);
}

function addPointsToMap() {
$.getJSON("data/data.json", point => {
L.geoJSON(point, {
pointToLayer: (feature, coordinates) => {
return L.marker(coordinates).bindPopup(feature.properties.title)
}
}).addTo(map);
});
}
var greenIcon = L.icon({
    iconUrl: 'https://i.pinimg.com/originals/3e/5b/50/3e5b50ecd401d18126c9f0ab9ab528bf.png',

    iconSize:     [60, 85], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
L.marker([55.8, 49.0], {icon: greenIcon}).addTo(map);
var greenIcon = L.icon({
    iconUrl: 'https://i.pinimg.com/originals/3e/5b/50/3e5b50ecd401d18126c9f0ab9ab528bf.png',

    iconSize:     [60, 85], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
L.marker([54.8,52.3], {icon: greenIcon}).addTo(map);
var greenIcon = L.icon({
    iconUrl: 'https://i.pinimg.com/originals/3e/5b/50/3e5b50ecd401d18126c9f0ab9ab528bf.png',

    iconSize:     [60, 85], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
L.marker([54.7,55.9], {icon: greenIcon}).addTo(map);
var polygon = L.polygon([
    [56.1,47.2],
    [54.2,49.5],
    [56.9,53.1]
]).addTo(map);