import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Money = (props: SvgProps) => (
  <Svg width={17} height={24} fill="none" {...props}>
    <Path
      fill="#FF7600"
      d="M5.742 6.065S.01 14.55 0 18.724c0 2.774.707 5.136 4.368 5.218 3.66.083 8.432.052 8.432.052s5.16-1.178 2.718-7.529c-2.157-5.608-5.464-10.372-5.464-10.372l-4.312-.028Z"
    />
    <Path
      fill="#FF7600"
      d="M12.395.59c-.061-.415-.566-.597-.985-.59-1.471.024-2.737 1.278-4.208 1.202-.924-.044-1.728-.61-2.577-.978A1.742 1.742 0 0 0 3.98.052a.707.707 0 0 0-.592.264c-.208.292-.078.695.059 1.028.681 1.626 1.81 3.241 2.628 4.806l4.255.175a7.817 7.817 0 0 1 1.697-4.92c.194-.24.413-.511.368-.815Z"
    />
    <Path
      fill="#41454C"
      d="M10.455 18.36h-.42v1.154H9.002l-.712-1.153h-1.34v1.153h-.956V18.36h-.413v-.9h.413v-.92h-.413v-.896h.413v-1.223h1l.75 1.223H9.08v-1.223h.955v1.223h.42v.896h-.42v.92h.42v.9Zm-1.376-.899v-.92h-.785l.563.92h.222Zm-1.344 0-.57-.92H6.95v.92h.785ZM5.842 8.45c.014-.342.07-.682.165-1.011.056-.339.152-.67.285-.985-.014.342-.07.682-.165 1.01-.056.34-.151.67-.285.986ZM6.186 11.112a3.796 3.796 0 0 1 .044-.721A31.158 31.158 0 0 1 6.8 6.954c.04-.241.104-.478.188-.707-.015.238-.05.474-.104.707-.082.471-.183 1.063-.294 1.713-.111.651-.198 1.24-.274 1.719a4.48 4.48 0 0 1-.13.726ZM9.21 8.84a6.098 6.098 0 0 1-.255-1.195 6.21 6.21 0 0 1-.137-1.214c.124.389.207.79.248 1.195.088.4.137.806.144 1.214ZM5.767 3.01c.391.368.742.778 1.044 1.222.333.421.621.877.858 1.36-.03.019-.432-.575-.957-1.287-.526-.712-.969-1.27-.945-1.294ZM7.082 1.842c.07.179.121.364.153.554.095.389.203.841.326 1.343.122.502.25.943.35 1.337.063.182.106.37.13.561a2.486 2.486 0 0 1-.212-.535A19.546 19.546 0 0 1 7.44 3.77a15.17 15.17 0 0 1-.29-1.358 2.416 2.416 0 0 1-.068-.57ZM12.33 20.218c-.015-.014.117-.125.275-.344.207-.279.347-.601.41-.943a2.31 2.31 0 0 0-.07-1.035c-.08-.257-.166-.405-.15-.415.11.108.19.24.237.387a2.034 2.034 0 0 1-.352 2.067.943.943 0 0 1-.35.283ZM2.983 17.583c-.012 0-.111-.087-.213-.285-.13-.26-.19-.55-.176-.84.008-.29.09-.574.235-.825.116-.188.224-.275.236-.266.012.01-.066.12-.158.309a2.003 2.003 0 0 0-.063 1.586c.055.103.102.21.139.32Z"
    />
    <Path
      fill="#1E2229"
      d="m5.63 6.528-.155.109a3.3 3.3 0 0 0 1.232.236c-.045.889-.14 1.775-.287 2.654.372-.866.703-1.749.992-2.647.897.12 1.81.004 2.647-.338a40.826 40.826 0 0 0-4.429-.014Z"
      opacity={0.3}
    />
    <Path
      fill="#41454C"
      d="m10.184 5.473-4.746-.028a.563.563 0 0 0-.566.56v.1a.563.563 0 0 0 .56.566l4.744.028a.563.563 0 0 0 .567-.56V6.04a.563.563 0 0 0-.56-.567Z"
    />
  </Svg>
);
export default Money;