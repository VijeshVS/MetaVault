import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import nacl from "tweetnacl";
import { mnemonicToSeedSync } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";
import bs58 from 'bs58';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const createWallet = (mnemonicString:string | null,token: string,walletsLength: number)=>{
  const tokenId = token == "Solana"?"501":"60";

  if(mnemonicString == null) {
    return {}
  }

  const mnemonic = JSON.parse(mnemonicString).join(" ")
  const seed = mnemonicToSeedSync(mnemonic);
  
  const path = `m/44'/${tokenId}'/${walletsLength}'/0'`;
  const derivedSeed = derivePath(path, seed.toString("hex")).key;
  const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
  const publicKey = Keypair.fromSecretKey(secret).publicKey
  const privateKey = bs58.encode(secret)
  
 return {
    token,
    balance: 0,
    publicKey,
    privateKey
  }
}
