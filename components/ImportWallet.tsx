import React from 'react'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Button } from './ui/button'


const ImportWallet = () => {
  return (
    <div  className='flex flex-col justify-center space-y-4 h-full mt-24'>
        <Label className='self-start font-semibold text-3xl'>Enter Private Key</Label>
        <Input type='password' placeholder='Enter key'/>
        <Button className='w-fit'>Add wallet</Button>        
    </div>
  )
}

export default ImportWallet