import styled from "styled-components";
import { Typography, Box } from "@mui/material";

export const EntryLayoutWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #1976d2;
  color: white;
`;

export const EntryLayoutContainer = styled.div`
  padding: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  flex: 1;

  max-width: 600px;
`;

export const Logo = styled.div`
  width: 100px; 
  height: 100px; 
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  & svg {
    font-size: 2rem;
  }
`;

export const ActionButton = styled(Typography)`
  text-align: center;
`;
