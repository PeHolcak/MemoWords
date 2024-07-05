import React from 'react';
import Link from 'next/link';

import Button, { ButtonProps } from '@components/Buttons/Button';

type ButtonLinkProps = Omit<ButtonProps, 'onClick'> & { link: string };

const ButtonLink: React.FC<ButtonLinkProps> = ({ variant, children, link }) => {
  return (
    <Link href={link}>
      <Button variant={variant}>{children}</Button>
    </Link>
  );
};

export default ButtonLink;
