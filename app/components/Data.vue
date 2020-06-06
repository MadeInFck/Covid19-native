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
      text="Nombre de contaminés:"
      color="#fff"
      fontSize="20"
      horizontalAlignment="center"
      height="40"
    />
    <Label
      text="Nombre de décès:"
      color="#fff"
      horizontalAlignment="center"
      fontSize="20"
      height="40"
    />
    <Label
      text="Nombre de cas guéris:"
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
    ...mapState(["countries"])
  },
  data() {
    return {
      selectedItem: null,
    };
  },
  methods: {
    selectedIndexChanged: (event) => {
      console.log(event.value);
    },
  },
};
</script>

<style></style>
