import RootScreens from "@/constants/RootScreens";
import { Text, View, Image } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { EnumIcons } from "@/assets/EnumIcons";
import CardGradiente from "../components/CardGradiente";
import { Colors } from "@/constants/Colors";

type Props = NativeStackScreenProps<RootScreens, "MenuES">;

const MenuES = ({ navigation , route}: Props) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", flexDirection: "row", padding: 20, gap: 20 }}>
      <CardGradiente icono={EnumIcons.LogoDif} activate={() => { navigation.navigate("ListaAlmacenes",{tipo:"E"}) }}>
        <Text style={{
          fontSize: 30,
          fontWeight: "bold",
          textAlign: "center",
          color: Colors.main.primary
        }}>
          Entradas de Almacen
        </Text>
      </CardGradiente>
      {/* Segunada parte */}
      <CardGradiente icono={EnumIcons.LogoDif} activate={() => { navigation.navigate("ListaAlmacenes",{tipo:"S"}) }}>
        <Text style={{
          fontSize: 30,
          fontWeight: "bold",
          textAlign: "center",
          color: Colors.main.primary
        }}>
          Salidas de Almacen
        </Text>
      </CardGradiente>
    </View>
  );
};



export default MenuES;