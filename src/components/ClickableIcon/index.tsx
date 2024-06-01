import React from 'react';
import Link from 'next/link';
import { IconButton } from '@mui/material';

type ClickableIconProps = {
  icon: React.ReactNode;
  href: string;
};

const ClickableIcon: React.FC<ClickableIconProps> = ({ icon, href }) => {
  return (
    <Link href="/" passHref>
      <IconButton component="a" title="Domů">
        {icon}
      </IconButton>
    </Link>
  );
};

export default ClickableIcon;
