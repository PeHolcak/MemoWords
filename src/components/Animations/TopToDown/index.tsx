import React from 'react';
import { motion } from 'framer-motion';

const TopToDown: React.FC<React.PropsWithChildren> = ({ children }) => (
  <motion.div
    initial={{ y: '-100%', opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ type: 'spring', stiffness: 120 }}
  >
    {children}
  </motion.div>
);

export default TopToDown;
