import Svg, { SvgProps, Path } from 'react-native-svg';
const ChevronFoward = (props: SvgProps) => (
  <Svg width={7} height={13} fill="none" {...props}>
    <Path
      stroke="#333"
      strokeLinecap="round"
      d="M.5 1c6.26 5.5 6.986 5.278 5.058 6.889C3.63 9.5 3.06 10 .5 12"
    />
  </Svg>
);
export default ChevronFoward;
