import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCheck = (props: SvgProps) => (
  <Svg width={45} height={45} fill="none" {...props}>
    <Path
      fill="#5D1AB2"
      d="M22.5.722a21.778 21.778 0 1 0 0 43.556 21.778 21.778 0 0 0 0-43.556Zm0 40.834a19.056 19.056 0 1 1 0-38.113 19.056 19.056 0 0 1 0 38.113Z"
    />
    <Path
      fill="#5D1AB2"
      d="M36.111 14.47a1.361 1.361 0 0 0-1.919 0L19.084 29.51l-8.167-8.167a1.382 1.382 0 1 0-2.028 1.878L19.084 33.39 36.11 16.402a1.361 1.361 0 0 0 0-1.933Z"
    />
  </Svg>
);
export default SvgCheck;
