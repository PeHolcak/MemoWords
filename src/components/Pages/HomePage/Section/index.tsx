import React from "react";

import * as S from "./styled";

export type SizeType = "max" | "sm";

type SectionProps = React.PropsWithChildren<{ size: SizeType, disableTopOffset?: boolean }>;

const Section: React.FC<SectionProps> = ({ children, size, disableTopOffset }) => {
  return <S.SectionWrapper $size={size} $disableTopOffset={disableTopOffset}>{children}</S.SectionWrapper>;
};

export default Section;
