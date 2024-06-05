import { GRAY_DARK } from '@/styles/colors';
import * as React from 'react';
import Svg, { Circle, G, Path, Defs, ClipPath } from 'react-native-svg';
const Contribution = ({ active }: { active: boolean }) => (
  <Svg width={35} height={35} fill="none">
    <Circle cx={17.996} cy={17.332} r={17.332} fill="#F6F7F7" />
    <G clipPath="url(#a)">
      <Path
        fill={active ? '#26C165' : '#41454C'}
        d="M25.783 14.504h.308a1.346 1.346 0 0 1 1.346 1.346v2.692a1.346 1.346 0 0 1-1.346 1.345h-.673l-1.523 4.264a.673.673 0 0 1-.634.447h-1.07a.673.673 0 0 1-.634-.447l-.32-.9h-5.769l-.32.9a.673.673 0 0 1-.634.447h-1.07a.673.673 0 0 1-.634-.447l-1.102-3.086A6.729 6.729 0 0 1 16.67 9.794h2.69a6.73 6.73 0 0 1 6.422 4.71Z"
        opacity={0.2}
      />
      <Path fill="#41454C" d="M22.39 17.196a1.01 1.01 0 1 0 0-2.019 1.01 1.01 0 0 0 0 2.019Z" />
      <Path
        stroke={active ? '#26C165' : GRAY_DARK}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.292}
        d="M16.67 12.486h3.364M25.417 9.794h-6.056M7.924 18.542a2.019 2.019 0 0 1 2.019-2.02"
      />
      <Path
        stroke={active ? '#26C165' : GRAY_DARK}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.292}
        d="M25.783 14.504h.308a1.346 1.346 0 0 1 1.346 1.346v2.692a1.346 1.346 0 0 1-1.346 1.345h-.673l-1.523 4.264a.673.673 0 0 1-.634.447h-1.07a.673.673 0 0 1-.634-.447l-.32-.9h-5.769l-.32.9a.673.673 0 0 1-.634.447h-1.07a.673.673 0 0 1-.634-.447l-1.102-3.086A6.729 6.729 0 0 1 16.67 9.794h2.69a6.73 6.73 0 0 1 6.422 4.71Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M7.25 6.43h21.533v21.533H7.25z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default Contribution;
