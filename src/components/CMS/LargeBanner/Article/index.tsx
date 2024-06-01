import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { Typography, Button } from '@mui/material';

import * as S from './styled';

const variants = {
  initial: {
    x: '-100vw', // Start from off-screen left
    opacity: 0,
    transition: { duration: 1, type: 'spring' } // Use spring for smoother effect
  },
  visible: {
    x: 0, // Move to original position
    opacity: 1,
    transition: { duration: 1, type: 'spring' } // Consistent transition type and duration
  },
  hidden: {
    x: '100vw', // Exit to off-screen right
    opacity: 0,
    transition: { duration: 1, type: 'spring' }
  }
};

type ArticleProps = {
  header: string;
  description: string;
  badgeText: string;
  variantType: 'initial' | 'visible' | 'hidden';
};

const Article: React.FC<ArticleProps> = ({
  header,
  description,
  badgeText,
  variantType
}) => {
  return (
    <AnimatePresence>
      {variantType === 'visible' && (
        <motion.div
          initial="hidden"
          animate={variantType}
          exit="hidden"
          variants={variants}
          transition={{ duration: 1 }}
          style={{
            width: '100%',
            margin: '20px 0'
          }}
        >
          <S.Content>
            {badgeText && <S.Badge>{badgeText}</S.Badge>}
            <Typography variant="h3" component="h1" gutterBottom>
              {header}
            </Typography>
            <Typography variant="body1" gutterBottom mb={4}>
              {description}
            </Typography>

            <Button variant="contained" color="primary">
              Shop Now
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              style={{ marginLeft: '10px' }}
            >
              Learn More
            </Button>
          </S.Content>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Article;
