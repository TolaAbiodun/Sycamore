import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const PlusCircle = (props: SvgProps) => (
  <Svg width={22} height={22} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="#26C165"
        d="M10.765 18.839a8.074 8.074 0 1 0 0-16.147 8.074 8.074 0 0 0 0 16.147Z"
        opacity={0.2}
      />
      <Path
        stroke="#26C165"
        strokeMiterlimit={10}
        strokeWidth={1.29}
        d="M10.765 18.839a8.074 8.074 0 1 0 0-16.147 8.074 8.074 0 0 0 0 16.147Z"
      />
      <Path
        stroke="#26C165"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.29}
        d="M7.4 10.766h6.729M10.766 7.4v6.729"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h21.53v21.53H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default PlusCircle;
