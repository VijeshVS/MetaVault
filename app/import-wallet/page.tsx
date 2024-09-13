"use client";
import ImportWallet from "@/components/ImportWallet";
import React from "react";
import { motion } from "framer-motion";

const Page = () => {
  return (
    <motion.main
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
      className="mt-16"
    >
      <ImportWallet />
    </motion.main>
  );
};

export default Page;
