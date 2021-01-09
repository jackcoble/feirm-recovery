import { Feirm } from "./coins/feirm";

// Model types for a coin and their network parameters
export interface Coin {
    name: string;
    ticker: string;
    
    // BIP44 type
    coinType: number;
    
    network: Network;
}

export interface Network {
    messagePrefix: string;
    bech32: string;
    bip32: Bip32;
    pubKeyHash: number;
    scriptHash: number;
    wif: number;
}

interface Bip32 {
    public: number;
    private: number;
}

// Class for coin factory
export class CoinFactory {
    static coins: { [ticker: string]: Coin } = {
        XFE: new Feirm()
    }

    // Coin list
    static coinsList: Coin[] = [
        CoinFactory.coins.XFE
    ]

    // Fetch a coin by its ticker
    static getCoin(ticker: string): Coin {
        ticker = ticker.toUpperCase();
        return this.coins[ticker];
    }

    // Fetch all available coins
    static getAllCoins(): Coin[] {
        return this.coinsList;
    }
}