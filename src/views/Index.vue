<template>
  <div>
    <div class="hero">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-centered">
            <div class="column is-6">
              <div class="box">
                <div class="content has-text-centered">
                  <h1 class="title has-text-weight-light">Feirm Recovery Tool</h1>
                  <p>Recover cryptocurrency private keys from your BIP39 mnemonic phrase.</p>
                </div>

                <!-- Mnemonic entry -->
                <div class="field">
                  <label class="label">Mnemonic phrase</label>
                  <div class="control">
                    <input class="input" type="text" placeholder="Mnemonic phrase">
                  </div>
                </div>

                <!-- Coin selection -->
                <div class="field">
                  <label class="label">Select a coin</label>
                  <div class="control">
                    <div class="select">
                      <select>
                        <option>Feirm (XFE)</option>
                      </select>
                    </div>
                  </div>
                </div>

                <!-- Recover button -->
                <hr>
                <div class="field">
                  <div class="control">
                    <button class="button is-warning">Recover</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <liability
      v-model:value="disclaimerModal"
      @visible="showDisclaimer"
    ></liability>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Components
import Liability from "@/components/Liability.vue";

export default defineComponent({
  name: "Index",
  data() {
    return {
      disclaimerModal: false,
    };
  },
  components: {
    Liability,
  },
  mounted() {
    // Open the disclaimer modal
    this.showDisclaimer();
  },
  methods: {
    showDisclaimer() {
      this.disclaimerModal = !this.disclaimerModal;
    },
  },
});
</script>
