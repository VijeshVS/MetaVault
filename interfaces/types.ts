import { PublicKey } from "@solana/web3.js";

export interface walletType {
    token: string,
    balance: number,
    privateKey: string,
    publicKey: PublicKey
}