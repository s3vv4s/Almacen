import { Text, View } from "react-native";
import RootScreens from "./constants/RootScreens";
import { createNativeStackNavigator, NativeStackNavigationProp,  } from "@react-navigation/native-stack";
import { NavigationContainer, NavigationProp, StackNavigationState, useNavigation } from "@react-navigation/native";
import * as Orientation from "expo-screen-orientation";
import { useEffect } from "react";
import ContextProvider,{useContextState,ContextState} from "./app/global/Context";
import Home from "./app/ui/Home";
import AuthHandler from "./app/global/AuthHandler";
import Login from "./app/ui/Acceso/Login";



//type Navegacion = StackNavigationState<RootScreens>;

const Stack = createNativeStackNavigator<RootScreens>();
export default function App() {
//const navi = useNavigation<Navegacion>();

  useEffect(() => {
    Orientation.lockAsync(Orientation.OrientationLock.LANDSCAPE);

  }, []);
  return (
    <ContextProvider>

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
      </Stack.Navigator>
      </AuthHandler>
    </NavigationContainer>
    </ContextProvider>
  );
};
