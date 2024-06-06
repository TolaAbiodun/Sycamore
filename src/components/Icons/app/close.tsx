import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgClose = (props: SvgProps) => (
  <Svg width={16} height={16} fill="none" {...props}>
    <Path
      fill="#5D1AB2"
      d="m9.175 8 6.075-6.075A.833.833 0 0 0 14.075.75L8 6.825 1.925.742A.833.833 0 0 0 .75 1.917L6.825 8 .742 14.075a.834.834 0 1 0 1.175 1.175L8 9.175l6.075 6.075a.833.833 0 0 0 1.175-1.175L9.175 8Z"
    />
  </Svg>
);
export default SvgClose;
