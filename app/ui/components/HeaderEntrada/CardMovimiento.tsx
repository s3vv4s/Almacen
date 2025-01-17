import { Colors } from "@/constants/Colors";
import { View, Text, Pressable, Dimensions } from "react-native";
import HeaderEntradaViewModel from "./HEntradaViewModel";
import { useEffect } from "react";

const CardMovimiento = ({ almacenId, movimientoId }: { almacenId: number, movimientoId: number }) => {
  //Main es la principal, de todo las demas son parte de
  const { header, setHeader, obtenerRegistro, main } = HeaderEntradaViewModel(almacenId, movimientoId);
  useEffect(() => {
    obtenerRegistro();
  }, []);
  return (
    <View style={{
      backgroundColor: Colors.main.card,
      flex: 1,
      borderColor: Colors.main.primary,
      borderWidth: 1,
      margin: 0,
      height: Dimensions.get("window").height * 0.25,
      padding: 10,
    }}>


    </View>


  );
}


export default CardMovimiento;