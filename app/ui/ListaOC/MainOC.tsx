import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ListaViewPP from "../ListaOC/ListaOCViewPP";
import { Text } from "react-native";

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import RootScreens, { ListaOcArgs } from "@/constants/RootScreens";
import { Colors } from "@/constants/Colors";
type Root = {
  Prueba: ListaOcArgs,
  Texto:undefined
}
export type PropsNavegacionLista = NativeStackScreenProps<RootScreens, "TabsPrueba">;

const Tabs = createBottomTabNavigator<Root>();
const MainOC = (Props: PropsNavegacionLista) => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name="Prueba"
        component={ListaViewPP}
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
        }}
      />


      <Tabs.Screen
        name="Texto"

        options={{ title: "Añadir Orden de Compra",headerShown: false,
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