import React, { useMemo } from 'react';
import { useSwipeable } from 'react-swipeable';
import dynamic from 'next/dynamic';

import { getRandomNumber } from '@utils/numberUtils';
import AppLayout from '@components/Layouts/AppLayout';

import { Direction } from './UserCard';

const UserCard = dynamic(() => import('./UserCard'), {
  ssr: false
});

const getRandomRotation = () => getRandomNumber(1, 4);

const MatchPage = () => {
  const onSwipeHandler = (direction: Direction) => {
    console.log('users', direction);
    users.pop();
    console.log('users', direction);
  };

  let users = useMemo(
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
  return (
    <AppLayout>
      {users.map(user => (
        <UserCard
          key={`user_${user.id}`}
          name="Jméno"
          age={25}
          onSwipe={onSwipeHandler}
          rotation={getRandomRotation()}
          image={
            'https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg'
          }
        />
      ))}
    </AppLayout>
  );
};

export default MatchPage;
