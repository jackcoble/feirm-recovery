<template>
  <div class="modal" :class="{ 'is-active': value }">
    <!-- Dark background -->
    <div class="modal-background"></div>

    <!-- Modal card -->
    <div class="modal-card">
      <!-- Title -->
      <header class="modal-card-head">
        <h1 class="modal-card-title has-text-centered">Disclaimer</h1>
      </header>

      <!-- Body -->
      <section class="modal-card-body">
        <div class="content">
          <p>
            Using the Feirm Recovery Tool can be dangerous if you are not sure
            what you are doing. This project is <a href="https://github.com/jackcoble/feirm-recovery">open source</a>, meaning that anyone
            can verify how this tool is working and handling private keys.
          </p>
          <p>
            Each release of the Feirm Recovery Tool comes with a detatched
            signature, signed by a trusted member of the Feirm Committee with their PGP key. Before using
            this tool, please be sure you have verified the download. Instructions on how to do that can be found <a href="#">here</a>.
          </p>
          <p>Entering your BIP39 mnemonic phrase into your device could result in your funds being stolen if your device is not secured properly. This tool works offline, so you can use it on an airgapped device if you so wish.</p>
          <p>This tool is never intended for daily use, and should only be used in the event that you need to recover your private keys due to an emergency - such as no access to the Feirm Platform.</p>
          <p>By clicking "Accept", you accept the above terms and waive all responsibility from the Feirm project.</p>
        </div>
      </section>

      <!-- Footer -->
      <footer class="modal-card-foot">
        <button class="button is-success" @click="close">Accept</button>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Liability",
  props: {
    value: {
      required: true,
    },
  },
  methods: {
    close() {
      this.$emit("visible", !this.value);
    },
  },
});
</script>