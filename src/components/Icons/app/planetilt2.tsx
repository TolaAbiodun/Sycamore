import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const PlaneTilt2 = (props: SvgProps) => (
  <Svg width={16} height={16} fill="none" {...props}>
    <Path
      fill="#26C165"
      d="M12.828 2.19 1.457 5.392a.488.488 0 0 0-.073.915l5.221 2.47c.103.048.185.13.232.233l2.47 5.221a.488.488 0 0 0 .916-.073l3.202-11.37a.482.482 0 0 0-.598-.598Z"
      opacity={0.2}
    />
    <Path
      stroke="#26C165"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.008}
      d="M12.828 2.19 1.457 5.392a.488.488 0 0 0-.073.915l5.221 2.47c.103.048.185.13.232.233l2.47 5.221a.488.488 0 0 0 .916-.073l3.202-11.37a.482.482 0 0 0-.598-.598v0ZM6.766 8.851l2.757-2.757"
    />
  </Svg>
);
export default PlaneTilt2;
