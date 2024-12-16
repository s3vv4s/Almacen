import { Text, View } from "react-native";
import RootScreens from "./constants/RootScreens";
import { createNativeStackNavigator, NativeStackNavigationProp,  } from "@react-navigation/native-stack";
import { NavigationContainer, NavigationProp, StackNavigationState, useNavigation } from "@react-navigation/native";
import * as Orientation from "expo-screen-orientation";
import { useEffect } from "react";
import ContextProvider from "./app/global/Context";
import Home from "./app/ui/Home";
import AuthHandler from "./app/global/AuthHandler";
import Login from "./app/ui/Acceso/Login";
import ContextPermisos from "./app/global/ContextPermisos";
import MenuES from "./app/ui/MenusEntradasSalidas/MenuES";
import ListaView from "./app/ui/ListaAlmacenes/ListaView";

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
              name="Home"
              component={Home}
              />
              <Stack.Screen
                name="MenuES"
                component={MenuES}
              />
              <Stack.Screen
                name="ListaAlmacenes"
                component={ListaView}
                />
        </Stack.Navigator>
        </AuthHandler>
      </NavigationContainer>
      </ContextPermisos>
    </ContextProvider>
  );
};
