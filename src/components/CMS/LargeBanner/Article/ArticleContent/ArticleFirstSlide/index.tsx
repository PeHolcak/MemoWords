import React from 'react';
import { useRouter } from 'next/router';

import { Typography, Button } from '@mui/material';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import { IconButton } from '@mui/material';

import { routes } from '@constants/routes';

import * as S from './styled';

type ArticleFirstSlideProps = {
  header: string;
  description: string;
  badgeText: string;
  showTryOut: boolean;
  onTryOutClickHandler: () => void;
};

const ArticleFirstSlide: React.FC<ArticleFirstSlideProps> = ({
  header,
  description,
  badgeText,
  showTryOut,
  onTryOutClickHandler
}) => {
  const router = useRouter();
  const redirectToFaq = () => {
    router.push(routes.faq);
  };

  return (
    <S.ArticleFirstSlideWrap>
      <S.ContentWrapper>
        <IconButton onClick={redirectToFaq}>
          <QuestionAnswerIcon />
        </IconButton>
      </S.ContentWrapper>
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
        onClick={onTryOutClickHandler}
      >
        {showTryOut ? 'Show More' : 'Hide More'}
      </Button>
    </S.ArticleFirstSlideWrap>
  );
};

export default ArticleFirstSlide;
