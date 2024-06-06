import Svg, { SvgProps, G, Circle, Path } from 'react-native-svg';
const Alert = (props: SvgProps) => (
  <Svg width={50} height={50} viewBox="0 0 64 64" {...props}>
    <G fillRule="evenodd" clipRule="evenodd">
      <Circle cx={31.999} cy={49} r={3} />
      <Path d="M32 0C14.327 0 0 14.327 0 32s14.327 32 32 32 32-14.327 32-32S49.673 0 32 0zm0 62C15.458 62 2 48.542 2 32S15.458 2 32 2s30 13.458 30 30-13.458 30-30 30z" />
      <Path d="M31.119 42h1.762a1 1 0 0 0 1-.961l1.079-28a1 1 0 0 0-1-1.039h-3.92a1 1 0 0 0-1 1.038l1.08 28a1 1 0 0 0 .999.962z" />
    </G>
  </Svg>
);
export default Alert;
