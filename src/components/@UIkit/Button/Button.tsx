'use client';
import { motion } from 'framer-motion';
import React from 'react';

type ButtonProps = {
  text: string;
  className?: string;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ text, className, onClick }) => {
  return (
    // <button className={`${className}`}>{text}</button>;
    <motion.button
      onClick={onClick}
      className={`${className}`}
      whileHover={{ scale: 1.1, backgroundColor: '#000000', color: '#ffffff', borderRadius: '16px' }}
      whileTap={{ scale: 0.9 }}
      style={{
        background: 'transparrent',
        color: '#000000',
        padding: '10px 20px',
        border: '3px solid #000000',
        borderRadius: '8px',
        cursor: 'pointer',
      }}
    >
      {text}
    </motion.button>
  );
};

export default Button;
