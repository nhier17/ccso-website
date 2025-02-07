"use client";

import { motion } from "framer-motion";
import React, { useState, ReactNode } from "react";

interface ToggleProps {
  title: string;
  children: ReactNode;
}

const Toggle: React.FC<ToggleProps> = ({ children, title }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <motion.div layout className="cursor-pointer" onClick={() => setToggle(!toggle)}>
      <motion.h4 layout className="text-xl text-light-100">{title}</motion.h4>
      {toggle ? children : null}
      <div className="bg-dark-300 h-[0.2rem] my-[2rem] w-full"></div>
    </motion.div>
  );
};

export default Toggle;
