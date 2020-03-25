<!--
 Vamos a crear el template para la vista
del mapa
-->

<template>
  <div>
    <div class="mapa" ref="mapa"></div>
    <template v-if="Boolean(this.google) && Boolean(this.map)">
      <slot :google="google" :map="map" />
    </template>
  </div>
</template>

<script>
/** Configurar los métodos necesarios para que Google Maps
  funcione en Vue JS  **/

import GoogleMapsApiLoader from "google-maps-api-loader";

export default {
  props: {
    configMapa: Object,
    apiKey: String
  },

  data() {
    return {
      google: null,
      map: null
    };
  },

  async mounted() {
    const googleMapApi = await GoogleMapsApiLoader({
      apiKey: this.apiKey
    });
    this.google = googleMapApi;
    this.initializeMap();
  },

  methods: {
    initializeMap() {
      const mapContainer = this.$refs.mapa;
      this.map = new this.google.maps.Map(mapContainer, this.configMapa);
    }
  }
};
</script>

<style scoped>
.mapa {
  width: 100%;
  min-height: 100%;
}
</style>