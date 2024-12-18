import { useContextState } from "@/app/global/Context";
import ManagerError from "@/utils/ManagerError";
import { View, Text, Modal, StyleSheet } from "react-native";
import Buttons from "./Buttons";
import { Colors } from "@/constants/Colors";

type Props = {
  mostrar: boolean;
  setMostrar: (mostrar: boolean) => void;
  error?: ManagerError;
  action: () => void;
};

const ModalError = ({ mostrar, setMostrar, error, action }: Props) => {

  const { setContext } = useContextState();
  return (
    <Modal
      transparent={true}

      visible={mostrar}>
      <View style={styles.container}>
        <View style={styles.card}>

          <Text style={{
            fontSize: 20, fontWeight: "bold",
            textAlign: "center", color: Colors.main.primary,
            marginTop: 30
          }}>
            {error?.message}
          </Text>
          <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center", color: Colors.main.primary }} >Error de acceso o internet inicide Sesion de nuevo</Text>
          <Buttons
            estilos={{ marginTop: 10, alignSelf: "flex-end" }}
            onClick={() => { setMostrar(false); action(); }}
            text={"Aceptar"} />

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
    alignContent: 'center',
    padding: 16
  },
  card: {
    borderWidth: 1,
    borderColor: Colors.main.primary,
    display: "flex",
    flexDirection: "column",
    height: "60%",
    width: "80%",
    justifyContent: "space-between",
    backgroundColor: Colors.main.card,
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
});
export default ModalError;
