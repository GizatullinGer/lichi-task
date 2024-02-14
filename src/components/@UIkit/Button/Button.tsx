'use client';
import { motion } from 'framer-motion';
import React from 'react';

type ButtonProps = {
  text: string;
  size: string;
  className?: string;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ text, size, className, onClick }) => {
  return (
    // <button className={`${className}`}>{text}</button>;
    <motion.button
      onClick={onClick}
      className={`bg-[transparrent] text-[#000000] border-[3px] border-[#000000] rounded-lg cursor-pointer ${className}`}
      whileHover={{ scale: 1.1, backgroundColor: '#000000', color: '#ffffff', borderRadius: '16px' }}
      whileTap={{ scale: 0.9 }}
      style={(() => {
        switch (size) {
          case 's':
            return { padding: '5px 10px', fontSize: '12px' };
          case 'm':
            return { padding: '10px 20px', fontSize: '16px' };
          default:
            return {};
        }
      })()}
    >
      {text}
    </motion.button>
  );
};

export default Button;
