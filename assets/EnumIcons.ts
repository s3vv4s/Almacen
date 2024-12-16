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
};
// Mapear los valores de EnumIcons a las rutas de las imágenes
export const iconMap: { [key in EnumIcons]: ImageSourcePropType } = {
  [EnumIcons.LogoDif]: require('@/assets/images/dif_logo.png'),

};