import SelectPhraseCard from '@/components/SelectPhraseCard'
import { Label } from '@radix-ui/react-label'
import React from 'react'

const Page = () => {
  return (
    <main className="h-full flex flex-col space-y-4 justify-center items-center">
        <SelectPhraseCard/>
    </main>
  )
}

export default Page