<template>
  <Page>
    <ActionBar title="Covid 19" />
    <TabView
      androidTabsPosition="bottom"
      tabTextColor="#333333"
      tabBackgroundColor="#53ba82"
      selectedTabTextColor="#fff"
    >
      <TabViewItem title="Monde">
        <WorldData />
      </TabViewItem>
      <TabViewItem title="Pays">
        <Data />
      </TabViewItem>
      <TabViewItem title="Carte">
        <Map />
      </TabViewItem>
    </TabView>
  </Page>
</template>

<script>
import Map from "./Map";
import Data from "./Data";
import WorldData from "./WorldData";

export default {
  name: "data",
  components: {
    Data,
    Map,
    WorldData
  },
  data() {
    return {
      baseUrl: "https://api.covid19api.com/",
    };
  },
  methods: {
    getCountries() {
      fetch(this.baseUrl + `summary`)
        .then(response => response.json())
        .then(data => {
          this.$store.dispatch("updateCountries", data);
        });
    }
  },
  created() {
    this.getCountries();
  }
};
</script>

<style scoped>
ActionBar {
  background-color: #53ba82;
  color: #ffffff;
}

.message {
  vertical-align: center;
  text-align: center;
  font-size: 20;
  color: #333333;
}
</style>
