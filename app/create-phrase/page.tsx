"use client"
import SelectPhraseCard from "@/components/SelectPhraseCard";
import React from "react";
import {motion} from "framer-motion"
const Page = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
      className="h-full flex flex-col space-y-4 justify-center items-center"
    >
      <SelectPhraseCard />
    </motion.div>
  );
};

export default Page;
