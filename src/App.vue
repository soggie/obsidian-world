<script setup>
import { ref, onMounted } from 'vue'
import { cities, ruins, locations, forts } from './data.js'

// Create the custom icons
const cityIcon = L.icon({
  iconUrl: '/marker.svg',
  iconSize: [20, 20],
  iconAnchor: [10, 10]
})

const ruinsIcon = L.icon({
  iconUrl: '/ruin.svg',
  iconSize: [20, 20],
  iconAnchor: [10, 10]
})

const locationIcon = L.icon({
  iconUrl: '/location.svg',
  iconSize: [14, 14],
  iconAnchor: [7, 7]
})

const fortIcon = L.icon({
  iconUrl: '/fort.svg',
  iconSize: [18, 18],
  iconAnchor: [9, 18]
})

onMounted(() => {
  const Map = function ({ 
    elementId = 'map-container', 
    tileUrl = 'tilelib/{z}-{x}-{y}.webp' 
  }) {
    const SIZE = 8192
    const MAX_ZOOM = 5
    const map = L.map(elementId, {
      maxZoom: MAX_ZOOM,
      maxBoundsViscosity: 1.0, // prevent over-panning at the edges
      crs: L.CRS.Simple,
      doubleClickZoom: false // disable this because double click opens the menu
    })

    const sw = map.unproject([0, SIZE], MAX_ZOOM)
    const ne = map.unproject([SIZE, 0], MAX_ZOOM)
    const bounds = new L.LatLngBounds(sw, ne)
    map.setMaxBounds(bounds)

    L.tileLayer(
      tileUrl,
      {
        minZoom: 2,
        maxZoom: 5,
        center: bounds.getCenter(),
        noWrap: true,
        bounds: bounds
      }
    ).addTo(map)

    // Try to load the map's state from local storage
    const lat = window.localStorage.getItem('itheas-lat') || bounds.getCenter().lat
    const lng = window.localStorage.getItem('itheas-lng') || bounds.getCenter().lng
    const zoom = window.localStorage.getItem('itheas-zoom') || 2
    map.setView(new L.LatLng(lat, lng), zoom)

    // Load and place markers for cities
    const updateText = poi => {
      const original = 'Click on a Marker'
      document.getElementById('marker-title').innerHTML = poi.name
      document.getElementById('marker-description').innerHTML = poi.desc
      document.getElementById('marker-class').innerHTML = poi.type
    }

    for (const poi of cities) {
      const marker = L.marker(poi.coord, { icon: cityIcon }).bindPopup(poi.name)
      marker.addTo(map)
      poi.type = 'city'
      marker.on('click', e => updateText(poi))
    }

    // Load and place markers for ruins
    for (const poi of ruins) {
      const marker = L.marker(poi.coord, { icon: ruinsIcon }).bindPopup(poi.name)
      marker.addTo(map)
      poi.type = 'ruins'
      marker.on('click', e => updateText(poi))
    }

    // Load and place markers for locations
    for (const poi of locations) {
      const marker = L.marker(poi.coord, { icon: locationIcon }).bindPopup(poi.name)
      marker.addTo(map)
      poi.type = 'location'
      marker.on('click', e => updateText(poi))
    }

    // Load and place markers for forts
    for (const poi of forts) {
      const marker = L.marker(poi.coord, { icon: fortIcon }).bindPopup(poi.name)
      marker.addTo(map)
      poi.type = 'fortress'
      marker.on('click', e => updateText(poi))
    }

    return map
  }

  const itheas = Map({})

  // Tie into onclick event
  itheas.on('dblclick', function (e) {
    const coord = e.latlng

    // Get the current mouse location
    const origin = itheas.getPixelOrigin()
    const offset = itheas.latLngToLayerPoint(coord)

    const mousex = origin.x + offset.x
    const mousey = origin.y + offset.y

    console.log(`L.latLng(${coord.lat}, ${coord.lng})`)
  })

  itheas.on('moveend', function (e) {
    const center = itheas.getCenter()
    const zoom = itheas.getZoom()

    // Save the center and zoom into local storage
    window.localStorage.setItem('itheas-lat', center.lat)
    window.localStorage.setItem('itheas-lng', center.lng)
    window.localStorage.setItem('itheas-zoom', zoom)
  })
})
</script>

<template>
  <div id="map-container"></div>

  <div id="info-container">
    <h2 class="info-header"><span id="marker-title">Click on a marker</span> <span class="info-class" id="marker-class">-</span></h2>
    <p class="info-content" id="marker-description">-</p>
  </div>
</template>

<style>
body {
  padding: 0;
  margin: 0;
  font-size: 16px;
}

html, body, #app-container, #map-container {
  height: 100%;
  width: 100%;
}

#app-container {
  padding: 0;
  margin: 0;
  position: relative;
}

#map-container {
  position: absolute;
  top: 0;
  left: 0;
  background: black;
}

#info-container {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 25%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 500;
}

@media (min-width: 600px) {
  #info-container {
    height: 15%;
  }
}

.info-header, .info-content {
  text-align: center;
  color: white;
}

.info-header {
  font-family: 'Cinzel', serif;
  font-size: 1.3rem;
  letter-spacing: 0.1rem;
  margin-top: .5rem;
  margin-bottom: 0;
}

.info-content {
  font-family: 'Lato', 'Arial', sans-serif;
  font-size: 0.85rem;
  margin: 0 auto .5rem auto;
  letter-spacing: 0.05rem;
  font-weight: 300;
  line-height: 1.2rem;
  padding-left: 1rem;
  padding-right: 1rem;
  max-width: 700px;
  overflow: hidden;
}

.leaflet-marker-icon {
  -webkit-filter: drop-shadow( 0 0 4px rgba(0, 0, 0, 1));
  filter: drop-shadow( 0 0 4px rgba(0, 0, 0, 1));
  /* Similar syntax to box-shadow */
}

.info-class {
  display: inline-block;
  padding: .2rem .5rem;
  vertical-align: .2rem;
  background: #a1503b;
  font-family: 'Lato', 'Arial', sans-serif;
  font-size: 0.7rem;
  font-weight: 700;
  color: white;
  text-transform: uppercase;
}
</style>
