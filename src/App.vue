<template>
  <navigation />
  <router-view/>
</template>

<script lang="ts">
import Navigation from "@/components/Navigation.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  components: {
    Navigation
  }
})
</script>