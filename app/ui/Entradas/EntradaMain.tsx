import { Colors } from "@/constants/Colors";
import { View , Text} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import RootScreens from "@/constants/RootScreens";

import { Movimiento } from "@/app/ui/ListaOC/ListaOCModels";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import EntradasView from "./EntradasView";

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { MainEntrada } from "@/models/MainEntrada";
import { HeaderApiOC } from "@/models/HeaderEntradaSalida";

type Props = NativeStackScreenProps<RootScreens, "ControlMain">;

type TabsEntrada = {
  Entrada: Movimiento,
  ListaProductos: undefined,
  EvidenciasEntrada: undefined,
}

/**
 * En este tab se configura los datos desde el movimiento. Ya que solo se necesita una orden de compra por entrada
 * solo se necesitan tres vistas:
 * 1.-Vista general de la orden de compra(Entrada)
 * 2.-Vista de los productos que se van a recibir
 * 3.-Vista de las evidencias de entrada
 * @param Movimiento Los datos generales de la OC,
 * @returns
 */


const EntradaMain = ({ navigation, route }: Props) => {
  const Tabs = createBottomTabNavigator<TabsEntrada>();
  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name="Entrada"
        options={{
          title: "Entradas",
          headerShown: false,
          tabBarActiveTintColor: Colors.main.primary,
          tabBarInactiveTintColor: Colors.main.secondary,
          tabBarIcon: ({ focused, color, size }) => {
            return <MaterialCommunityIcons name="home-city-outline" size={24} color={focused ? Colors.main.primary : Colors.main.secondary} />
          }
        }} >
        {() => <EntradasView movimiento={route.params.movimiento}  naviga={navigation} almacen={route.params.almacen} />}
      </Tabs.Screen>
       <Tabs.Screen
        name="ListaProductos"
        options={{
          title: "Lista de Productos",
          headerShown: false,
          tabBarActiveTintColor: Colors.main.primary,
          tabBarInactiveTintColor: Colors.main.secondary,
          tabBarIcon: ({ focused, color, size }) => {
            return <MaterialCommunityIcons name="home-city-outline" size={24} color={focused ? Colors.main.primary : Colors.main.secondary} />
          }
        }} >
        {() => <Text>Lista</Text>}
      </Tabs.Screen>
       <Tabs.Screen
        name="EvidenciasEntrada"
        options={{
          title: "Evidencias",
          headerShown: false,
          tabBarActiveTintColor: Colors.main.primary,
          tabBarInactiveTintColor: Colors.main.secondary,
          tabBarIcon: ({ focused, color, size }) => {

            return <MaterialCommunityIcons name="home-city-outline" size={24} color={focused ? Colors.main.primary : Colors.main.secondary} />
          }
        }} >
        {() => <Text>Evidencias</Text>}
      </Tabs.Screen>

    </Tabs.Navigator >

  );
}




export default EntradaMain;