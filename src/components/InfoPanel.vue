<script setup>
import { computed } from 'vue'

const props = defineProps({
	marker: {
		type: Object
	}
})

const name = computed(() => props.marker ? props.marker.name : 'Click on a marker' )
const type = computed(() => props.marker ? props.marker.type : '-' )
const desc = computed(() => props.marker ? props.marker.desc : '-' )
</script>

<template>
	<div id="info-container">
    <h2 class="info-header"><span id="marker-title">{{ name }}</span> 
    <span class="info-class" id="marker-class">{{ type }}</span></h2>
    <p class="info-content" id="marker-description">{{ desc }}</p>
  </div>
</template>

<style scoped>
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