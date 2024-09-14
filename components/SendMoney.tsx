import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  clusterApiUrl,
  Connection,
  Keypair,
  LAMPORTS_PER_SOL,
  PublicKey,
  sendAndConfirmTransaction,
  SystemProgram,
  Transaction,
} from "@solana/web3.js";
import { Banknote, PlaneIcon, Send, Trophy } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import bs from "bs58";
import { useRecoilState, useSetRecoilState } from "recoil";
import { walletAtom } from "@/store/store";

async function sendTransaction(
  fromSecKey: string,
  fromPublicKey: PublicKey,
  toPublicKey: string,
  sol: string
) {
  const SOL = Number.parseFloat(sol);
  const toPub = new PublicKey(toPublicKey);
  const fromKey = Keypair.fromSecretKey(bs.decode(fromSecKey));
  let connection = new Connection(clusterApiUrl("devnet"));

  let transaction = new Transaction();
  transaction.add(
    SystemProgram.transfer({
      fromPubkey: fromPublicKey,
      toPubkey: toPub,
      lamports: SOL * LAMPORTS_PER_SOL,
    })
  );

  await sendAndConfirmTransaction(connection, transaction, [fromKey]);
}

export function SendMoneyAlert({
  publicKey,
  privateKey,
}: {
  publicKey: PublicKey;
  privateKey: string;
}) {
  const [sol, setSol] = useState("");
  const [inputPublic, setInputPublic] = useState("");
  const [wallets,setWallets] = useRecoilState(walletAtom)

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Send size={20} />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-3xl">Transaction</DialogTitle>
          <DialogDescription>Send SOL</DialogDescription>
        </DialogHeader>
        <div className="flex flex-col space-y-2">
          <Label className="text-md">Enter public address</Label>
          <Input
            value={inputPublic}
            onChange={(e) => setInputPublic(e.target.value)}
            placeholder="Enter the payee's public address"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <Label className="text-md">Enter SOL</Label>
          <Input
            value={sol}
            onChange={(e) => setSol(e.target.value)}
            placeholder="Enter the amount of SOL"
          />
        </div>
        <DialogClose className="flex justify-end cursor-default">
          <Button
            onClick={() => {
              if (publicKey.toBase58() == inputPublic) {
                toast.info("You cannot send SOL to yourself !!");
              } else {
                toast.info("Initiating transaction !!!");
                sendTransaction(privateKey, publicKey, inputPublic, sol)
                  .then(() => {
                    toast.success("Transaction success !!");
                  })
                  .catch(() => {
                    toast.error("Transaction failed !!");
                  });
              }
            }}
            type="submit"
          >
            Send
          </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
