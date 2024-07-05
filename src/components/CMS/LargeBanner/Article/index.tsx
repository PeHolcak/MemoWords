import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

import ArticleContent from './ArticleContent';

const variants = {
  initial: {
    x: '-100vw',
    opacity: 0,
    transition: { duration: 1, type: 'spring' }
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, type: 'spring' }
  },
  hidden: {
    x: '100vw',
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
          <ArticleContent
            header={header}
            description={description}
            badgeText={badgeText}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Article;
