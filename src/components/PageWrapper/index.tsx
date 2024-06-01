import React from 'react';
import Head from 'next/head';
import * as S from './styled';

type PageWrapperProps = React.PropsWithChildren<{
  title: string
  type: "private" | "public" | "onlyPublic"
}>

const PageWrapper: React.FC<PageWrapperProps> = ({children, title}) => {
  return (
    <S.PageWrapperContainer>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Poznejte více o našem týmu a naší misi." />
      </Head>
      {children}
    </S.PageWrapperContainer>
  );
};

export default PageWrapper;