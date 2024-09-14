import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import nacl from "tweetnacl";
import { mnemonicToSeedSync } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { clusterApiUrl, Connection, Keypair, PublicKey } from "@solana/web3.js";
import bs58 from "bs58";
import { walletType } from "@/interfaces/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const createWallet = (
  mnemonicString: string | null,
  token: string,
  walletsLength: number
) => {
  const tokenId = token == "Solana" ? "501" : "60";

  if (mnemonicString == null) {
    return {};
  }

  const mnemonic = JSON.parse(mnemonicString).join(" ");
  const seed = mnemonicToSeedSync(mnemonic);

  const path = `m/44'/${tokenId}'/${walletsLength}'/0'`;
  const derivedSeed = derivePath(path, seed.toString("hex")).key;
  const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
  const publicKey = Keypair.fromSecretKey(secret).publicKey;
  const privateKey = bs58.encode(secret);

  return {
    token,
    balance: 0,
    publicKey,
    privateKey,
  };
};

export function saveWallets(wallets: walletType[]) {
  localStorage.setItem("wallets", JSON.stringify(wallets));
}

export async function getWallets() {
  try {
    const ws = JSON.parse(localStorage.getItem("wallets") as string);

    const ans = [];
    const connection = new Connection(clusterApiUrl("devnet"));
    for (let i = 0; i < ws.length; i++) {
      const wall = { ...ws[i] };
      const balance = await connection.getBalance(
        new PublicKey(wall.publicKey)
      );
      wall.balance = balance / 1e9;
      ans.push(wall);
    }

    return ans;
  } catch (e) {
    return [];
  }
}
