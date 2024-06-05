import * as React from 'react';
import Svg, { SvgProps, Rect, Path } from 'react-native-svg';
const Data = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Rect width={24} height={24} fill="#6D51E4" rx={12} />
    <Path
      fill="#fff"
      d="M14.5 8.5v8a.5.5 0 0 1-1 0v-8a.5.5 0 0 1 1 0Zm2-3a.5.5 0 0 0-.5.5v10.5a.5.5 0 0 0 1 0V6a.5.5 0 0 0-.5-.5Zm-5 5a.5.5 0 0 0-.5.5v5.5a.5.5 0 0 0 1 0V11a.5.5 0 0 0-.5-.5ZM9 13a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 1 0v-3A.5.5 0 0 0 9 13Zm-2.5 2.5a.5.5 0 0 0-.5.5v.5a.5.5 0 0 0 1 0V16a.5.5 0 0 0-.5-.5Z"
    />
  </Svg>
);
export default Data;
