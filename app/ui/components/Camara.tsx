import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";
import { useCameraPermissions, CameraView, CameraType } from "expo-camera";
import ButtonPrimary from "./Buttons";
import { forwardRef, useImperativeHandle, useState } from "react";
import { AuthCamaraView } from "../Acceso/AuthCamaraConfig";

type CameraProps = {
  children: React.ReactNode,
  estilos?: StyleProp<ViewStyle>,
  refCamaras:React.RefObject<CameraView>,
  type:CameraType,
};


const Camara = ({ children, estilos, refCamaras, type }: CameraProps) => {
  //const {refCamara,CaptureImage} = AuthCamaraView();
  //const [type, setType] = useState<CameraType>("front");

  const [permission, requestPermission] = useCameraPermissions();
  if (permission == null || permission.status !== "granted") {
    return (
      <ButtonPrimary onClick={requestPermission} text="Dar permiso de camara" estilos={{ borderRadius: 10, alignSelf: "flex-start" }} />
    );
  }
  return (
    <CameraView
      ref={refCamaras}
      facing={type}
      style={styles.container}>
      {children}
    </CameraView>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "static",
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    padding: 16
  }
});

export default Camara;
