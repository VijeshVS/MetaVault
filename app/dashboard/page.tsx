"use client"
import WalletEmptyComponent from "@/components/WalletEmptyComponent";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { toast } from "sonner";



const page = () => {
  const router = useRouter();

  useEffect(()=>{
    const phraseString: string | null = localStorage.getItem('phrases')
    if(phraseString == null) {
      router.push('/create-phrase');
      toast.info("Generate phrases to get started");
      return;
    }
  },[])

  return (
    <main className="h-full flex flex-col space-y-4 items-center justify-center">
      {/* <Button className="w-fit self-end mt-8">Create Wallet</Button> */}
      <WalletEmptyComponent/>
    </main>
  );
};

export default page;
