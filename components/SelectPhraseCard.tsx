"use client"
import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
const {generateMnemonic, mnemonicToSeedSync} = require("bip39") ;



import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
const SelectPhraseCard = () => {
  const [phraseWords, setPhraseWords] = useState<string[]>(Array(12).fill(""));
  const [submitDisabled,setSubmitDisabled] = useState(true)
  const router = useRouter()

  function confirmPhrases(){
    localStorage.setItem('phrases',JSON.stringify(phraseWords))
    router.push('/dashboard')
    toast.success("Phrases set successfully")
  }

  function fillPhrases(){
    const mnemonic:string = generateMnemonic();
    const words:string[] = mnemonic.split(" ");
    setPhraseWords(words)
  }

  useEffect(()=>{
    let state = false
    for(let i = 0;i<phraseWords.length;i++) if(phraseWords[i] == "") state = true
    setSubmitDisabled(state)
  },[phraseWords])

  return (
    <Card className="w-[550px]">
      <CardHeader>
        <CardTitle>Enter Custom Phrases</CardTitle>
        <CardDescription>
          Your wallets are dervied from these phrases. Keep it a secret 🤫
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid grid-cols-4 w-full items-center gap-4">
            {phraseWords.map((word, index) => (
              <Input
                key={index}
                id={`name-${index}`}
                value={word}
                onChange={(e) => {
                  setPhraseWords((prevPhrases) => {
                    const updatedWords = [...prevPhrases];
                    updatedWords[index] = e.target.value;
                    return updatedWords;
                  });
                }}
              />
            ))}
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button onClick={confirmPhrases} disabled={submitDisabled}>Submit</Button>
        <Button onClick={()=>fillPhrases()}>Generate Random</Button>
      </CardFooter>
    </Card>
  );
};

export default SelectPhraseCard;
