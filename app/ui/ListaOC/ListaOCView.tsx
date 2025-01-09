import { View, Text,FlatList, Pressable } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import RootScreens from "@/constants/RootScreens";
import CardBusquedaView from "../components/CardBusqueda/CardBusquedaView";
import BusquedaViewModel from "../components/CardBusqueda/BusquedaViewModel";
import React, { useEffect } from "react";

import { Colors } from "@/constants/Colors";

import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import ViewCOntrolOC from "./ListaOCViewModel";
import { Movimiento } from "./ListaOCModels";
import ModalCondicion from "../components/ModalCondicion";
type Props = NativeStackScreenProps<RootScreens, "ListaOc">;

const ListaOCView = ({ navigation, route }: Props) => {
  const {
    argMovimientos,
    setArgMovimientos,
    getMovimientos,
    showBusqueda,
    setShowBusqueda,
    movimientos,
  } = BusquedaViewModel(route.params.almacen.almacenID, route.params.tipo);

  const { removeMovimiento } = ViewCOntrolOC();

  useEffect(() => {

  }, []);

  const RemoverMovimiento = async (item: Movimiento) => {
    await removeMovimiento(item,route.params.tipo);
  };

  return (

    <View style={{ flex: 1, flexDirection: "column" }}>
      <ModalCondicion/>
      <CardBusquedaView
        tipoMovimiento={route.params.tipo}
        txtAlmacen={route.params.almacen.descripcion}
        setArgBusqueda={setArgMovimientos}
        argBusqueda={argMovimientos}
        getMovimientos={getMovimientos}
        setShowBusqueda={setShowBusqueda}
        showBusqueda={showBusqueda}
      />
      <View style={{ flex: 2 }}>
        <FlatList
          numColumns={3}
          data={movimientos?.lista}
          keyExtractor={(item, index) => index.toString()}
          style={{
            flex: 1,
          }}
          renderItem={({ item }) => (
            <CardOrdenCompra item={item}
            resetMovimientos={getMovimientos}
            removeMovimiento={RemoverMovimiento} />
          )}
        />
      </View>
    </View>
  );
};
type Item = {
  item: Movimiento;
 removeMovimiento: (selectedMovimiento: Movimiento) => Promise<void>;
 resetMovimientos: () => Promise<void>;
};
const CardOrdenCompra = ({ item, removeMovimiento, resetMovimientos}: Item) => {
  return (
    <Pressable
    onPress={() => {
      console.log("se presiono");
    }}
      style={{
        flex: 1,
        borderColor: Colors.main.primary,
        borderWidth: 1,
        margin: 10,
        padding: 4,
        borderRadius: 10,
        flexDirection: "column",
        gap: 4,
        maxWidth: "30%"

      }}>

      <Row direction="row">
        <Text style={{ fontSize: 16, fontWeight: "bold", color: Colors.main.primary, }}>
          Clave
        </Text>
        <Text
          style={{

          }}>{item.movimientoID}</Text>
      </Row>
      <Row direction="row">
        <Text style={{ fontSize: 16, fontWeight: "bold", color: Colors.main.primary, }}>
          Fecha de Creación
        </Text>
        <Text>{item.fechaCreacion}</Text>
      </Row>

      <Row direction="row">
        <Text style={{ fontSize: 16, fontWeight: "bold", color: Colors.main.primary }}>
          Orden de Compra(O.C.)
        </Text>
        <Text style={{ marginLeft: 20, flexShrink: 1 }}>{item.ordenesCompra}</Text>
      </Row>
      <Row direction="row">
        <Text style={{ fontSize: 16, fontWeight: "bold", color: Colors.main.primary, }}>
          Estatus
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: "bold",
            backgroundColor: item.status === "NUEVO" ? Colors.main.primary : Colors.main.green,
            color: "white",
            padding: 4,
            borderRadius: 10,
            margin: 6,
          }}
        >{item.status === "NUEVO" ? "PENDIENTE" : item.status}</Text>
      </Row>
        <Row direction="row">
        <Text style={{ fontSize: 16, fontWeight: "bold", color: Colors.main.primary, }}>
          Fecha de Aplicación
        </Text>
        <Text>{item.fechaAplicacion}</Text>
      </Row>
      <Row direction="row">
        <Text style={{ fontSize: 16, fontWeight: "bold", color: Colors.main.primary, }}>
          Total
        </Text>
        <Text>$ {FormaNumber(item.total)}</Text>
      </Row>
      <Row direction="row">
        <Row direction="column">
          <Text style={{
            fontSize: 16, fontWeight: "bold", color: Colors.main.primary,
            margin: 10, marginBottom: 3,
          }}>
            Descripción
          </Text>
          <Text numberOfLines={3}
            style={{ margin: 10, marginTop: 1 }}>{item.observaciones}</Text>
        </Row>

        <View style={{ flex: 1 }}>
          <Pressable
            onPress={async () => {
              await removeMovimiento(item);
              await resetMovimientos();
            }}
            style={{
              height: 40,
              width: 40,
              margin: 10,
              justifyContent: "center",
              backgroundColor: Colors.main.secondary,
              alignSelf: "center",
              alignContent: "center",
              alignItems: "center",
              borderRadius: 10,
            }}>
            <FontAwesome5 name="trash-alt" size={26} color={Colors.main.primary} />
          </Pressable>
        </View>
      </Row>

    </Pressable>
  );
};
const Row = ({ children, direction }: { children: React.ReactNode, direction: "row" | "column" }) => {
  return (

    <View style={{
      flexDirection: direction,
      justifyContent: "space-around",
      alignItems: "center",
      flex: 1,
      display: "flex",
    }}>
      {children}
    </View>
  );

};

const FormaNumber = (ncantidad: number | undefined | null): string => {
  //la multiplicacion
  return ncantidad != null
    ? ncantidad.toLocaleString("es-MX", { maximumFractionDigits: 4 })
    : "0";
};
const Subtotal = (cantidad: number | undefined, precio: number | null,): string => {
  let can = cantidad != undefined ? cantidad : 0;
  let pre = precio != null ? precio : 0;
  let total = can * pre;
  return FormaNumber(total);
};

export default ListaOCView;
