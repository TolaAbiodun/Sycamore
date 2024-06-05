import Svg, { SvgProps, Path } from 'react-native-svg';
const ArrowUpRight = (props: SvgProps) => (
  <Svg width={8} height={8} fill="none" {...props}>
    <Path
      fill="#4F4B5C"
      d="M7.938.5v5.688a.437.437 0 1 1-.875 0V1.556L.81 7.81a.438.438 0 0 1-.62-.62L6.445.937H1.813a.438.438 0 0 1 0-.875H7.5A.437.437 0 0 1 7.938.5Z"
    />
  </Svg>
);
export default ArrowUpRight;
