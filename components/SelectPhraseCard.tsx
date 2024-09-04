import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@radix-ui/react-label";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
const SelectPhraseCard = () => {
  return (
    <Card className="w-[550px]">
      <CardHeader>
        <CardTitle>Enter Custom Phrases</CardTitle> 
        <CardDescription>Your wallets are dervied from these phrases. Keep it a secret 🤫</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid grid-cols-4 w-full items-center gap-4">
              <Input id="name"  />
              <Input id="name"  />
              <Input id="name"  />
              <Input id="name"  />

              <Input id="name" />
              <Input id="name" />
              <Input id="name" />
              <Input id="name" />

              <Input id="name" />
              <Input id="name" />
              <Input id="name" />
              <Input id="name" />
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button>Submit</Button>
        <Button>Generate Random</Button>
      </CardFooter>
    </Card>
  );
};

export default SelectPhraseCard;
