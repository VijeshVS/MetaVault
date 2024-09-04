import { Button } from '@/components/ui/button'
import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";

const page = () => {
  return (
    <main className='h-full flex flex-col space-y-4'>
        <Button className='w-fit self-end mt-8'>Create Wallet</Button>
        <Card className="w-full">
      <CardHeader>
        <CardTitle className='text-2xl'>Solana Wallet</CardTitle> 
        <CardDescription>Balance: 0.023$</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="w-full">
              <h1 className='font-semibold text-md'>Public Key: djiughajidhajndwawdadawdad</h1>
              <h1 className='font-semibold text-md'>Private Key: dknadjnakwndakldnaknwdawd</h1>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        
      </CardFooter>
    </Card>
    </main>
  )
}

export default page