import Svg, { SvgProps, Path } from 'react-native-svg';
const CaretDown = (props: SvgProps) => (
  <Svg width={18} height={10} fill="none" {...props}>
    <Path
      fill="#8D8A95"
      d="m17.031 1.53-7.5 7.5a.75.75 0 0 1-1.061 0l-7.5-7.5A.75.75 0 1 1 2.03.47l6.97 6.97L15.97.47a.75.75 0 0 1 1.061 1.06Z"
    />
  </Svg>
);
export default CaretDown;
