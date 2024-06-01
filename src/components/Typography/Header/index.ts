import styled from 'styled-components'
import {
  TextType,
  T1Styles,
  T2Styles,
  T3Styles,
  T4Styles,
  T5Styles,
  T6Styles,
} from 'src/components/Typography/Text/styled'

export type HeaderType = Omit<TextType, 'variant'>

export const H1 = styled.h1<HeaderType>`
  ${T1Styles};
`

export const H2 = styled.h2<HeaderType>`
  ${T2Styles};
`

export const H3 = styled.h3<HeaderType>`
  ${T3Styles};
`

export const H4 = styled.h4<HeaderType>`
  ${T4Styles};
`

export const H5 = styled.h5<HeaderType>`
  ${T5Styles}
`

export const H6 = styled.h6<HeaderType>`
  ${T6Styles};
`