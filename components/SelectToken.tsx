import React from 'react'
import { Button } from './ui/button'

const SelectToken = () => {
  return (
    <div className="flex flex-col space-y-4">
        <h1 className="text-xl">Select the token for wallet to be created</h1>
        <div className="flex space-x-4">
          <Button variant="outline">Solana</Button>
          <Button variant="outline">Ethereum</Button>
        </div>  
    </div>
  )
}

export default SelectToken