import * as React from 'react';
import Svg, { SvgProps, Rect, G, Path, Defs, ClipPath } from 'react-native-svg';
const Misc1 = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Rect width={23.9} height={23.9} x={0.05} y={0.05} fill="#FFE4CC" rx={3.95} />
    <Rect
      width={23.9}
      height={23.9}
      x={0.05}
      y={0.05}
      stroke="#FF7600"
      strokeWidth={0.1}
      rx={3.95}
    />
    <G
      stroke="#FF7600"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.8}
      clipPath="url(#a)"
    >
      <Path d="m6 11.5 6-6 6 6h-3v2H9v-2H6ZM15 17.5H9M15 15.5H9" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M4 4h16v16H4z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default Misc1;
