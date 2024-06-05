import * as React from 'react';
import Svg, { SvgProps, Circle, Path } from 'react-native-svg';
const Profile = (props: SvgProps) => (
  <Svg width={46} height={46} fill="none" {...props}>
    <Circle cx={23.442} cy={22.766} r={21.766} fill="#DEF6E8" stroke="#26C165" strokeWidth={1.5} />
    <Path
      stroke="#26C165"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M23.306 25.7a6.138 6.138 0 1 0 0-12.277 6.138 6.138 0 0 0 0 12.277Z"
    />
    <Path
      stroke="#26C165"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.002 31.071a10.742 10.742 0 0 1 18.607 0"
    />
  </Svg>
);
export default Profile;
