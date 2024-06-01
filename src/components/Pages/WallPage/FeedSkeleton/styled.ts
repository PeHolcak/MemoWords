import styled from "styled-components";
import { Avatar, Button, Modal, Typography } from "@mui/material";
import { motion } from "framer-motion";

export const FeedDetailInfo = styled.div``;

type CardProps = { color: string };

export const Card = styled(motion.div)<CardProps>`
  display: flex;
  flex-direction: column;
  gap: 8px;

  background: ${({ color }) => color};

  user-select: none;

  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);

  flex: 1 1 300px;
  max-width: 300px;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const UserName = styled(Typography)`
  font-weight: 600;
`;

export const OfferName = styled(Typography)``;

export const ReviewText = styled(Typography)`
  color: #333;
`;

export const CommentsButton = styled(Button)`
  align-self: end;

  text-transform: none;
  color: #999;
  padding: 0;
  font-size: 0.875rem;
`;

export const StyledModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
