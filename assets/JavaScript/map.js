import L, {Map, TileLayer, Marker, Circle, Polygon, Popup} from 'leaflet'

const map = new Map('map').setView([59.918778, 10.753724], 18)

const marker = new Marker([59.918831, 10.754285]).addTo(map)

marker.bindPopup("<b>Makerspace</b>").openPopup()

const tiles = new TileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);