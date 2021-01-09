<template>
  <div>
    <h1 class="title">Feirm Recovery Tool</h1>
    <button class="button" @click="showLiability">Open</button>
    
    <liability v-model:value="modalOpen" @visible="showLiability"></liability>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// Components
import Liability from "@/components/Liability.vue";

export default defineComponent({
  name: 'Index',
  data() {
    return {
      modalOpen: false
    }
  },
  components: {
    Liability
  },
  methods: {
    showLiability() {
      this.modalOpen = !this.modalOpen;
    },
  }
});
</script>
