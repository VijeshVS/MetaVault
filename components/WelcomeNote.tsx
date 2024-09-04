import React from 'react'
import { Button } from './ui/button'

const WelcomeNote = () => {
  return (
    <div className='flex flex-col space-y-3 text-center items-center'>
        <h1 className='text-5xl font-bold italic'>Welcome to MetaVault</h1>
        <h1 className='text-lg text-gray-500'>The most secured crypto wallet</h1>
        <Button className='w-fit'>Get started</Button>
    </div>
  )
}

export default WelcomeNote