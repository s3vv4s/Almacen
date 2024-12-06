import { StyleSheet, Text, Modal, Pressable, Image, View } from "react-native";
import ButtonPrimary from "../components/Buttons";
import Camara from "../components/Camara";
import { Colors } from "@/constants/Colors";
import { AuthCamaraView } from "./AuthCamaraConfig";
import { useEffect, useRef, useState } from "react";
import { CameraType } from "expo-camera";
import { useContextState } from "@/app/global/Context";

type Props = {
  visible: boolean;
  showChange: (visible: boolean) => void;
  next: () => void;
};

const AuthCamara = ({ showChange, visible, next }: Props) => {
  const {refCamara,CaptureImage, uriImage} = AuthCamaraView();
  const [type, setType] = useState<CameraType>("front");
  const {} = useContextState();
  useEffect(()=>{
    console.log("Se ejecuta cada cambio de imagene en su valor ");
  },[uriImage]);

  return (
    <Modal visible={visible} style={styles.container}>
      <Camara  refCamaras={refCamara} type={type}>
        <View style={styles.contenido}>
          <View style={[styles.parte, {
            backgroundClip: "text", backgroundColor: Colors.main.card,
            borderRadius: 10, padding: 10
          }]}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>Verificacion de Identidad</Text>
            <Image source={require("@/assets/images/dif_logo.png")} style={{
              width: 300, height: 300,
              resizeMode: "contain",
            }}/>
          </View>

          <View style={[styles.parte, {
            borderColor: Colors.main.primary,
            borderWidth: 6,
            borderRadius: 100,
            height: "90%",
            margin: 10,
            alignSelf: 'center',
          }]}/>

          <View style={[styles.parte, {
            backgroundColor: Colors.main.card,
            borderRadius: 10, padding: 10
          }]}>

            <ButtonPrimary onClick={CaptureImage}
              text="Verificar" estilos={{ borderRadius: 10, alignSelf: "center" }} />
            <ButtonPrimary onClick={() => showChange(false)}
              text="Cancelar" estilos={{
                borderRadius: 10, alignSelf: "center",
                backgroundColor: Colors.main.secondary
              }} />
          </View>
        </View>
      </Camara>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    padding: 16
  },
  contenido: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
  parte: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  }
});

export default AuthCamara;