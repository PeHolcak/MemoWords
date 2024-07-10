import React from 'react';
import type { NextPage } from 'next';

import AppLayout from '@components/Layouts/AppLayout';
import Header from './Header';

const CoursesPage: NextPage = () => {
  return (
    <AppLayout alignChildren="start">
      <Header />
    </AppLayout>
  );
};

export default CoursesPage;
