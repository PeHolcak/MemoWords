import React from 'react'
import * as S from './styled'


type TextProps = {
  variant: S.Variant
  children: string
}

const Text: React.FC<TextProps> = ({ variant, children }) => {
  return <S.Text variant={variant}>{children}</S.Text>
}

export default Text
