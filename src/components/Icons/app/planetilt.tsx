import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const PlaneTilt = (props: SvgProps) => (
  <Svg width={23} height={22} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="#2196F3"
        d="M19.702 3.987a.672.672 0 0 0-.83-.83L2.724 8.053a.673.673 0 0 0-.105 1.256l7.201 3.41c.14.066.253.179.32.319l3.41 7.2a.672.672 0 0 0 1.256-.105l4.896-16.146Z"
        opacity={0.2}
      />
      <Path
        stroke="#2196F3"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.29}
        d="M19.702 3.987a.672.672 0 0 0-.83-.83L2.724 8.053a.673.673 0 0 0-.105 1.256l7.201 3.41c.14.066.253.179.32.319l3.41 7.2a.672.672 0 0 0 1.256-.105l4.896-16.146ZM10.008 12.852l4.338-4.338"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M.889.44h21.53v21.53H.889z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default PlaneTilt;
