import * as L from "leaflet";
import "leaflet/dist/leaflet.css";

// needed to properly load the images in the Leaflet CSS
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

// from https://switch2osm.org/using-tiles/getting-started-with-leaflet/
var map = L.map("map").setView({ lon: 0, lat: 0 }, 2);

// add the OpenStreetMap tiles
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>',
}).addTo(map);

// show the scale bar on the lower left corner
L.control.scale().addTo(map);

// show a marker on the map
L.marker({ lon: 0, lat: 0 }).bindPopup("The center of the world").addTo(map);
