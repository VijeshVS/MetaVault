"use client"
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import React from 'react'
import DarkModeSwitch from './DarkModeSwitch'
import { Label } from './ui/label'
import { Lock } from 'lucide-react'
import { useRouter } from 'next/navigation'


const Header = () => {
  const router = useRouter();

  return (
    <div className="flex justify-between">
        <div className="flex items-center space-x-3">
          <Avatar>
            <Lock className='w-5 h-5 lg:w-8 lg:h-8'/>
          </Avatar>
          <Label onClick={()=>router.push('/')} className="text-2xl lg:text-3xl font-bold cursor-pointer">MetaVault</Label>
        </div>
        <DarkModeSwitch />
      </div>
  )
}

export default Header