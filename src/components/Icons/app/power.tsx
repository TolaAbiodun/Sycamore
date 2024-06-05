import * as React from 'react';
import Svg, { SvgProps, Rect, Path } from 'react-native-svg';
const Power = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Rect width={24} height={24} fill="#EB0086" rx={12} />
    <Path
      fill="#fff"
      d="m17.366 11.841-7 7.5a.5.5 0 0 1-.856-.437l.917-4.583-3.602-1.353a.5.5 0 0 1-.188-.812l7-7.5a.5.5 0 0 1 .856.437l-.919 4.588 3.602 1.35a.5.5 0 0 1 .188.81h.002Z"
    />
  </Svg>
);
export default Power;
