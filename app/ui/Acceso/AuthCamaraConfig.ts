import { useContextState } from "@/app/global/Context";
import { CameraPictureOptions, CameraView, CameraViewProps } from "expo-camera";
import { useEffect, useState , useRef} from "react";

//Este compoenente se realizara la funcion de verificacion de identidad con los estados que se requierean
//Por ejemplo, las rutas de la imagen etc

/**
 * Este componente se piensa ser lo mas generico que se pueda pero no sera posible
 * @returns Este componente solo restorna la configuracion de la camara
 */
export const AuthCamaraView = () => {

  const [uriImage,setUriImage] = useState<string>("");
  const refCamara = useRef<CameraView>(null);

  const CaptureImage = async () => {
    try {
      if(refCamara.current){
        const cameraOpt: CameraPictureOptions = {
          quality: 0.1,
          base64: true,
          skipProcessing: true,
          imageType: "jpg",
        };
        const dataImg = await refCamara.current.takePictureAsync(cameraOpt);

        if (dataImg != null) {
          console.log(dataImg.uri);
          setUriImage(dataImg?.uri);
        }

      }
    } catch (error) {
      console.log(error);
    }
  };
const Imprimiendo = () => {

  console.log("Imprimiendo");
};
  return{
    CaptureImage,
    uriImage,
    refCamara,
    Imprimiendo

  };


};