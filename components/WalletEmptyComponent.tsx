
import { WalletIcon } from 'lucide-react'
import React from 'react'
import { Label } from './ui/label'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'

const WalletEmptyComponent = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center space-y-4 mt-8">
        <WalletIcon className="w-20 h-20 text-gray-400" />
        <Label className="text-xl text-gray-400">No Wallets Available</Label>
        <Button onClick={()=>{
          router.push('/create-wallet')
        }} className="mt-4">
          Create Your First Wallet
        </Button>
      </div>
  )
}

export default WalletEmptyComponent