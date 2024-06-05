import * as React from 'react';
import Svg, { SvgProps, Rect, Path } from 'react-native-svg';
const Sim = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Rect width={24} height={24} fill="#2166F3" rx={12} />
    <Path
      fill="#fff"
      d="m17.354 9.146-3.5-3.5A.5.5 0 0 0 13.5 5.5h-6a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-8a.499.499 0 0 0-.146-.354ZM16.5 17.5h-9v-11h5.793L16.5 9.707V17.5ZM15 11H9a.5.5 0 0 0-.5.5V16a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5v-4.5a.5.5 0 0 0-.5-.5Zm-.5 4.5h-1v-2a.5.5 0 0 0-1 0v2h-1v-2a.5.5 0 0 0-1 0v2h-1V12h5v3.5Z"
    />
  </Svg>
);
export default Sim;
