<template lang="html">
  <div class="info-windows">
    <google-map id="map" ref="Map">
      <google-map-marker
        :key="index"
        v-for="(infowindow, index) in infoWindowsList"
        :position="infowindow.position"
        @click="toggleInfoWindow(infowindow)"
      ></google-map-marker>
      <google-map-infowindow
              :position="infoWIndowContext.position"
              :show.sync="showInfo"
              :options="{maxWidth: 300}"
              @info-window-clicked="infoClicked"
      >
        <h4>{{infoWIndowContext.title}}</h4>
        <p>{{infoWIndowContext.description}}</p>
      </google-map-infowindow>
    </google-map>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      showInfo: false,
      infoWIndowContext: {
        position: {
          lat: 44.2899,
          lng: 11.8774,
        },
      },
      infoWindowsList: {
        country: "FR",
        name: "Lyon",
        lat: "45.75",
        lng: "4.583333",
      },
    };
  },
  methods: {
    toggleInfoWindow(context) {
      this.infoWIndowContext = context;
      this.showInfo = true;
    },
    infoClicked(context) {
      console.log(context);
    },
  },
};
</script> 