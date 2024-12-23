import { View, Text, Pressable, FlatList } from "react-native";
import ListaViewModel from "./ListaViewModel";
import { useEffect } from "react";
import RootScreens from "@/constants/RootScreens";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Colors } from "@/constants/Colors";
import { NavigationProp, StackActions, useNavigation } from "@react-navigation/native";

type Props = NativeStackScreenProps<RootScreens, "ListaAlmacenes">;

const ListaView = ({ navigation, route }: Props) => {

  //const navigation = useNavigation<NavigationProp<Screen>>();
  const { listaAlmacenes, setListaAlmacenes, getListaAlmacenes } = ListaViewModel();

  useEffect(() => {
    getListaAlmacenes();
  }, []);
  return (
    <View>

      <Pressable onPress={async () => await getListaAlmacenes()}>
        <Text>ListaView</Text>
      </Pressable>
      <FlatList
        numColumns={3}
        data={listaAlmacenes}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => navigation.navigate("ListaOc", { tipo: route.params.tipo, almacen:item.almacenID })}
            style={{
              flex: 1,
              borderColor: Colors.main.primary,
              borderWidth: 1,
              margin: 10,
              padding: 10,
              borderRadius: 10,

            }}>
            <Text>{item.descripcion}</Text>
            <Text>{item.almacenID}</Text>
          </Pressable>
        )}
      />
    </View>
  );
};

export default ListaView;
