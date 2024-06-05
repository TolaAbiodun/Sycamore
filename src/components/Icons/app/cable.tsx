import * as React from 'react';
import Svg, { SvgProps, Rect, Path } from 'react-native-svg';
const Cable = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Rect width={24} height={24} fill="#FF7600" rx={12} />
    <Path
      fill="#fff"
      d="M17.486 11.386a.498.498 0 0 0-.313-.354l-3.6-1.35.916-4.584a.5.5 0 0 0-.856-.437l-7 7.5a.5.5 0 0 0 .188.812l3.602 1.35-.914 4.579a.5.5 0 0 0 .856.437l7-7.5a.5.5 0 0 0 .12-.453Zm-6.651 5.989.654-3.274a.5.5 0 0 0-.313-.566l-3.302-1.24 5.289-5.667-.654 3.274a.5.5 0 0 0 .313.566l3.3 1.238-5.287 5.669Z"
    />
  </Svg>
);
export default Cable;
