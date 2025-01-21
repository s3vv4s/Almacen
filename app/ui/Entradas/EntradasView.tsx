
import RootScreens from "@/constants/RootScreens";
import { View, Text, Pressable,StyleSheet, ScrollView, TextInput, SafeAreaView } from "react-native";

import SlidebarAction from "./SlideBarAction";

import { create } from 'zustand'
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Movimiento } from "../ListaOC/ListaOCModels";
import CardMovimiento from "../components/HeaderEntrada/CardMovimiento";
import { Almacen } from "../ListaAlmacenes/ListaModel";
import { FlatList } from "react-native-reanimated/lib/typescript/Animated";
import { MainEntrada } from "@/models/MainEntrada";
import useEntradaState from "./EntradaState";
import { HeaderApiOC } from "@/models/HeaderEntradaSalida";
import { Colors } from "@/constants/Colors";

/**
 * Componete donde llegara el movimiento en el cual se encutran los datos necesarios para buscar en la api y obtener sus datos necesarios
 * Se llamara el header principal del orden de compra
 * @param movimiento Datos generales del Movimiento donde estan todos los datos necesarios para mostrar
 */

type Prop = {
  movimiento: Movimiento,
  almacen: Almacen,
  naviga: NativeStackNavigationProp<RootScreens>
}

const EntradasView = ({ movimiento, naviga, almacen }: Prop) => {

  const {header} = useEntradaState();
  return (

    <ScrollView style={{ flex: 1, display: "flex", flexDirection: "column" }}>

      <CardMovimiento movimientoId={movimiento.movimientoID} almacenId={movimiento.almacenID} almacen={almacen} />
      <SafeAreaView style={{ flex: 2 }}>
        <View style={{
          borderColor:Colors.main.primary,
          borderTopWidth:0,
          borderLeftWidth:2,
          borderEndWidth:2,
          borderBottomWidth:6,
          borderBottomLeftRadius: 20,
          flex: 1, flexDirection: "column", justifyContent: "space-around", paddingTop: 40,padding:20, marginTop:-30}}>
          <Text style={{color:Colors.main.primary,fontSize:20}}>Observaciones:</Text>
        <TextInput
          multiline={true}
          numberOfLines={6}
          style={{
            borderColor:Colors.main.primary,
            borderWidth:1,
            margin:6,
            textAlignVertical: 'top',
            padding:10,
            borderRadius:6,
          }}
        />
        </View>

        <CardMainEntrada header={header}/>
      </SafeAreaView>
      <SlidebarAction />
    </ScrollView>
  );
};

const CardMainEntrada = ({ header }: { header: HeaderApiOC|undefined }) => {
  return (
    <View style={{
      flex: 1, flexDirection: "column" }}>

        <Text style={styles.textH} >Orden de Compra seleccionada:</Text>
        <Text>{ header?.cve_ordenCompra}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  textH: {
    fontSize: 20,
    color: Colors.main.primary,
  },
  textT: {
    fontSize: 18,
  }
});
export default EntradasView;