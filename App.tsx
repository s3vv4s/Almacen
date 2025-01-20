import RootScreens from "./constants/RootScreens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import * as Orientation from "expo-screen-orientation";
import { useEffect } from "react";
import ContextProvider from "./app/global/Context";

import AuthHandler from "./app/global/AuthHandler";
import Login from "./app/ui/Acceso/Login";
import ContextPermisos from "./app/global/ContextPermisos";
import MenuES from "./app/ui/MenusEntradasSalidas/MenuES";

import ListaAlmacenView from "./app/ui/ListaAlmacenes/ListaAlmacenView";
import ListaOCView from "./app/ui/ListaOC/ListaOCView";
import EntradaMain from "./app/ui/Entradas/EntradaMain";


const Stack = createNativeStackNavigator<RootScreens>();

export default function App() {

  useEffect(() => {
    Orientation.lockAsync(Orientation.OrientationLock.LANDSCAPE);
  }, []);

  return (
    <ContextProvider>
      <ContextPermisos>
          <NavigationContainer>
            <AuthHandler>
              <Stack.Navigator initialRouteName="Login" >
                <Stack.Screen
                  name="Login"
                  component={Login}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="MenuES"
                  component={MenuES}
                />
                <Stack.Screen
                  name="ListaAlmacenes"
                  component={ListaAlmacenView}
                  options={{ title: "Lista de Almacenes" }}
                />
                <Stack.Screen
                  name="ListaOc"
                  component={ListaOCView}
                  options={{ title: "Control de Movimientos" }}
                />
                <Stack.Screen
                  name="ControlMain"
                  component={EntradaMain}
                  options={{ title: "Control de Movimientos" }}
                />

              </Stack.Navigator>
            </AuthHandler>
          </NavigationContainer>

      </ContextPermisos>
    </ContextProvider>
  );
};
      {/*
                <Stack.Screen
                  name="Entrada"
                  component={MainOC}
                  options={{ title: "Control de Movimientos" }}
                />
                <Stack.Screen
                  name="Entradasm"
                  component={EntradaMain}
                  options={{ title: "Entradas" }}
                />*/}