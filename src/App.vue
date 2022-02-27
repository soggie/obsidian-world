<script setup>
import { ref, onMounted } from 'vue'
import Map from './components/Map.vue'
import InfoPanel from './components/InfoPanel.vue'

let marker = ref(null)
</script>

<template>
  <Map @marker="poi => marker = poi" />
  <InfoPanel :marker="marker" />
</template>
