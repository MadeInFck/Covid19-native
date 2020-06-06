<template>
  <StackLayout backgroundColor="#3c495e">
    <Label
      text="Choisissez un pays:"
      color="#fff"
      textWrap="true"
      horizontalAlignment="center"
      height="40"
      fontSize="30"
    />
    <ListPicker
      :items="countries"
      color="#fff"
      borderWidth="2"
      borderColor="#53ba82"
      borderRadius="20"
      androidElevation="100"
      verticalAlignment="top"
      @selectedIndexChange="selectedIndexChanged"
    />
    <Label
      :text="'Nombre de cas actifs: ' + active"
      color="#fff"
      fontSize="20"
      horizontalAlignment="center"
      height="40"
    />
    <Label
      :text="'Nombre de décès: ' + deaths"
      color="#fff"
      horizontalAlignment="center"
      fontSize="20"
      height="40"
    />
    <Label
      :text="'Nombre de cas guéris: ' + recovered"
      color="#fff"
      fontSize="20"
      height="40"
      horizontalAlignment="center"
    />
  </StackLayout>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Data",
  computed: {
    ...mapState(["countries", "slugs", "baseUrl"])
  },
  data() {
    return {
      selectedItem: null,
      deaths: null,
      recovered: null,
      active: null
    };
  },
  methods: {
    selectedIndexChanged(event) {
      let slug = this.getSlug(event.value);
      this.getDataCountry(slug);
    },
    getDataCountry(slug) {
      fetch(this.baseUrl + `total/country/`  + slug)
        .then(response => response.json())
        .then(data => {
          let countryData = data.splice(-1)[0];
          this.deaths = countryData.Deaths;
          this.recovered = countryData.Recovered;
          this.active = countryData.Active;
        });
    },
    getSlug(index) {
      return this.slugs[index];
    }
  },
};
</script>

<style></style>
