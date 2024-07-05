import React, { useMemo, memo } from 'react';
import dynamic from 'next/dynamic';

import { getRandomNumber } from '@utils/numberUtils';
import AppLayout from '@components/Layouts/AppLayout';

import { Direction } from './MemoCard';

const MemoCard = dynamic(() => import('./MemoCard'), {
  ssr: false
});

const getRandomRotation = () => getRandomNumber(1, 4);

const MemoCardsList = memo(() => {
  const onSwipeHandler = (direction: Direction) => {
    console.log('word', direction);
    word.pop();
    console.log('word', direction);
  };

  const word = useMemo(
    () => [
      {
        id: 11,
        name: 'Jméno',
        age: 25,
        image:
          'https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg'
      },
      {
        id: 11,
        name: 'Jméno',
        age: 25,
        image:
          'https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg'
      },
      {
        id: 11,
        name: 'Jméno',
        age: 25,
        image:
          'https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg'
      },
      {
        id: 11,
        name: 'Jméno',
        age: 25,
        image:
          'https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg'
      },
      {
        id: 11,
        name: 'Jméno',
        age: 25,
        image:
          'https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg'
      },
      {
        id: 11,
        name: 'Jméno',
        age: 25,
        image:
          'https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg'
      }
    ],
    []
  );
  return word.map(word => (
    <MemoCard
      key={`word_${word.id}`}
      name="Jméno"
      age={25}
      onSwipe={onSwipeHandler}
      rotation={getRandomRotation()}
      image={
        'https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg'
      }
    />
  ));
});

export default MemoCardsList;
