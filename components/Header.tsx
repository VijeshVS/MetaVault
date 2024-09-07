import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import React from 'react'
import DarkModeSwitch from './DarkModeSwitch'
import { Label } from './ui/label'

const Header = () => {
  return (
    <div className="flex justify-between">
        <div className="flex items-center space-x-3">
          <Avatar>
            <AvatarImage
              className="h-12 w-12 rounded-full"
              src="./icon.svg"
            />
          </Avatar>
          <Label className="text-3xl font-bold">MetaVault</Label>
        </div>
        <DarkModeSwitch />
      </div>
  )
}

export default Header