
import RootScreens from "@/constants/RootScreens";
import { View, Text, Pressable, StyleSheet, ScrollView, TextInput, SafeAreaView, ViewStyle } from "react-native";

import SlidebarAction from "./SlideBarAction";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Movimiento } from "../ListaOC/ListaOCModels";
import CardMovimiento from "../components/HeaderEntrada/CardMovimiento";
import { Almacen } from "../ListaAlmacenes/ListaModel";
import useEntradaState from "./EntradaState";
import { HeaderApiOC } from "@/models/HeaderEntradaSalida";
import { Colors } from "@/constants/Colors";
import { useEffect, useState } from "react";
import Feather from '@expo/vector-icons/Feather';
import ModalCondicion from "../components/ModalCondicion";
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
  const { header, setHeader } = useEntradaState();
  useEffect(() => { }, [header]);

  return (

    <ScrollView style={{ flex: 1, display: "flex", flexDirection: "column" }}>

      <CardMovimiento movimientoId={movimiento.movimientoID} almacenId={movimiento.almacenID} almacen={almacen} />
      <SafeAreaView style={{ flex: 2 }}>
        <View style={{
          borderColor: Colors.main.primary,
          borderTopWidth: 0,
          borderLeftWidth: 2,
          borderEndWidth: 2,
          borderBottomWidth: 6,
          borderBottomLeftRadius: 20,
          flex: 1, flexDirection: "column", justifyContent: "space-around", paddingTop: 40, padding: 20, marginTop: -30
        }}>
          <Text style={{ color: Colors.main.primary, fontSize: 20 }}>Observaciones:</Text>
          <TextInput
            placeholder="Escribe aqui tus observaciones"
            multiline={true}
            numberOfLines={6}
            style={{
              borderColor: Colors.main.primary,
              borderWidth: 1,
              margin: 6,
              textAlignVertical: 'top',
              padding: 10,
              borderRadius: 6,
            }}
          />
        </View>
        {header != undefined ? (
          <CardMainEntrada header={header} deleteHeader={setHeader} style={{
            borderColor: Colors.main.primary,
            borderWidth: 2,
            margin: 10,
            borderRadius: 10,
          }} />
        ) : (
          <Text
            style={{
              color: Colors.main.primary,
              fontSize: 20,
              margin: 20,
              textAlign: "center"
            }}>
            No hay roden de compra seleccionada
          </Text>
        )}
      </SafeAreaView>
      <SlidebarAction />
    </ScrollView>
  );
};
//Este componte si puede ser general
const CardMainEntrada = ({ header, style, deleteHeader }: { header: HeaderApiOC | undefined, style: ViewStyle | undefined, deleteHeader: (arg: HeaderApiOC | undefined) => void }) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <View style={[
      { flex: 1, flexDirection: "row" },
      style
    ]}>
      <ModalCondicion task={`¿Quieres eliminar la Orden de Compra? \n ${header?.cve_ordenCompra}`}  setMostrarTask={setShowModal} mostrarTask={showModal} action={()=>deleteHeader(undefined)}/>
      <Pressable
        onPress={() => setShowModal(true)}
        style={{
          flexDirection: "column", padding: 10, justifyContent: "center",
          backgroundColor: Colors.main.primary,
          alignItems: "center"
        }}>
        <Feather name="trash" size={24} color={Colors.main.card} />
        <Text style={{ color: Colors.main.card }}>Elimnar O.C.</Text>
      </Pressable>
      <View style={{ flex: 1, flexDirection: "column" }} >
        <View style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}>
          <View style={{ flex: 1, flexDirection: "column", padding: 10 }}>
            <Text style={styles.textH} >Orden de Compra:</Text>
            <Text>{header?.cve_ordenCompra}</Text>
          </View>
          <View style={{ flex: 1, flexDirection: "column", padding: 10 }}>
            <Text style={styles.textH} >Tipo de adquisición:</Text>
            <Text>{header?.tipoAdquisicion}</Text>
          </View>

          <View style={{ flex: 1, flexDirection: "column", padding: 10 }}>
            <Text style={styles.textH} >Proveedor:</Text>
            <Text>{header?.proveedor}</Text>
          </View>

          <View style={{ flex: 1, flexDirection: "column", padding: 10 }}>
            <Text style={styles.textH} >Requisición:</Text>
            <Text>{header?.cve_requisicion}</Text>
          </View>

        </View>
        <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-around" }}>
          <View style={{ flexDirection: "column", padding: 10, }}>
            <Text style={styles.textH} >Fecha:</Text>
            <Text>{header?.fecha?.toString()}</Text>
          </View>
          <View style={{ flexDirection: "column", padding: 10 }}>
            <Text style={styles.textH} >Montos:</Text>
            <Text>  Original ${header?.total}</Text>
            <Text>  Ajuste   ${header?.ajusteOrdenCompra}</Text>
            <Text>TOTAL  ${header?.total != undefined && header?.ajusteOrdenCompra != undefined ? header?.total - header?.ajusteOrdenCompra : 0}</Text>
          </View>
        </View>
      </View>

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