import styled from 'styled-components';


export const FeedWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start; 
  justify-content: center;
  gap: 20px; 

  @media (max-width: 768px) {
    justify-content: space-around; // Adjust spacing for smaller screens
  }

`;