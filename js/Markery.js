var kazanIcon = L.icon({
    iconUrl: 'https://i.pinimg.com/originals/3e/5b/50/3e5b50ecd401d18126c9f0ab9ab528bf.png',

    iconSize:     [60, 85], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
L.marker([55.8, 49.0], {icon: kazanIcon}).addTo(map);
var AlmetIcon = L.icon({
    iconUrl: 'https://i.pinimg.com/originals/3e/5b/50/3e5b50ecd401d18126c9f0ab9ab528bf.png',

    iconSize:     [60, 85], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
L.marker([54.8,52.3], {icon: AlmetIcon}).addTo(map);
var UfaIcon = L.icon({
    iconUrl: 'https://i.pinimg.com/originals/3e/5b/50/3e5b50ecd401d18126c9f0ab9ab528bf.png',

    iconSize:     [60, 85], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
L.marker([54.7,55.9], {icon: UfaIcon}).addTo(map);
var polygon = L.polygon([
    [56.1,47.2],
    [54.2,49.5],
    [56.9,53.1]
]).addTo(map);
L.marker([55.8, 49.0], {icon: kazanIcon}).bindPopup("Площадь земель, нарушенных в результате добычи общераспространенных полезных ископаемых, составляет 3,0 тыс. гектаров.").addTo(map);
L.marker([54.8,52.3], {icon: AlmetIcon}).bindPopup("Площадь земель, нарушенных в результате добычи общераспространенных полезных ископаемых, составляет 102 гектаров").addTo(map);
L.marker([54.7,55.9], {icon: UfaIcon}).bindPopup("Площадь земель, нарушенных в результате добычи общераспространенных полезных ископаемых, составляет 4,0 тыс. гектаров").addTo(map);
