<template>
    <div>
        <div class="hero">
            <div class="hero-body">
                <div class="container">
                    <div class="columns is-centered">
                        <div class="column is-8">
                            <!-- BIP39 Data -->
                            <div class="box">
                                <h1 class="title has-text-weight-light">BIP39</h1>
                                
                                <div class="field">
                                    <label class="label">Seed:</label>
                                    <div class="control">
                                        <input class="input" type="text" :value="bip39seed" disabled>
                                    </div>
                                </div>
                            </div>

                            <!-- BIP44 Data -->
                            <div class="box">
                                <h1 class="title has-text-weight-light">BIP44</h1>
                                
                                <div class="field">
                                    <label class="label">Purpose:</label>
                                    <div class="control">
                                        <input class="input" type="text" disabled>
                                    </div>
                                </div>

                                <div class="field">
                                    <label class="label">Coin:</label>
                                    <div class="control">
                                        <input class="input" type="text" disabled>
                                    </div>
                                </div>

                                <div class="field">
                                    <label class="label">Seed:</label>
                                    <div class="control">
                                        <input class="input" type="text" disabled>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default defineComponent({
    name: "Recover",
    data() {
        return {
            bip39seed: ""
        }
    },
    mounted() {
        // Get the ticker from the route parameters
        const ticker = this.$route.params.ticker;
    },
    setup() {
        const store = useStore();
        const router = useRouter();

        // Fetch and set the mnemonic
        const mnemonic = store.getters.getMnemonic;

        // Redirect back to index if no mnemonic is present
        if (mnemonic === "") {
            router.push({ path: "/" })
        }

        return {
            store,
            router,
            mnemonic
        }
    }
})
</script>