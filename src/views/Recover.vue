<template>
    <div>
        <div class="hero">
            <div class="hero-body">
                <div class="container">
                    <div class="columns is-centered">
                        <div class="column is-8">
                            <!-- BIP39 Data -->
                            <div class="box">
                                <h1 class="title has-text-weight-light">BIP39 Mnemonic</h1>
                                
                                <div class="field">
                                    <label class="label">Seed:</label>
                                    <div class="control">
                                        <input class="input" type="text" :value="bip39seed" disabled>
                                    </div>
                                </div>

                                <div class="field">
                                    <label class="label">BIP32 Root Key:</label>
                                    <div class="control">
                                        <input class="input" type="text" :value="bip32rootKey" disabled>
                                    </div>
                                </div>
                            </div>

                            <!-- BIP44 Data -->
                            <div class="box">
                                <h1 class="title has-text-weight-light">BIP44</h1>
                                
                                <div class="field">
                                    <label class="label">Purpose:</label>
                                    <div class="control">
                                        <input class="input" type="text" disabled :value="coin.coinType">
                                    </div>
                                </div>

                                <div class="field">
                                    <label class="label">Coin:</label>
                                    <div class="control">
                                        <input class="input" type="text" disabled :value="coin.name + ' (' + coin.ticker + ')'">
                                    </div>
                                </div>

                                <div class="field">
                                    <label class="label">Extended Public Key (XPUB)</label>
                                    <div class="control">
                                        <input class="input" type="text" disabled :value="xpub">
                                    </div>
                                </div>
                            </div>

                            <!-- Private keys -->
                            <div class="box">
                                <h1 class="title has-text-weight-light">Addresses and Private Keys</h1>
                                
                                <div v-for="address in addresses" :key="address">
                                    <p>{{ address }}</p>
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
import { Coin, CoinFactory } from "@/models/coin/coin";
import { mnemonicToSeedSync } from "bip39";
import { fromSeed } from "bip32";
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { payments } from "bitcoinjs-lib";

export default defineComponent({
    name: "Recover",
    data() {
        return {
            bip39seed: "",
            xpub: "",
            bip32rootKey: "",
            coin: {} as Coin,

            addresses: [] as string[],
            privateKeys: [] as string[]
        }
    },
    async mounted() {
        // Get the ticker from the route parameters
        const ticker = this.$route.params.ticker as string;

        // Get the mnemonic
        const mnemonic = this.store.getters.getMnemonic;

        // Fetch the full coin information
        const coin = CoinFactory.getCoin(ticker);
        const network = coin.network;
        this.coin = coin;

        // Derive the seed from the mnemonic
        const seed = mnemonicToSeedSync(mnemonic);
        this.bip39seed = seed.toString('hex');

        // Derive the root key
        const rootKey = fromSeed(seed, network);
        this.bip32rootKey = rootKey.toBase58();

        // Derive the xpub
        const child = rootKey.derivePath(`m/44'/` + coin.coinType + `'/0'`).neutered();
        this.xpub = child.toBase58();

        // Lookup confirmed UTXOs and derive private keys
        // https://blockbook.feirm.com/api/v2/utxo/xpub6CQN15REuKp87oEmWwDCZmfAB5VJezBCaiExR2yywSkJG1ADZsU6qBZEM5Djjz9PB6GqgsdumQ3PWejTHiKCfL2AcmuUk98DM1wAEyQrri8?confirmed=true
        const keypair = rootKey.derivePath("m/44'/193'/0'/1/24")
        console.log(keypair.toWIF());
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