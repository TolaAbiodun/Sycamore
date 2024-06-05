/* eslint-disable react/react-in-jsx-scope */
import Svg, {SvgProps, Path} from 'react-native-svg';
const SvgBackButton = (props: SvgProps) => (
  <Svg width={16} height={13} fill="none" {...props}>
    <Path
      fill="#000"
      d="M.47 7.03a.75.75 0 0 1 0-1.06l4.773-4.773a.75.75 0 1 1 1.06 1.06L2.061 6.5l4.242 4.243a.75.75 0 0 1-1.06 1.06L.47 7.03ZM16 7.25H1v-1.5h15v1.5Z"
    />
  </Svg>
);
export default SvgBackButton;
