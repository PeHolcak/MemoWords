// Footer.js
import React from 'react';
import Link from 'next/link';
import { Grid, Box, Typography, IconButton } from '@mui/material';
import styled from 'styled-components';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const FooterContainer = styled.footer`
  background-color: #111;
  color: white;
  padding: 20px 0;
`;

const LogoContainer = styled.div`
  text-align: center;
  padding-bottom: 20px;

  & img {
    max-width: 100px; // Adjust the size as needed
  }
`;

const FooterGrid = styled(Grid)`
  && {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
  }
`;

const StyledLink = styled.a`
  color: white;
  text-decoration: none;
  margin-bottom: 8px;

  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterGrid container spacing={4}>
        <Grid item xs={12} sm={4}>
          <Box marginBottom={2}>
            <Typography variant="h6">Creators</Typography>
          </Box>
          <Link href="/creators" passHref><StyledLink>Petr Holčák</StyledLink></Link>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box marginBottom={2}>
            <Typography variant="h6">Platform</Typography>
          </Box>
          <Link href="/creators" passHref><StyledLink>Creators</StyledLink></Link>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box marginBottom={2}>
            <Typography variant="h6">Platform</Typography>
          </Box>
          <Link href="/creators" passHref><StyledLink>Creators</StyledLink></Link>
        </Grid>
      </FooterGrid>
      <Box textAlign="center" marginTop={4}>
        <IconButton color="inherit" aria-label="YouTube">
          <YouTubeIcon />
        </IconButton>
        <IconButton color="inherit" aria-label="Twitter">
          <TwitterIcon />
        </IconButton>
        <IconButton color="inherit" aria-label="Instagram">
          <InstagramIcon />
        </IconButton>
      </Box>
      <Box textAlign="center" marginTop={2}>
        <Typography variant="body2">© FameBit, LLC. All Rights Reserved. Stay Famous™</Typography>
      </Box>
    </FooterContainer>
  );
};

export default Footer;