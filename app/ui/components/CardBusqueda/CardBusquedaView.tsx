import { View, TextInput, Text, StyleSheet, Pressable, Animated } from "react-native";
import { ArgumentsMovimientos } from "./ModelsEntradaSalida";
import { useEffect, useRef, useState } from "react";
import { Colors } from "@/constants/Colors";
import Icon from "@/assets/Icons";
import { EnumIcons } from "@/assets/EnumIcons";


type Props = {
  argBusqueda: ArgumentsMovimientos,
  setBusqueda: React.Dispatch<React.SetStateAction<ArgumentsMovimientos>>;
  getMovimientos: () => void,
  setShowBusqueda: React.Dispatch<React.SetStateAction<boolean>>;
  showBusqueda: boolean;
};

const CardBusquedaView = ({ argBusqueda, getMovimientos, setBusqueda, setShowBusqueda, showBusqueda }: Props) => {

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", alignContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 18, padding: 6, fontWeight: "bold", color: Colors.main.primary }}>
          Busqueda De Movimientos
        </Text>
        <Pressable onPress={() => {
          setShowBusqueda(!showBusqueda);
        }}>
          {!showBusqueda ? (
            <Icon name={EnumIcons.ArrowBarDown} size={30} color={Colors.main.primary} />
          ) : (
            <Icon name={EnumIcons.ArrowBarUp} size={30} color={Colors.main.primary} />
          )}
        </Pressable>

      </View>

      {showBusqueda &&
        <View style={{
          borderColor: Colors.main.primary,
          borderWidth: 1,
          borderRadius: 10,
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          alignContent: "center",
          alignItems: "center",
          padding: 10,
        }}>
          <TextInput
            style={styles.input}
            placeholder="MovimientoID"
            keyboardType="numeric"
            value={argBusqueda?.MovimientoID?.toString()}
            onChangeText={(val) => {
              setBusqueda({ ...argBusqueda, MovimientoID: val });
            }}
          />

        </View>
      }

    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'column',
    padding: 10,
    borderColor: Colors.main.primary,
    borderWidth: 2,
    backgroundColor: Colors.main.card,

  },
  input: {
    flex: 1,
    borderBottomColor: Colors.main.primary,
    borderBottomWidth: 4,
    color: 'red',

  }
});


export default CardBusquedaView;