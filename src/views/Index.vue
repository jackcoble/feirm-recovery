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

                <!-- Invalid mnemonic error -->
                <invalid-mnemonic v-show="invalidMnemonic"></invalid-mnemonic>

                <!-- Mnemonic entry -->
                <div class="field">
                  <label class="label">Mnemonic phrase</label>
                  <div class="control">
                    <input class="input" type="text" placeholder="Mnemonic phrase" v-model="mnemonic">
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
                    <button class="button is-warning" @click="storeMnemonic(mnemonic)">Recover</button>
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
import { validateMnemonic } from "bip39";

// Components
import Liability from "@/components/Liability.vue";
import InvalidMnemonic from "@/components/InvalidMnemonic.vue";

import { useStore } from "vuex";

export default defineComponent({
  name: "Index",
  data() {
    return {
      mnemonic: "",
      disclaimerModal: false,
      invalidMnemonic: false
    };
  },
  components: {
    Liability,
    InvalidMnemonic
  },
  mounted() {
    // Open the disclaimer modal
    this.showDisclaimer();
  },
  methods: {
    showDisclaimer() {
      this.disclaimerModal = !this.disclaimerModal;
    },
    storeMnemonic(mnemonic: string) {
      // Validate the mnemonic
      const valid = validateMnemonic(mnemonic)

      // Show a popup error if the mnemonic isn't valid
      if (!valid) {
        return this.invalidMnemonic = !this.invalidMnemonic;
      }

      // Mnemonic is valid
      this.invalidMnemonic = false;

      // Store the mnemonic in Vuex
      this.store.commit("setMnemonic", mnemonic);
    }
  },
  setup() {
    const store = useStore();

    return {
      store
    }
  }
});
</script>
