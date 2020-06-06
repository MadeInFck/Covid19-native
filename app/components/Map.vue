<template>
  <GridLayout>
    <Mapbox
      accessToken="pk.eyJ1IjoibWFkZWluZmNrIiwiYSI6ImNrOWE5c3dqbzA3cGczZnQ2bnc5bTY5YXgifQ.UFK-3IjWrE5oyLyy_txo7Q"
      mapStyle="traffic_day"
      latitude="43.900"
      longitude="-0.600"
      hideCompass="true"
      zoomLevel="10"
      showUserLocation="true"
      disableZoom="false"
      disableRotation="false"
      disableScroll="false"
      disableTilt="false"
      @mapReady="onMapReady($event)"
    >
    </Mapbox>
  </GridLayout>
</template>

<script>
export default {
  name: "essai",
  methods: {
    onMapReady(args) {
      args.map.addMarkers([
        {
          lat: 43.900,
          lng: -0.600,
          title: "Saint-Perdon",
          subtitle: "Essai",
          onCalloutTap: () => {
            utils.openUrl("https://www.thepolyglotdeveloper.com");
          },
        },
      ]);
    },
  }
};
</script>
<style></style>
