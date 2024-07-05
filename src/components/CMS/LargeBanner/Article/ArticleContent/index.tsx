import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

import * as S from './styled';
import ArticleFirstSlide from './ArticleFirstSlide';
import ArticleTryOut from './ArticleTryOut';

type ArticleContentProps = {
  header: string;
  description: string;
  badgeText: string;
};

const ArticleContent: React.FC<ArticleContentProps> = ({
  header,
  description,
  badgeText
}) => {
  const [showTryOut, setShowTryOut] = useState(false);

  const onTryOutClickHandler = () => {
    setShowTryOut(true);
  };

  console.log('showTryOut', showTryOut);

  return (
    <S.Content>
      <AnimatePresence>
        {!showTryOut && (
          <motion.div
            key="firstSlide"
            initial={{ y: 0, opacity: 1 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{
              y: '-100%',
              opacity: 0,
              position: 'absolute',
              left: '5rem'
            }}
            transition={{ duration: 1 }}
          >
            <ArticleFirstSlide
              header={header}
              description={description}
              badgeText={badgeText}
              showTryOut={showTryOut}
              onTryOutClickHandler={onTryOutClickHandler}
            />
          </motion.div>
        )}
        {showTryOut && (
          <motion.div
            key="tryOutSlide"
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '100%', opacity: 0, position: 'absolute' }}
            transition={{ duration: 1 }}
          >
            <ArticleTryOut />
          </motion.div>
        )}
      </AnimatePresence>

      <S.Paggination>
        <S.PagginationButton
          onClick={() => setShowTryOut(false)}
          isActive={!showTryOut}
        />
        <S.PagginationButton
          onClick={() => setShowTryOut(true)}
          isActive={showTryOut}
        />
      </S.Paggination>
    </S.Content>
  );
};

export default ArticleContent;
