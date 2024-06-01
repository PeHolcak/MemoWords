// components/Navbar.js
import React from 'react';
import { motion } from 'framer-motion';

const LeftToRight: React.FC<React.PropsWithChildren> = ({ children }) => (
  <motion.div
    initial={{ x: '-100%', opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ type: 'spring', stiffness: 120 }}
  >
    {children}
  </motion.div>
);

export default LeftToRight;
