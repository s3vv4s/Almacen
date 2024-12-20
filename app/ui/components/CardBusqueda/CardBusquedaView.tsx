import { View, TextInput, Text, StyleSheet, Pressable } from "react-native";
import { ArgumentsMovimientos } from "./ModelsEntradaSalida";
import { useEffect, useRef, useState } from "react";
import { Colors } from "@/constants/Colors";
import Icon from "@/assets/Icons";
import { EnumIcons } from "@/assets/EnumIcons";

import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import AppAccordeon, { MvvMAcordeon } from "../../ListaOC/Accordion";
import InputPrimary from "../Inputs";
type Props = {
  argBusqueda: ArgumentsMovimientos,
  setBusqueda: React.Dispatch<React.SetStateAction<ArgumentsMovimientos>>;
  getMovimientos: () => void,
  setShowBusqueda: React.Dispatch<React.SetStateAction<boolean>>;
  showBusqueda: boolean;
  callbackActivate?: () => void;
};


const CardBusquedaView = ({ argBusqueda, getMovimientos, setBusqueda, setShowBusqueda, showBusqueda, callbackActivate }: Props) => {
  const { isExpanded, width, setIsExpanded, setMaxP, setMinP } = MvvMAcordeon();
  useEffect(() => {
    setMaxP(1);
    setMinP(0);
  }, []);
  return (

    <AppAccordeon width={width} >
      <View style={styles.container}>
        <View style={{
          alignSelf: "stretch",
          flexDirection: "row",
          justifyContent: "space-between",
          alignContent: "center",
        }}>
          <Text style={{ fontSize: 18, padding: 6, fontWeight: "bold", color: Colors.main.primary }}>
            Busqueda De Movimientos
          </Text>
          <Pressable onPress={() => {
            setIsExpanded(!isExpanded);
            setShowBusqueda(!showBusqueda);
            callbackActivate?.();
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
            flex: 1,
            alignSelf: "stretch",
            justifyContent: "space-around",
            alignContent: "center",
          }}>
            <TextInput
              keyboardType="numeric"
              style={styles.input}
              placeholder="MovimientoID"
              value={argBusqueda?.MovimientoID?.toString()}
              onChangeText={(val) => {
                setBusqueda({ ...argBusqueda, MovimientoID: val });
              }} />
          </View>
        }

      </View>
    </AppAccordeon>


  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    borderRadius: 10,
    justifyContent: 'flex-start',
    alignContent: 'center',
    flexDirection: 'column',
    padding: 10,
    borderColor: Colors.main.primary,
    borderWidth: 2,
    backgroundColor: Colors.main.card,

  },
  input: {
    marginTop: 50,
    position: "sticky",
    borderBottomColor: Colors.main.primary,
    borderBottomWidth: 4,
    zIndex: 99

  }
});


export default CardBusquedaView;