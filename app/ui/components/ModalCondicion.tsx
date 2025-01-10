import { Modal, View, Text, StyleSheet, Dimensions, Pressable } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import { Colors } from "@/constants/Colors";


type Props = {
  mostrarTask: boolean;
  setMostrarTask: (mostrar: boolean) => void;
  action?: () => void;
  task: string;
};
export const ModalErrorMsg = ({ mostrarTask, setMostrarTask, task }: Props) => {
  return (
    <Modal
      visible={mostrarTask}
      transparent={true}
      animationType="slide">
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.topLogoError}>
            <AntDesign name="closecircleo" size={Dimensions.get("window").width / 10} color="white" />
          </View>
          <View style={styles.bottomBotton}>
            <View style={{ flex: 1 }}>
              <Text style={{ flex: 1, fontSize: 20, fontWeight: "bold", textAlign: "center", margin:30}}>
                {task}
              </Text>
            </View>
            <View style={{ flex: 1, flexDirection: "row", justifyContent: "flex-end", marginBottom: 20 }}>
              <Pressable
                onPress={() => setMostrarTask(false)}
                style={{
                  borderWidth: 2,
                  borderColor: Colors.main.primary,
                  paddingHorizontal: 10,
                  backgroundColor: Colors.main.primary,
                  borderRadius: 10,
                  height: 50,
                  margin:20,
                  justifyContent: "center",
                }}>
                <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center", color: "white" }}>
                  Aceptar
                </Text>
              </Pressable>
            </View>
          </View>

        </View>
      </View>

    </Modal>
  );
};
const ModalCondicion = ({ action, mostrarTask, setMostrarTask, task }: Props) => {
  return (
    <Modal visible={mostrarTask} animationType="slide" transparent={true}>
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.topLogo}>
            <AntDesign name="questioncircleo" size={Dimensions.get("window").width / 10} color="white" />
          </View>

          <View style={styles.bottomBotton}>
            <View style={{ flex: 1 }}>
              <Text style={{ flex: 1, fontSize: 20, fontWeight: "bold", textAlign: "center", marginTop: 30 }}>
                Confirmación
              </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ flex: 1, fontSize: 20, fontWeight: "bold", textAlign: "center" }}>
                {task}
              </Text>
            </View>
            <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-around", marginBottom: 20 }}>
              <Pressable
                onPress={() => setMostrarTask(false)}
                style={{
                  borderWidth: 2,
                  borderColor: Colors.main.primary,
                  paddingHorizontal: 10,
                  backgroundColor: Colors.main.primary,
                  borderRadius: 10,
                  justifyContent: "center",
                }}>
                <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center", color: "white" }}>
                  Cancelar
                </Text>
              </Pressable>
              <Pressable
                onPress={action}
                style={{
                  borderWidth: 2,
                  borderColor: Colors.main.primary,
                  paddingHorizontal: 10,
                  borderRadius: 10,
                  justifyContent: "center",
                }}>
                <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center", color: Colors.main.primary }}>
                  Aceptar
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
    borderStartStartRadius: 10,
    borderTopEndRadius: 10,
  },
  topLogoError: {
    display: "flex",
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    borderStartStartRadius: 10,
    borderTopEndRadius: 10,
  },
  bottomBotton: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
  },
});
export default ModalCondicion;