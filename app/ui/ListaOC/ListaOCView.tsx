import { View, Text, ScrollView, FlatList ,Pressable} from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import RootScreens from "@/constants/RootScreens";
import CardBusquedaView from "../components/CardBusqueda/CardBusquedaView";
import BusquedaViewModel from "../components/CardBusqueda/BusquedaViewModel";
import React, { useEffect } from "react";
import AppAccordeon, { MvvMAcordeon } from "./Accordion";
import { Colors } from "@/constants/Colors";


type Props = NativeStackScreenProps<RootScreens, "ListaOc">;

const ListaOCView = ({ navigation, route }: Props) => {
  const {
    argMovimientos,
    setArgMovimientos,
    getMovimientos,
    setMovimientos,
    showBusqueda,
    setShowBusqueda,
    movimientos,
  } = BusquedaViewModel(route.params.almacen, route.params.tipo);

  const { setIsExpanded, isExpanded,  width , setMaxP,setMinP } = MvvMAcordeon();

 const resize = () => {
  setIsExpanded(!isExpanded);
};

  useEffect(() => {
    setMaxP(4);
    setMinP(10);
  }, []);

  return (

    <View style={{ flex: 1, flexDirection: "column" }}>
      <CardBusquedaView
        setBusqueda={setArgMovimientos}
        argBusqueda={argMovimientos}
        getMovimientos={getMovimientos}
        setShowBusqueda={setShowBusqueda}
        showBusqueda={showBusqueda}
        callbackActivate={resize}

      />
    <AppAccordeon width={width} >
        <FlatList
          numColumns={4}
          data={movimientos?.lista}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => navigation.navigate("ListaOc", { tipo: route.params.tipo, almacen: item.almacenID })}
              style={{
                flex: 1,
                borderColor: Colors.main.primary,
                borderWidth: 1,
                margin: 10,
                padding: 10,
                borderRadius: 10,
              }}>
              <Text>{item.movimientoID}</Text>
              <Text>{item.almacenID}</Text>
            </Pressable>
          )}
        />


    </AppAccordeon>



    </View>

  );
};

export default ListaOCView;
