export interface Coin {
    name: string;
    ticker: string;
    
    // BIP44 type
    coinType: number;
    
    network: Network
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