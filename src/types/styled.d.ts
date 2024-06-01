import 'styled-components';
import { StylesType } from '@styles/index';

declare module 'styled-components' {
  export interface DefaultTheme extends StylesType {}
}