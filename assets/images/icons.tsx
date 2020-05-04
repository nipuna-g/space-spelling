import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {ViewStyle, StyleProp} from 'react-native';

export const HamburgerMenu = () => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z" fill="#232F6B" />
  </Svg>
);

export const ChevronRight = ({style}: {style: StyleProp<ViewStyle>}) => (
  <Svg style={style} width="12" height="20" viewBox="0 0 12 20" fill="none">
    <Path
      d="M-2.06209e-06 18.03L1.77 19.8L11.67 9.89999L1.77 -1.05786e-05L-3.48358e-06 1.76999L8.13 9.89999L-2.06209e-06 18.03Z"
      fill="#232F6B"
    />
  </Svg>
);
