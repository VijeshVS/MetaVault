"use client"
import React from 'react'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { motion } from "framer-motion";

const WelcomeNote = () => {
  const router = useRouter();

  return (
    <motion.div initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.8,
      ease: "easeInOut",
    }} className='flex flex-col space-y-3 text-center items-center'>
        <h1 className='text-5xl font-bold italic'>Welcome to MetaVault</h1>
        <h1 className='text-lg text-gray-500'>The most secured crypto wallet</h1>
        <Button onClick={()=>{
          const phraseString: string | null = localStorage.getItem('phrases')
          if(phraseString == null) {
            router.push('/create-phrase');
            toast.info("Generate phrases to get started",{
              duration:1500
            });
            return;
          }
          router.push('/dashboard')
        }} className='w-fit'>Get started</Button>
    </motion.div>
  )
}

export default WelcomeNote