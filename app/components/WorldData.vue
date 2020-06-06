<template>
  <StackLayout backgroundColor="#3c495e">
    <Label
      text="Situation dans le monde"
      color="#fff"
      textWrap="false"
      horizontalAlignment="center"
      height="40"
      fontSize="25"
    />
    <label text="" />
    <Label
      :text="'Nouveaux cas confirmés: ' + worldData.NewConfirmed"
      color="#fff"
      fontSize="20"
      horizontalAlignment="center"
      height="40"
    />
    <Label
      :text="'Nombre de cas confirmés: ' + worldData.TotalConfirmed"
      color="#fff"
      fontSize="20"
      horizontalAlignment="center"
      height="40"
    />
    <Label
      :text="'Nombre de décès: ' + worldData.TotalDeaths"
      color="#fff"
      horizontalAlignment="center"
      fontSize="20"
      height="40"
    />
    <Label
      :text="'Nombre de cas guéris: ' + worldData.TotalRecovered"
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
  name: "WorldData",
  computed: {
    ...mapState(["worldData"]),
  },
  data() {
    return {
      
    };
  }
};
</script>

<style></style>
