import Svg, { SvgProps, Path } from 'react-native-svg';

const EyeCross = (props: SvgProps) => (
  <Svg width={14} height={10} fill="none" {...props}>
    <Path
      fill="#4F4B5C"
      d="M13.525 4.823c-.02-.043-.483-1.071-1.512-2.1C10.64 1.35 8.908.624 7 .624c-1.907 0-3.64.725-5.013 2.097-1.03 1.03-1.495 2.06-1.512 2.1a.438.438 0 0 0 0 .356c.02.043.483 1.07 1.512 2.1C3.36 8.65 5.093 9.375 7 9.375c1.908 0 3.64-.725 5.013-2.097 1.03-1.03 1.493-2.057 1.512-2.1a.439.439 0 0 0 0-.355ZM7 8.5c-1.683 0-3.154-.612-4.371-1.818A7.3 7.3 0 0 1 1.367 5 7.292 7.292 0 0 1 2.63 3.318C3.846 2.112 5.317 1.5 7 1.5c1.683 0 3.154.612 4.371 1.818A7.3 7.3 0 0 1 12.635 5c-.394.736-2.111 3.5-5.635 3.5Zm0-6.125a2.625 2.625 0 1 0 0 5.25 2.625 2.625 0 0 0 0-5.25ZM7 6.75a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5Z"
    />
  </Svg>
);
export default EyeCross;
