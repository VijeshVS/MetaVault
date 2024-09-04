"use client"
import React, { useEffect, useState } from 'react'
import { Switch } from "@/components/ui/switch"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"

const DarkModeSwitch = () => {
  const { setTheme } = useTheme()
  const [val,setVal] = useState<boolean>(false);

  useEffect(()=>{
    if(val) 
      setTheme("light")
    else 
      setTheme("dark")
  },[val])

  return (
    <div className="flex items-center space-x-2">
      <Moon size={20}/>
      <Switch onCheckedChange={(state)=>{
        setVal(state)
      }} id="airplane-mode" />
      <Sun size={20}/>
    </div>
  )
}

export default DarkModeSwitch