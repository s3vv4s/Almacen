import RootScreens from "@/constants/RootScreens";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import { useContextState } from "@/app/global/Context";
import { useContextPermisos } from "../global/ContextPermisos";


type Props = NativeStackScreenProps<RootScreens, "Home">;
const Home = ({ navigation }: Props) => {

const {setContext,stateContext} = useContextState();
const {statePermisos} = useContextPermisos();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home</Text>
      <Text>{statePermisos?.almacenes[1]}</Text>
    </View>
  );
};

export default Home;