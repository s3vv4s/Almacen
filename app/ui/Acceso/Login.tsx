import { Text, View, Pressable } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import RootScreens from "@/constants/RootScreens";
import { useContextState } from "@/app/global/Context";


type Props = NativeStackScreenProps<RootScreens, "Login">;

const Login = ({navigation,route}: Props) => {

const {setContext,stateContext} = useContextState();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Login</Text>
      <Pressable
        onPress={() => {
          navigation.replace("Home");
          setContext({
            usuario: "traba",
            isValidated: true,
            refreshToken: "123456",
            token: "123456",
            ubicacion: "Madrid",
          });
          navigation.navigate("Home")}}
      >
        <Text>Es login</Text>
        </Pressable>
    </View>);
};

export default Login;