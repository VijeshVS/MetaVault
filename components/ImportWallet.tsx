"use client";
import React, { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Keypair } from "@solana/web3.js";
import { useRecoilState } from "recoil";
import { walletAtom } from "@/store/store";
import bs from "bs58";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { saveWallets } from "@/lib/utils";

const ImportWallet = () => {
  const [privateKey, setPrivateKey] = useState("");
  const [wallets, setWallets] = useRecoilState(walletAtom);
  const router = useRouter()

  function import_wallet() {
    if(privateKey == ""){
      toast.info("Private key cannot be empty !!");
      return;
    }
    
    try {
      const key_pair = Keypair.fromSecretKey(
        new Uint8Array(JSON.parse(privateKey))
      );

      for(let i = 0;i<wallets.length;i++){
        if(wallets[i].privateKey == bs.encode(new Uint8Array(JSON.parse(privateKey)))){
          toast.info("Wallet already exists!!");
          setPrivateKey("");
          return;
        }
      }

      setWallets([
        ...wallets,
        {
          token: "Solana",
          publicKey: key_pair.publicKey.toBase58(),
          privateKey: bs.encode(key_pair.secretKey),
          balance: 0,
        },
      ]);

      saveWallets([
        ...wallets,
        {
          token: "Solana",
          publicKey: key_pair.publicKey.toBase58(),
          privateKey: bs.encode(key_pair.secretKey),
          balance: 0,
        },
      ])
      toast.success("Wallet imported successfully !!")
      router.push('/dashboard')
    } catch (e) {
      toast.error("Invalid private key !!")
      setPrivateKey("")
    }
  }

  return (
    <div className="flex flex-col justify-center space-y-4 h-full mt-24 px-12">
      <Label className="self-start font-semibold text-3xl">
        Enter Private Key
      </Label>
      <Input
        value={privateKey}
        onChange={(e) => setPrivateKey(e.target.value)}
        type="password"
        placeholder="Enter key"
      />
      <Button onClick={() => import_wallet()} className="w-fit">
        Add wallet
      </Button>
    </div>
  );
};

export default ImportWallet;
