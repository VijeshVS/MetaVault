import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import React from 'react'
import DarkModeSwitch from './DarkModeSwitch'

const Header = () => {
  return (
    <div className="flex justify-between">
        <div className="flex items-center space-x-3">
          <Avatar>
            <AvatarImage
              className="h-12 w-12 rounded-full"
              src="./icon.svg"
            />
            <AvatarFallback className="h-12 w-12 rounded-full">CN</AvatarFallback>
          </Avatar>
          <h1 className="text-3xl font-bold">MetaVault</h1>
        </div>
        <DarkModeSwitch />
      </div>
  )
}

export default Header