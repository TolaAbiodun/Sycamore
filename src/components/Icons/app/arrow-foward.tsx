import Svg, { SvgProps, Path } from 'react-native-svg';
const ArrowFoward = (props: SvgProps) => (
  <Svg width={8} height={8} fill="none" {...props}>
    <Path
      fill="#fff"
      d="M7.757 4.199 4.884 7.07a.312.312 0 1 1-.442-.442l2.34-2.339H.464a.313.313 0 1 1 0-.625H6.78L4.442 1.326a.313.313 0 0 1 .442-.442l2.873 2.873a.313.313 0 0 1 0 .442Z"
    />
  </Svg>
);
export default ArrowFoward;
