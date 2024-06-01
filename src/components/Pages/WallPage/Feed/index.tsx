import { Avatar, Typography } from "@mui/material";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

// import { NS } from "src/";

import * as S from "./styled";
import { offerTypeColors } from "@styles/colors";

type FeedProps = {
  feedType:
    | "ServiceOffer" // Nabídka služeb
    | "MaterialRequest" // Poptávka po materiálech
    | "ToolMaterialSale" // Prodej nástrojů a materiálů
    | "ProjectCollaboration" // Spolupráce na projektech
    | "WorkshopsTraining" // Workshopy a školení
    | "WorkShowcase" // Ukázky práce
    | "EventAnnouncement" // Oznámení o eventech
    | "AdviceTips" // Rady a tipy
    | "ToolMaterialReview" // Recenze nástrojů a materiálů
    | "JobVacancy"; // Volná místa a nabídky práce
};

const Feed: React.FC<FeedProps> = ({ feedType }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const { t } = useTranslation("wall");

  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  return (
    <>
      <S.Card color={offerTypeColors[feedType]}>
        <S.UserInfo>
          <Avatar src="/path/to/user/image.jpg" />
          <S.FeedDetailInfo>
            <S.UserName variant="subtitle2">Jane Smith</S.UserName>
            <S.OfferName variant="subtitle2">{feedType}</S.OfferName>
          </S.FeedDetailInfo>
        </S.UserInfo>
        <S.ReviewText>
          I absolutely love this brand! The clothes are not only stylish but
          also very comfortable. The quality is top-notch, and the prices are
          reasonable.
        </S.ReviewText>
        <S.CommentsButton onClick={handleOpen}>
          {/* Tady bude počet komentářů dynamicky získáván */}5 comments
        </S.CommentsButton>
      </S.Card>

      <S.StyledModal
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {/* Zde můžete přidat obsah modálního okna s komentáři */}
        <div>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Comments
          </Typography>
          dsad
          {/* Zde bude seznam komentářů */}
        </div>
      </S.StyledModal>
    </>
  );
};

export default Feed;
