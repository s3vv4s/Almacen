import { View, Text} from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import RootScreens from "@/constants/RootScreens";
import CardBusquedaView from "../components/CardBusqueda/CardBusquedaView";
import BusquedaViewModel from "../components/CardBusqueda/BusquedaViewModel";
import { useEffect } from "react";

type Props = NativeStackScreenProps<RootScreens, "ListaOc">;

const ListaOCView = ({navigation,route}: Props) => {
  const {
    argMovimientos,
    setArgMovimientos,
    getMovimientos,
    setMovimientos,
    showBusqueda,
    setShowBusqueda
  } = BusquedaViewModel(route.params.almacen,route.params.tipo);
  useEffect(()=>{

  },[setArgMovimientos]);
  return (
    <View style={{flex:1, flexDirection:"column"}}>
      <CardBusquedaView
        setBusqueda={setArgMovimientos}
        argBusqueda={argMovimientos}
        getMovimientos={getMovimientos}
        setShowBusqueda={setShowBusqueda}
        showBusqueda={showBusqueda}

        />
      <View style={{flex: !showBusqueda ? 10:3, borderColor:"red", borderWidth:1}}></View>
    </View>
  );
};

export default ListaOCView;
