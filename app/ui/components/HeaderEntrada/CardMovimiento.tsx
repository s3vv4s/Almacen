import { Colors } from "@/constants/Colors";
import { View, Text, Pressable, Dimensions, StyleSheet } from "react-native";
import HeaderEntradaViewModel from "./HEntradaViewModel";
import { useEffect } from "react";
import useEntradaState from "../../Entradas/EntradaState";
import { Almacen } from "../../ListaAlmacenes/ListaModel";
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
const CardMovimiento = ({ almacenId, movimientoId, almacen }: { almacenId: number, movimientoId: number, almacen: Almacen }) => {

  const { header, setHeader, setMain, main } = useEntradaState();
  //Main es la principal, de todo las demas son parte de
  const { obtenerRegistro, obtenerMain } = HeaderEntradaViewModel(almacenId, movimientoId);

  useEffect(() => {
    //De estas partes, aqui podra ser una condición en caso de que sea nuevo
    (async () => {
      await obtenerMain(setMain);

      await obtenerRegistro(setHeader);
    })();
  }, [setHeader, setMain]);
  return (
    <View style={{
      backgroundColor: Colors.main.card,
      flex: 1,
      borderColor: Colors.main.primary,
      borderWidth: 2,
      margin: 0,
        borderBottomRightRadius: 20,borderBottomLeftRadius: 20,

    }}>
      <View style={{
        flex: 2, backgroundColor: Colors.main.primary,
        borderBottomRightRadius: 20,borderBottomLeftRadius: 20,
        shadowColor: Colors.main.secondary,
        shadowOffset: {
          width: 0,
          height: 10,
        },
        shadowOpacity:10,
        shadowRadius: 10,
        elevation: 5,
        flexDirection: "row", justifyContent: "flex-start", alignContent: "center", alignItems: "center"
      }}>
        <Text style={{ fontSize: 24, color:Colors.main.text, padding:10}}>{almacen.almacenID} - {almacen.descripcion} </Text>
        <MaterialCommunityIcons name="home-city-outline" size={24} color={Colors.main.text} />
      </View>


      <View style={{
        flex: 3, backgroundColor: "transparent", padding: 10,
        flexDirection: "row", justifyContent: "space-around", gap: 100
      }}>

        <View style={{ flex: 1, justifyContent: "flex-start", marginLeft: "10%" }}>
            <Text style={styles.textH} >Entrada Id</Text>
            <Text style={styles.textT}>{main?.ordenesCompra.toString()}</Text>
            <Text style={styles.textH} >
                Fecha de creación <AntDesign name="calendar" size={20} color={Colors.main.primary} />
            </Text>
            <Text style={styles.textT}>{main?.fechaCreacion?.toString()}</Text>
        </View>
        <View style={{ flex: 1 }}>
          <View>
            <Text style={styles.textH} >
              Fecha de Aplicación <MaterialCommunityIcons name="calendar-check-outline" size={20} color={Colors.main.primary} />
            </Text>
            <Text style={styles.textT}>{main?.kardex?.fechaAplicacion.toString()}</Text>
            <Text style={styles.textH} >
              Firma recibe <FontAwesome name="pencil-square-o" size={20} color={Colors.main.primary} />
            </Text>
            <Text style={styles.textT}>{main?.firma_recibe}</Text>
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

export default CardMovimiento;