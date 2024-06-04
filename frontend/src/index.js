import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// import Map from "ol/Map.js";
// import View from "ol/View.js";
// import OSM from "ol/source/OSM.js";
// import TileLayer from "ol/layer/Tile.js";

// new Map({
//   layers: [new TileLayer({ source: new OSM() })],
//   view: new View({
//     center: [0, 0],
//     zoom: 2,
//   }),
//   target: "map",
// });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
