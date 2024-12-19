import React from "react";
import { Image, ImageSourcePropType } from "react-native";
import { EnumIcons,iconMap  } from "./EnumIcons";

const Icon = ({ name, size, color ="" } : { name:EnumIcons, size: number, color?: string }) => {
 const path:ImageSourcePropType = iconMap[name];
 return (
    <Image
      source={path}
      style={{ width: size, height: size,resizeMode:"stretch" ,tintColor:color}}
    />
  );
};

export default Icon;