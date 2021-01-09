import { Feirm } from "./coins/feirm";

// Model types for a coin and their network parameters
export interface ICoin {
    name: string;
    ticker: string;
    
    // BIP44 type
    coinType: number;
    
    network: INetwork
}

export interface INetwork {
    messagePrefix: string;
    bech32: string;
    bip32: IBip32;
    pubKeyHash: number;
    scriptHash: number;
    wif: number;
}

interface IBip32 {
    public: number;
    private: number;
}

// Class for coin factory
export class CoinFactory {
    static coins: { [ticker: string]: ICoin } = {
        XFE: new Feirm()
    }

    // Coin list
    static coinsList: ICoin[] = [
        CoinFactory.coins.XFE
    ]

    // Fetch a coin by its ticker
    static getCoin(ticker: string): ICoin {
        ticker = ticker.toUpperCase();
        return this.coins[ticker];
    }

    // Fetch all available coins
    static getAllCoins(): ICoin[] {
        return this.coinsList;
    }
}