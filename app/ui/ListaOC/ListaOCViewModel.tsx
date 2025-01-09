import { useContextState } from "@/app/global/Context";
import { Movimiento } from "./ListaOCModels";
import { useState } from "react";
import ManagerError from "@/utils/ManagerError";
import ListaController from "./ListaOCControllers";
const ViewCOntrolOC = () => {

  const { stateContext, setContext } = useContextState();
  const [errorShow,setErrorShow] = useState<boolean>(false);
  const [msgError, setMsgError] = useState<string>("");

  const removeMovimiento = async (selectedMovimiento: Movimiento,tipo: "E"|"S") => {
    try {
      const head = new Headers();
      head.append("Content-Type", "application/json");
      head.append("Authorization", `Bearer ${stateContext?.refreshToken}`);
      const controller = new ListaController(head , tipo);
      await controller.removeOc(selectedMovimiento.movimientoID ,selectedMovimiento.almacenID);

    } catch (error) {
      console.log((error as ManagerError).message);
      if ((error as ManagerError).code == 401) {
          setContext({
            isValidated: false, refreshToken: undefined,
            token: undefined, usuario: undefined, ubicacion: undefined,
            error: error as ManagerError
          });
          return;
      }
      setMsgError((error as Error).message);
      setErrorShow(true);
    }

  };

  return {
    removeMovimiento
  };
}

export default ViewCOntrolOC;