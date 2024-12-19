/*import { ImageSourcePropType } from "react-native";

export enum EnumIcons {
  LogoDif = "dif_logo",
}

export iconMap : {[key in EnumIcons] : ImageSourcePropType }={

  [EnumIcons.LogoDif]:require("@/assets/images/dif_logo.png"),
};

*/


import { ImageSourcePropType } from 'react-native';
// Define EnumIcons
export enum EnumIcons {
  LogoDif = "dif_logo",
  ArrowBarUp = "arrow_bar_up",
  ArrowBarDown = "arrow_bar_down"
};
// Mapear los valores de EnumIcons a las rutas de las imágenes
export const iconMap: { [key in EnumIcons]: ImageSourcePropType } = {
  [EnumIcons.LogoDif]: require('@/assets/images/dif_logo.png'),
  [EnumIcons.ArrowBarUp]: require('@/assets/images/arrow-bar-up.png'),
  [EnumIcons.ArrowBarDown]: require('@/assets/images/arrow-bar-down.png'),
};