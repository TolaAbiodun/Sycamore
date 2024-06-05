import * as React from 'react';
import Svg, { SvgProps, Rect, Path } from 'react-native-svg';
const Misc2 = (props: SvgProps) => (
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
    <Path
      stroke="#FF7600"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6.248 10h11.275M14.523 6.5l-2 11M10.523 6.5l-2 11M5.523 14h11.275"
    />
  </Svg>
);
export default Misc2;
