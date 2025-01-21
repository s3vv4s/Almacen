import { Colors } from "@/constants/Colors";
import RootScreens, { ParamEntraSalidaMovimiento } from "@/constants/RootScreens";
import { View, Text, Pressable } from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useState } from "react";
import Entypo from '@expo/vector-icons/Entypo';


/**
 * Componete donde llegara el movimiento en el cual se encutran los datos necesarios para buscar en la api y obtener sus datos necesarios
 * @param movimiento Datos generales del Movimiento donde estan todos los datos necesarios para mostrar
 */

const SlidebarAction = () => {
  return (
      <View
        style={{
          width:"10%",
          height: "90%",
          position: "absolute",
          right: 0,
          top: "50%",
          transform: [{ translateY: "-53%" }],
          backgroundColor: Colors.main.card,
          borderWidth: 2,
          borderColor: Colors.main.primary,
          borderTopLeftRadius: 10,
          borderBottomLeftRadius: 10,
          display: "flex",
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
          <MaterialCommunityIcons name="store-plus" size={30} color={Colors.main.card} />
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
              borderWidth:1,
              borderColor:Colors.main.primary

            }}>

          <Entypo name="save" size={36} color={Colors.main.primary} />
          <Text style={{fontSize:16, color:Colors.main.primary}}>Guardar</Text>
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
              borderWidth:1,
              borderColor:Colors.main.primary

            }}>
          <MaterialCommunityIcons name="content-save-check-outline" size={36} color={Colors.main.primary} />

          <Text style={{fontSize:12, color:Colors.main.primary}}>Guardar y Aplicar</Text>
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
              borderWidth:1,
              borderColor:Colors.main.primary,

            }}>
          <MaterialCommunityIcons name="content-save-alert" size={36} color={Colors.main.primary} />
          <Text style={{fontSize:12, color:Colors.main.primary}}>Regresar Movimiento</Text>
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
              borderWidth:1,
              borderColor:Colors.main.primary,
              borderBottomLeftRadius: 9,
            }}>
            <MaterialCommunityIcons name="camera-off" size={36} color={Colors.main.icon} />
          <Text style={{fontSize:12, color:Colors.main.icon}}>Evidencia </Text>
          </Pressable>
          </View>
      </View>

  );
};

export default SlidebarAction;