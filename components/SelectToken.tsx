"use client"
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

const SelectToken = () => {
  const [token,setToken] = useState<string>("");
  const router = useRouter();

  useEffect(()=>{
    if(token != ""){
      // Create wallet

      // route to dashbaord
      router.push("/dashboard")
      toast.success(`${token} wallet has been created successfully`,{
        duration: 2000
      })
    }
  },[token])

  return (
    <div className="flex flex-col space-y-4">
        <h1 className="text-xl font-medium">Select the token for which the wallet has to be created</h1>
        <div className="flex space-x-4">
          <Button onClick={()=>setToken("Solana")} variant="outline">Solana</Button>
          <Button onClick={()=>setToken("Ethereum")} variant="outline">Ethereum</Button>
        </div>  
    </div>
  )
}

export default SelectToken