import { ICoin } from "@/models/coin/coin";

export class Feirm implements ICoin {
  "name": "Feirm";
  "ticker": "XFE";
  "coinType": 193;
  "network": {
    "messagePrefix": "\x18DarkNet Signed Message:\n",
    "bech32": "",
    "bip32": {
      "public": 0x0488b21e,
      "private": 0x0488ade4
    },
    "pubKeyHash": 12,
    "scriptHash": 57,
    "wif": 55
  }
}