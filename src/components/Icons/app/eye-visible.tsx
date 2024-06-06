import Svg, { SvgProps, Path } from 'react-native-svg';
const EyeVisible = (props: SvgProps) => (
  <Svg width={16} height={14} fill="none" {...props}>
    <Path
      stroke="#797980"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.839}
      d="m3.357 2.188 9.52 9.624M9.717 8.619a2.509 2.509 0 0 1-1.714.566 2.47 2.47 0 0 1-1.648-.714 2.085 2.085 0 0 1-.616-1.575c.03-.58.31-1.124.776-1.515"
    />
    <Path
      stroke="#797980"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.839}
      d="M4.904 3.751c-2.426 1.13-3.45 3.25-3.45 3.25s1.903 3.936 6.663 3.936a7.534 7.534 0 0 0 3.213-.688M12.914 9.248C14.21 8.18 14.782 7 14.782 7s-1.904-3.938-6.665-3.938a8.1 8.1 0 0 0-1.23.092"
    />
    <Path
      stroke="#797980"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.839}
      d="M8.564 4.851c.506.09.967.327 1.314.677.346.35.56.795.608 1.266"
    />
  </Svg>
);
export default EyeVisible;
