import { Text, View } from "react-native";
import RootScreens from "./constants/RootScreens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import * as Orientation from "expo-screen-orientation";
import Login from "./app/ui/Acceso/Login";
import { useEffect } from "react";


const Stack = createNativeStackNavigator<RootScreens>();
export default function App() {

  useEffect(() => {
    Orientation.lockAsync(Orientation.OrientationLock.LANDSCAPE);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
};