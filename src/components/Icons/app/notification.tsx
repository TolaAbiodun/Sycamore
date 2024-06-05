import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Notification = (props: SvgProps) => (
  <Svg width={25} height={25} fill="none" {...props}>
    <Path
      fill="#F9FAFA"
      stroke="#fff"
      d="M5.987 10.156a6.522 6.522 0 0 1 6.558-6.53c3.583.027 6.466 3.007 6.466 6.618v.694c0 3.566.748 5.687 1.444 6.89a.281.281 0 0 1-.242.422H4.785a.282.282 0 0 1-.241-.422c.696-1.203 1.443-3.324 1.443-6.89v-.782Zm14.617 8.488a.781.781 0 0 1-.39.106l.39-.106Z"
      opacity={0.2}
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5.487 10.156a7.022 7.022 0 0 1 7.061-7.03c3.867.028 6.963 3.241 6.963 7.118v.694c0 3.496.732 5.527 1.377 6.64a.782.782 0 0 1-.674 1.172H4.784a.781.781 0 0 1-.673-1.172c.644-1.113 1.376-3.144 1.376-6.64v-.782ZM9.375 18.75v.781a3.125 3.125 0 1 0 6.25 0v-.781"
    />
    <Path fill="#FF7600" d="M18.5 8.375a1.875 1.875 0 1 0 0-3.75 1.875 1.875 0 0 0 0 3.75Z" />
    <Path
      stroke="#FF7600"
      strokeMiterlimit={10}
      strokeWidth={0.444}
      d="M18.5 8.375a1.875 1.875 0 1 0 0-3.75 1.875 1.875 0 0 0 0 3.75Z"
    />
  </Svg>
);
export default Notification;
