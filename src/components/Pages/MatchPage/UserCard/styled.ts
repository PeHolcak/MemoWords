import styled from 'styled-components';
import Card from '@mui/material/Card';


export const StyledCard = styled(Card)`
  width: 300px;
  height: 400px;
  overflow: hidden;
  position: relative;

  cursor: move;
`;

export const UserInfo = styled.div`
  position: absolute;
  bottom: 0;
  color: white;
  width: 100%;
  text-align: left;
  padding: 10px;
  background-image: linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0));
`;