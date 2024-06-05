import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const Reciept = (props: SvgProps) => (
  <Svg width={22} height={23} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="#F6B200"
        d="M2.691 18.247V5.464a.673.673 0 0 1 .673-.673h14.802a.673.673 0 0 1 .673.673v12.783l-2.691-1.345-2.692 1.345-2.69-1.345-2.692 1.345-2.691-1.345-2.692 1.345Z"
        opacity={0.2}
      />
      <Path
        stroke="#F6B200"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.29}
        d="M6.729 9.5h8.073M6.729 12.191h8.073M2.691 18.247V5.464a.673.673 0 0 1 .673-.673h14.802a.673.673 0 0 1 .673.673v12.783l-2.691-1.345-2.692 1.345-2.69-1.345-2.692 1.345-2.691-1.345-2.692 1.345Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 .754h21.53v21.53H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default Reciept;
