import {Dimensions, PixelRatio, Platform} from 'react-native';

export const WINDOW_WIDTH = Dimensions.get('window').width;
export const WINDOW_HEIGHT = Dimensions.get('window').height;

const guidelineBaseWidth = 414;
const OFFSET = 50;
export const NUM_COLUMNS = 4;
export const ITEM_WIDTH = WINDOW_WIDTH - OFFSET;
export const ITEM_HEIGHT = 165;

export const scaleSize = (size: number) =>
  (WINDOW_WIDTH / guidelineBaseWidth) * size;
export const scaleFont = (size: number) => size * PixelRatio.getFontScale();
export const TOAST_TOP_OFFSET = Platform.OS === 'ios' ? 60 : 10;
export const TOAST_BOTTOM_OFFSET = Platform.OS === 'ios' ? 30 : 10;
