import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ListaViewPP from "../ListaOC/ListaOCViewPP";
import { Text } from "react-native";

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import RootScreens, { AlmacenType } from "@/constants/RootScreens";
import { Colors } from "@/constants/Colors";
import ListaOCViewPP from "../ListaOC/ListaOCViewPP";

type Root = {
  Prueba: AlmacenType,
  Texto: undefined
}
export type PropsNavegacionLista = NativeStackScreenProps<RootScreens, "EntradaMain">;

const Tabs = createBottomTabNavigator<Root>();
const MainOC = ({ navigation, route }: PropsNavegacionLista) => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name="Prueba"

        options={{
          title: "Lista de Movimientos", headerShown: false,
          tabBarActiveTintColor: Colors.main.primary,
          tabBarInactiveTintColor: Colors.main.card,
          tabBarIcon: ({ focused, color, size }) => {
            if (focused) {
              return <MaterialCommunityIcons name="home-city-outline" size={24} color={Colors.main.primary} />
            }
            return <MaterialCommunityIcons name="home-city-outline" size={24} color={Colors.main.secondary} />
          },
        }}>
        {() => <ListaOCViewPP almacen={route.params.almacen} tipo={route.params.tipo} />}
      </Tabs.Screen>
      <Tabs.Screen
        name="Texto"

        options={{
          title: "Añadir Orden de Compra", headerShown: false,
          tabBarActiveTintColor: Colors.main.primary,
          tabBarInactiveTintColor: Colors.main.card,
          tabBarIcon: ({ focused, color, size }) => {
            if (focused) {
              return <MaterialCommunityIcons name="playlist-plus" size={24} color={Colors.main.primary} />
            }
            return <MaterialCommunityIcons name="playlist-plus" size={24} color={Colors.main.secondary} />
          },
        }}
      >
        {() => <Text>Texto</Text>}
      </Tabs.Screen>


    </Tabs.Navigator>
  );
}
export default MainOC;