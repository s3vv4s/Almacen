import { View, TextInput, Text, StyleSheet, Pressable, KeyboardAvoidingView, Platform, ScrollView, ScrollViewComponent } from "react-native";
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
  txtAlmacen: string | undefined;
  tipoMovimiento: string | undefined;

};


const CardBusquedaView = ({ argBusqueda, getMovimientos, setArgBusqueda, setShowBusqueda, showBusqueda, txtAlmacen, tipoMovimiento }: Props) => {

  //const { isExpanded, width, setIsExpanded, setMaxP, setMinP } = MvvMAcordeon();
  const [sizeView, setSizeView] = useState<boolean>(false);
  useEffect(() => {
  }, [setArgBusqueda]);

  return (
    <View style={{
      backgroundColor: Colors.main.card,
      height: showBusqueda ? "40%" : "10%",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignContent: "flex-start",
      borderWidth: 1,
      borderBottomColor: Colors.main.primary,
      padding: 10,
    }}>

      <View style={{
        alignSelf: "flex-start",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignContent: "center",
        flex: 1,

      }}>
        <Text style={{ fontSize: 20, marginLeft: 4 }}>
          {tipoMovimiento == "E" ? "Entradas" : "Salidas"} de Almacen - {txtAlmacen}
          <MaterialCommunityIcons name="home-city-outline" size={24} color={Colors.main.primary} />
        </Text>
        <View style={{
          flex: 1,
          justifyContent: "flex-end",
          alignContent: "center",
          flexDirection: "row",


        }}>
          <Text style={{
            fontSize: 16,
            padding: 6,
            fontWeight: "bold",
            color: Colors.main.primary,
          }}>
            Busqueda De Movimientos
          </Text>
          <Pressable
            style={{

              marginRight: 10,
              justifyContent: "center",
            }}

            onPress={() => {
              setShowBusqueda(!showBusqueda);
              setSizeView(!sizeView);
            }}>
            {!showBusqueda ? (
              <Icon name={EnumIcons.ArrowBarDown} size={30} color={Colors.main.primary} />
            ) : (
              <Icon name={EnumIcons.ArrowBarUp} size={30} color={Colors.main.primary} />
            )}
          </Pressable>
        </View>
      </View>

      {showBusqueda &&
        <View style={{
          flex: 6,
          flexDirection: "column", backgroundColor: "transparent", justifyContent: "space-between"
        }}>
          <View style={{
            alignSelf: "stretch",
            justifyContent: "space-around",
            alignContent: "center",
            flexDirection: "row",
          }}>
            <View style={{
              flexGrow: 1,
              margin: 10,
            }}>
              <TextInput
                keyboardType="numeric"
                style={styles.input}
                removeClippedSubviews={false}
                placeholder="Clave de Movimiento"
                value={argBusqueda?.MovimientoID?.toString() === "-1" ? "" : argBusqueda?.MovimientoID?.toString()}
                onChangeText={(val) => {
                  setArgBusqueda({ ...argBusqueda, MovimientoID: val });
                }}
              />
            </View>
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
          <View style={{
            flexGrow: 1,
            justifyContent: "space-around",
            alignContent: "center",
            flexDirection: "row",
          }}>
            <View style={{
              flexGrow: 1,
              margin: 10
            }}>
              <TextInput
                style={styles.input}
                placeholder="Observaciones"
                value={argBusqueda?.observaciones}
                onChangeText={(val) => {
                  setArgBusqueda({ ...argBusqueda, observaciones: val });
                }}
              />
            </View>
            <View style={{
              flexGrow: 1,
              margin: 10,
            }}>
              <TextInput
                style={styles.input}
                onFocus={() => {
                  setSizeView(true);
                }}
                placeholder="Orden de Compra"
                value={argBusqueda?.cve_ordenCompra}
                onChangeText={(val) => {
                  setArgBusqueda({ ...argBusqueda, cve_ordenCompra: val });
                }}
              />
            </View>
          </View>
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
    position: "absolute",
    borderBottomColor: Colors.main.primary,
    borderBottomWidth: 4,
    width: "100%",
  }
});


export default CardBusquedaView;