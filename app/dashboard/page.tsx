"use client";
import { Button } from "@/components/ui/button";
import WalletCard from "@/components/WalletCard";
import WalletEmptyComponent from "@/components/WalletEmptyComponent";
import { walletAtom } from "@/store/store";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { toast } from "sonner";
import { motion } from "framer-motion";
const Page = () => {
  const router = useRouter();

  const wallets = useRecoilValue(walletAtom);

  useEffect(() => {
    const phraseString: string | null = localStorage.getItem("phrases");
    if (phraseString == null) {
      router.push("/create-phrase");
      toast.info("Generate phrases to get started");
      return;
    }
  }, []);

  return wallets.length > 0 ? (
    <main className="h-full flex flex-col mt-8">
      <Button
        onClick={() => router.push("/create-wallet")}
        className="self-end"
      >
        Create wallet
      </Button>
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
