import { Button } from "@/components/ui/button";
import WalletCard from "@/components/WalletCard";
import React from "react";


const page = () => {
  return (
    <main className="h-full flex flex-col space-y-4">
      <Button className="w-fit self-end mt-8">Create Wallet</Button>
      <WalletCard token="Solana" balance={0.3234} publicKey="kdanjdbwjnd" privateKey="kjdajkbdjabd" />
    </main>
  );
};

export default page;
