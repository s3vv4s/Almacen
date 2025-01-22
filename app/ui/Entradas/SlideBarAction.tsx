import { Colors } from "@/constants/Colors";
import RootScreens, { ParamEntraSalidaMovimiento } from "@/constants/RootScreens";
import { View, Text, Pressable } from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import React, { useState } from "react";
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

/**
 * Componete donde llegara el movimiento en el cual se encutran los datos necesarios para buscar en la api y obtener sus datos necesarios
 * @param movimiento Datos generales del Movimiento donde estan todos los datos necesarios para mostrar
 */

const SlidebarAction = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <View
        style={{
          width: "10%",
          height: "90%",
          position: "absolute",
          right: 0,
          top: "50%",
          transform: [{ translateY: "-30%" }],
          backgroundColor: Colors.main.card,
          borderWidth: 2,
          borderColor: Colors.main.primary,
          borderTopLeftRadius: 10,
          borderBottomLeftRadius: 10,
          display: !open ? "flex" : "none",
          flexDirection: "column",
          overflow: "hidden",

        }}>

        <View
          style={{
            padding: 10,
            justifyContent: "center",
            backgroundColor: Colors.main.primary,
            borderTopLeftRadius: 8,
            alignItems: "center",
          }}>
          <Pressable
            onPress={() => setOpen(!open)}
          >
            <MaterialCommunityIcons name="store-plus" size={30} color={Colors.main.card} />
          </Pressable>
        </View>
        <View style={{
          flexDirection: "column",
          justifyContent: "space-around",
          alignContent: "center",
          flex: 1,
        }}>
          <Pressable
            style={{
              flex: 1,
              width: "100%",
              justifyContent: "center",
              backgroundColor: Colors.main.card,
              alignSelf: "center",
              alignContent: "center",
              alignItems: "center",
              borderWidth: 1,
              borderColor: Colors.main.primary

            }}>

            <Entypo name="save" size={36} color={Colors.main.primary} />
            <Text style={{ fontSize: 16, color: Colors.main.primary }}>Guardar</Text>
          </Pressable>
          <Pressable
            style={{
              flex: 1,
              width: "100%",
              justifyContent: "center",
              backgroundColor: Colors.main.card,
              alignSelf: "center",
              alignContent: "center",
              alignItems: "center",
              borderWidth: 1,
              borderColor: Colors.main.primary

            }}>
            <MaterialCommunityIcons name="content-save-check-outline" size={36} color={Colors.main.primary} />

            <Text style={{ fontSize: 12, color: Colors.main.primary }}>Guardar y Aplicar</Text>
          </Pressable>
          <Pressable
            style={{
              flex: 1,
              width: "100%",
              justifyContent: "center",
              backgroundColor: Colors.main.card,
              alignSelf: "center",
              alignContent: "center",
              alignItems: "center",
              borderWidth: 1,
              borderColor: Colors.main.primary,

            }}>
            <MaterialCommunityIcons name="content-save-alert" size={36} color={Colors.main.primary} />
            <Text style={{ fontSize: 12, color: Colors.main.primary }}>Regresar Movimiento</Text>
          </Pressable>
          {/*Esta parte se puede hacer de otra manera */}
          <Pressable
            style={{
              flex: 1,
              width: "100%",
              justifyContent: "center",
              backgroundColor: Colors.main.card,
              alignSelf: "center",
              alignContent: "center",
              alignItems: "center",
              borderWidth: 1,
              borderColor: Colors.main.primary,
              borderBottomLeftRadius: 9,
            }}>
            <MaterialCommunityIcons name="camera-off" size={36} color={Colors.main.icon} />
            <Text style={{ fontSize: 12, color: Colors.main.icon }}>Evidencia </Text>
          </Pressable>
        </View>

      </View>
      <View
        style={{
          width: "6%",
          height: "10%",
          position: "absolute",
          right: 0,
          top: "25%",
          transform: [{ translateY: "-60%" }],
          backgroundColor: Colors.main.primary,
          borderWidth: 2,
          borderColor: Colors.main.primary,
          borderTopLeftRadius: 10,
          borderBottomLeftRadius: 10,
          flexDirection: "column",
          overflow: "hidden",

          alignContent: "center",
          justifyContent: "center",
          alignItems: "center",
          display: open ? "flex" : "none",
        }}>
        <Pressable
          onPress={() => setOpen(!open)}>
          <MaterialIcons name="arrow-back-ios" size={20} color={Colors.main.card} />
        </Pressable>
      </View>
    </>
  );
};

export default SlidebarAction;