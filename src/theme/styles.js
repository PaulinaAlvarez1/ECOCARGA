import { Platform } from 'react-native';

export const PRIMARY_COLOR = '#589CB8';
export const PRIMARY_FONT =
  Platform.OS !== 'ios' ? 'AirbnbCerealBook' : 'OpenSans';
export const PRIMARY_FONT_BOLD =
  Platform.OS !== 'ios' ? 'AirbnbCerealBold' : 'OpenSans-Bold';
export const PRIMARY_FONT_LIGHT =
  Platform.OS !== 'ios' ? 'AirbnbCerealLight' : 'OpenSans';
export const PRIMARY_FONT_MEDIUM =
  Platform.OS !== 'ios' ? 'AirbnbCerealMedium' : 'OpenSans';