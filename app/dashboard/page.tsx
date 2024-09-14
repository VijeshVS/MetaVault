"use client";
import { Button } from "@/components/ui/button";
import WalletCard from "@/components/WalletCard";
import WalletEmptyComponent from "@/components/WalletEmptyComponent";
import { walletAtom } from "@/store/store";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { walletType } from "@/interfaces/types";
import { clusterApiUrl, Connection } from "@solana/web3.js";

async function updateBalances(wallets: walletType[]) {
  const ans = []
  const connection = new Connection(clusterApiUrl("devnet"));
  for (let i = 0; i < wallets.length; i++) {
    const wall = {...wallets[i]};
    const balance = await connection.getBalance(wall.publicKey);
    wall.balance = balance/1e9;
    ans.push(wall)
  }

  return ans;
}

const Page = () => {
  const router = useRouter();
  const [wallets, setWallets] = useRecoilState(walletAtom);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    let walls = [...wallets];
    if (walls) {
      setLoading(true);
      updateBalances(walls).then((res) => {
        setWallets(res);
        setLoading(false);
      });
    }
  }, []);

  useEffect(() => {
    const phraseString: string | null = localStorage.getItem("phrases");
    if (phraseString == null) {
      router.push("/create-phrase");
      toast.info("Generate phrases to get started");
      return;
    }
  }, []);

  if (loading)
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <div className="flex flex-col items-center space-y-4">
          <div className="animate-spin rounded-full border-4 border-gray-300 border-t-gray-900 h-12 w-12" />
          <p className="text-gray-500 dark:text-gray-400">Loading...</p>
        </div>
      </div>
    );

  return wallets.length > 0 ? (
    <main className="h-full flex flex-col mt-8">
      <div className="flex justify-start lg:justify-end space-x-2 mt-6">
        <Button onClick={() => router.push("/import-wallet")}>
          Import wallet
        </Button>
        <Button onClick={() => router.push("/create-wallet")}>
          Create wallet
        </Button>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        className="flex flex-col space-y-4 py-6"
      >
        {wallets.map((w) => {
          return (
            <WalletCard
              key={w.privateKey}
              token={w.token}
              balance={w.balance}
              publicKey={w.publicKey}
              privateKey={w.privateKey}
            />
          );
        })}
      </motion.div>
    </main>
  ) : (
    <main className="h-full flex flex-col justify-center items-center">
      <WalletEmptyComponent />
    </main>
  );
};

export default Page;
