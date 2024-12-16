import { View, Text } from "react-native";
import ListaViewModel from "./ListaViewModel";
import { useEffect } from "react";
import RootScreens from "@/constants/RootScreens";

import type { NativeStackScreenProps } from "@react-navigation/native-stack";



type Props = NativeStackScreenProps<RootScreens, "ListaAlmacenes">;
const ListaView = ({navigation,route}: Props) => {
  const {listaAlmacenes,setListaAlmacenes,getListaAlmacenes} = ListaViewModel();
  useEffect(()=>{
    (async() => {
      await getListaAlmacenes();
    })
  },[]);

  return (
    <View>
      <Text>{listaAlmacenes.length}</Text>
    </View>
  );
};

export default ListaView;