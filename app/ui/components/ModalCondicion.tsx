import { Modal, View, Text, StyleSheet, Dimensions, Pressable } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import { Colors } from "@/constants/Colors";
const ModalCondicion = () => {
  return (
    <Modal visible={true} transparent={true}>
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.topLogo}>
            <AntDesign name="closecircleo" size={Dimensions.get("window").width / 10} color="white" />
          </View>

          <View style={styles.bottomBotton}>
            <View style={{ flex: 1 }}>
              <Text style={{ flex: 1, fontSize: 20, fontWeight: "bold", textAlign: "center", marginTop: 30 }}>
                Confirmación
              </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ flex: 1, fontSize: 20, fontWeight: "bold", textAlign: "center" }}>
                ¿Desea Continuar?
              </Text>
            </View>
            <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", backgroundColor:"green" }}>
              <Pressable>
                <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center", color: Colors.main.primary }}>
                  Cancelar
                </Text>
              </Pressable>
              <Pressable>
                <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center", color: Colors.main.primary }}>
                  Confirmar
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16
  },
  card: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    height: "60%",
    width: "80%",

    backgroundColor: "white",
    borderRadius: 10,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
  },
  topLogo: {
    display: "flex",
    flex: 1,
    backgroundColor: Colors.main.secondary,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    padding: 10,

    borderStartStartRadius: 10,
    borderTopEndRadius: 10,
  },
  bottomBotton: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "flex-start",
    backgroundColor:"red"
  },
});
export default ModalCondicion;