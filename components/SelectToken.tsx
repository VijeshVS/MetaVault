"use client";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { createWallet } from "@/lib/utils";
import { useRecoilState } from "recoil";
import { walletAtom } from "@/store/store";
import { walletType } from "@/interfaces/types";
import { motion } from "framer-motion";
import { Card, CardDescription, CardTitle } from "./ui/card";

const SelectToken = () => {
  const [token, setToken] = useState<string>("");
  const router = useRouter();
  const [wallets, setWallets] = useRecoilState(walletAtom);

  useEffect(() => {
    if (token != "") {
      const wallet: walletType | {} = createWallet(
        localStorage.getItem("phrases"),
        token,
        wallets.length
      );
      setWallets([...wallets, wallet as walletType]);
      router.push("/dashboard");
      toast.success(`${token} wallet has been created successfully`, {
        duration: 2000,
      });
    }
  }, [token]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
      className="flex flex-col space-y-4 px-12"
    >
      <Card className="p-6">
        <CardTitle className="text-2xl font-semibold">Create Wallet</CardTitle>
        <CardDescription className="text-lg">Select a token to create a wallet</CardDescription>
        <div className="flex space-x-4 mt-4">
          <Button
            size="lg"
            className="text-xl"
            onClick={() => setToken("Solana")}
            variant="default"
          >
            Solana
          </Button>
          <Button
            size="lg"
            className="text-xl"
            onClick={() => setToken("Ethereum")}
            variant="default"
          >
            Ethereum
          </Button>
        </div>
      </Card>
    </motion.div>
  );
};

export default SelectToken;
