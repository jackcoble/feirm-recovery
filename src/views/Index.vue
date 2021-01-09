<template>
  <div>
    <h1 class="title">Feirm Recovery Tool</h1>
    <liability v-model:value="disclaimerModal" @visible="showDisclaimer"></liability>
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
      disclaimerModal: false
    }
  },
  components: {
    Liability
  },
  mounted() {
    // Open the disclaimer modal
    this.showDisclaimer();
  },
  methods: {
    showDisclaimer() {
      this.disclaimerModal = !this.disclaimerModal;
    },
  }
});
</script>
