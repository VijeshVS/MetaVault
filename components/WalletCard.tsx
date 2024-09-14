"use client";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Toggle } from "@/components/ui/toggle";
import { Eye } from "lucide-react";
import { toast } from "sonner";
import { PublicKey } from "@solana/web3.js";
import { DialogDemo } from "./AirdropAlert";

function getHidePrivatePass(text: string) {
  let pass = "";
  for (let i = 0; i < text.length; i++) pass += "•";

  return pass;
}

const WalletCard = ({
  token,
  balance,
  publicKey,
  privateKey,
}: {
  token: string;
  balance: number;
  publicKey: PublicKey;
  privateKey: string;
}) => {
  const [reveal, setReveal] = useState(false);
  const [privateCurrent, setprivateCurrent] = useState(
    getHidePrivatePass(privateKey)
  );

  useEffect(() => {
    if (reveal) {
      setprivateCurrent(privateKey);
    } else {
      setprivateCurrent(getHidePrivatePass(privateKey));
    }
  }, [reveal]);

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex justify-between">
          <h1 className="text-3xl">{token} Wallet</h1>
          <DialogDemo publicKey={publicKey} />
        </CardTitle>
        <CardDescription className="text-lg">
          Balance: {balance} SOL
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col w-full space-y-3 text-md lg:text-xl">
          <div className="flex w-full border-2 p-2 lg:p-3 rounded-xl">
            <h1 className="font-semibold">Public Key: </h1>
            <h1
              className="ml-2 hidden lg:block font-semibold cursor-pointer"
              onClick={() => {
                toast.success("Public key has been copied!!", {
                  duration: 2000,
                });
                navigator.clipboard.writeText(publicKey.toBase58());
              }}
            >
              {publicKey.toBase58()}
            </h1>

            <h1
              className="ml-2 font-semibold cursor-pointer lg:hidden"
              onClick={() => {
                toast.success("Public key has been copied!!", {
                  duration: 2000,
                });
                navigator.clipboard.writeText(publicKey.toBase58());
              }}
            >
              {publicKey.toBase58().slice(0, 12)}....
            </h1>
          </div>
          <div className="flex justify-between w-full items-center border-2 p-1 lg:p-2 rounded-xl">
            <div className="flex space-x-2 items-center">
              <h1 className="font-semibold ml-1">Private Key:</h1>
              <h1
                onClick={() => {
                  toast.success("Private key has been copied!!", {
                    duration: 2000,
                  });
                  navigator.clipboard.writeText(privateKey);
                }}
                className="font-semibold hidden lg:block cursor-pointer"
              >
                {privateCurrent}
              </h1>
              <h1
                onClick={() => {
                  toast.success("Private key has been copied!!", {
                    duration: 2000,
                  });
                  navigator.clipboard.writeText(privateKey);
                }}
                className="font-semibold lg:hidden cursor-pointer"
              >
                {privateCurrent.slice(0, 12)}
                {reveal ? "...." : ""}
              </h1>
            </div>
            <Toggle
              onClick={() => {
                setReveal(!reveal);
              }}
              aria-label="Toggle bold"
            >
              <Eye className="h-4 w-4 lg:h-6 lg:w-6" />
            </Toggle>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between"></CardFooter>
    </Card>
  );
};

export default WalletCard;
