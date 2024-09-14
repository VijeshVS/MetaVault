import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { walletType } from "@/interfaces/types";
import { clusterApiUrl, Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";
import { PlaneIcon, Trophy } from "lucide-react";
import { split } from "postcss/lib/list";
import { useState } from "react";
import { toast } from "sonner";

export function DialogDemo({ publicKey }: { publicKey: PublicKey }) {
  const [sol, setSol] = useState("");

  async function airdropSOL(publicKey: PublicKey) {
    const connection = new Connection(clusterApiUrl("devnet"));
    const airdropsignature = await connection.requestAirdrop(publicKey, Number.parseInt(sol)*LAMPORTS_PER_SOL);
    await connection.confirmTransaction({ signature: airdropsignature } as any);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <PlaneIcon size={20} />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Airdrop SOL</DialogTitle>
          <DialogDescription>
            Airdrop some SOL for your wallet
          </DialogDescription>
        </DialogHeader>
        <div className="grid py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              SOL
            </Label>
            <Input
              id="name"
              placeholder="Enter sol"
              className="col-span-3"
              value={sol}
              onChange={(e) => setSol(e.target.value)}
            />
          </div>
        </div>
        <DialogClose className="flex justify-end cursor-default">
          <Button
            onClick={() =>
              airdropSOL(publicKey)
                .then(() => {
                  toast.success("Airdropped successfully!!");
                })
                .catch((e) => {
                  toast.info("Airdrop limit breached!!");
                })
            }
            type="submit"
          >
            Airdrop
          </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
