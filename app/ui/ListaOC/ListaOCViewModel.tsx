import { useContextState } from "@/app/global/Context";
import { Movimiento } from "./ListaOCModels";
import { useState } from "react";
import ManagerError from "@/utils/ManagerError";
import ListaController from "./ListaOCControllers";
const ViewCOntrolOC = () => {

  const { stateContext, setContext } = useContextState();
  const [errorShow,setErrorShow] = useState<boolean>(false);
  const [msgError, setMsgError] = useState<string>("");

  const removeMovimiento = async (selectedMovimiento: Movimiento|null,tipo: "E"|"S"|undefined) => {

    try {
      const head = new Headers();
      head.append("Content-Type", "application/json");
      head.append("Authorization", `Bearer ${stateContext?.refreshToken}`);
      const controller = new ListaController(head , tipo);
      await controller.removeOc(selectedMovimiento?.movimientoID ,selectedMovimiento?.almacenID);

    } catch (error) {
      console.log((error as ManagerError).message);
      if ((error as ManagerError).code == 401) {
          setContext({
            isValidated: false, refreshToken: undefined,
            token: undefined, usuario: undefined, ubicacion: undefined,
            error: error as ManagerError
          });
          //El return es en caso que el error sea de acceso y este no se muestre el otro modal de error al realizar alguna acción
          return;
      }
      setMsgError((error as ManagerError).message);
      setErrorShow(true);
    }

  };

  return {
    removeMovimiento,
    setErrorShow,
    errorShow,
    msgError
  };
}

export default ViewCOntrolOC;