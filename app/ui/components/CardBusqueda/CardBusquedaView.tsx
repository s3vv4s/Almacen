import { View, TextInput, Text, StyleSheet, Pressable, KeyboardAvoidingView, Platform } from "react-native";
import { ArgumentsMovimientos } from "./ModelBusqueda";
import React, { useEffect, useRef, useState } from "react";
import { Colors } from "@/constants/Colors";
import Icon from "@/assets/Icons";
import { EnumIcons } from "@/assets/EnumIcons";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import DropdownComponent from "./Drop";

type Props = {
  argBusqueda: ArgumentsMovimientos,
  setArgBusqueda: React.Dispatch<React.SetStateAction<ArgumentsMovimientos>>;
  getMovimientos: () => void,
  setShowBusqueda: React.Dispatch<React.SetStateAction<boolean>>;
  showBusqueda: boolean;
  txtAlmacen: string;
  tipoMovimiento: string;

};


const CardBusquedaView = ({ argBusqueda, getMovimientos, setArgBusqueda, setShowBusqueda, showBusqueda, txtAlmacen, tipoMovimiento}: Props) => {

  //const { isExpanded, width, setIsExpanded, setMaxP, setMinP } = MvvMAcordeon();
  const [sizeView, setSizeView] = useState<boolean>(false);
  useEffect(() => {

  }, [setArgBusqueda]);

  return (

    <View style={[styles.container, { flex: showBusqueda ? 1 : 0.12}]}>
      <View style={{


        alignSelf: "stretch",
        flexDirection: "row",
        justifyContent: "space-around",
        alignContent: "center",

      }}>

      <Text style={{fontSize:20, marginLeft:4}}>
        {tipoMovimiento == "E" ? "Entradas" : "Salidas"} de Almacen - {txtAlmacen} <MaterialCommunityIcons name="home-city-outline" size={24} color={Colors.main.primary}  /></Text>

        <View style={{
          flex: 1,
          justifyContent: "flex-end",
          alignContent: "center",
          flexDirection: "row",


        }}>
        <Text style={{ fontSize: 16,
          padding: 6, fontWeight: "bold", color: Colors.main.primary, }}>
          Busqueda De Movimientos
        </Text>

        <Pressable onPress={() => {
          setShowBusqueda(!showBusqueda);
          setSizeView(!sizeView);
        }}>
          {!showBusqueda ? (
            <Icon name={EnumIcons.ArrowBarDown} size={30} color={Colors.main.primary}   />
          ) : (
            <Icon name={EnumIcons.ArrowBarUp} size={30} color={Colors.main.primary} />
          )}
        </Pressable>
        </View>
      </View>

      {showBusqueda &&
        <View style={{
          flex: 1,
          alignSelf: "stretch",
          justifyContent: "space-around",
          alignContent: "center",
          flexDirection: "row",


        }}>
          {/*id de Movimiento*/}
          <View style={{
            flex: 1,
            margin: 10,


          }}>
            <TextInput
              keyboardType="numeric"
              style={styles.input}

              placeholder="Clave de Movimiento"
              value={argBusqueda?.MovimientoID?.toString() === "-1" ? "" : argBusqueda?.MovimientoID?.toString()}
              onChangeText={(val) => {
                setArgBusqueda({ ...argBusqueda, MovimientoID: val });
              }} />
          </View>
          {/*Estatus*/}
          <DropdownComponent argBusqueda={argBusqueda} setArgBusqueda={setArgBusqueda} />
          <Pressable onPress={() => getMovimientos()}
            style={{
            height: 40,
              width: 40,
              margin: 10,
              justifyContent: "center",
              backgroundColor: Colors.main.secondary,
              borderRadius: 10,
              padding: 6,
            }}>
          <MaterialCommunityIcons name="store-search-outline" size={30} color={Colors.main.primary} disabled={false} />
          </Pressable>
          </View>


      }

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    borderRadius: 10,
    justifyContent: 'flex-start',
    alignContent: 'center',
    flexDirection: 'column',
    padding: 6,
    borderColor: Colors.main.primary,
    borderWidth: 2,
    backgroundColor: Colors.main.card,
  },
  input: {
    width: "100%",

    position: "absolute",
    borderBottomColor: Colors.main.primary,
    borderBottomWidth: 4,
  }
});


export default CardBusquedaView;