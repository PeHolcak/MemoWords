import React from 'react';
import Link from 'next/link';
import type { NextPage } from 'next';

import PageWrapper from "@components/PageWrapper"

const BazaarPage: NextPage = () => {
  return (
    <PageWrapper title="Bazaar" type="private">
      <main>
        <h1>Vítejte na stránce O nás</h1>
        <p>Toto je ukázková stránka O nás vytvořená s použitím Next.js a TypeScriptu.</p>
        <p>Next.js usnadňuje vývoj webových aplikací s předrenderovanými stránkami, což zlepšuje výkon a optimalizaci pro vyhledávače.</p>
        <p><Link href="/">Zpět na hlavní stránku</Link></p>
      </main>
    </PageWrapper>
  );
};

export default BazaarPage;   