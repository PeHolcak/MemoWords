import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

import { Typography, Button } from '@mui/material';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import { IconButton } from '@mui/material';

import { routes } from '@constants/routes';
import MemoCardsList from '@components/MemoCardsList';

import * as S from './styled';

type ArticleTryOutProps = {};

const ArticleTryOut: React.FC<ArticleTryOutProps> = ({}) => {
  return (
    <S.MemoCardsListWrapper>
      <MemoCardsList />
    </S.MemoCardsListWrapper>
  );
};

export default ArticleTryOut;
