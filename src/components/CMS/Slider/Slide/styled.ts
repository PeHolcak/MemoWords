import styled from 'styled-components';

import {devices} from "@constants/screens-conf"

export const BannerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  /* background-color: #5c6bc0; */
  color: white;

  margin: 0.5rem 0;
  padding: 0 1rem;

  border-radius: ${({theme})=>theme.borderRadius.primary};

  height: 100%;
  width: 100%;

  
  @media ${devices.tablet} {
    margin: 1rem 0;
    padding: 0 3rem;
  }

  @media ${devices.laptop} {
    flex-direction: row;
    gap: 4rem;
    margin: 2rem 0;
    padding: 0 6rem;
  }
`;

export const TextSection = styled.div`
  @media ${devices.laptop} {
    flex: 1;
  }
`;

export const Title = styled.span`
  font-weight: 900;
  font-size: 42px;
  color: black;
`;

export const Description = styled.p`
  margin-top: 16px;

  font-size: 16px;
  color: black;
`;

export const ImageWrapper = styled.div`
  max-width: 350px;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 4px;
`;
