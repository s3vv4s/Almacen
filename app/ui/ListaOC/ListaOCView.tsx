import { View, Text} from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import RootScreens from "@/constants/RootScreens";

type Props = NativeStackScreenProps<RootScreens, "ListaAlmacenes">;

const ListaOCView = ({navigation,route}: Props) => {
  return (
    <View>
      <Text>ListaOCView</Text>
    </View>
  );
};

export default ListaOCView;
