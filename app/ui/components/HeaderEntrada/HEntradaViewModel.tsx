import { useContextState } from "@/app/global/Context";
import ControllerHeaderEntradaSalida from "@/controllers/ControllerHeaderEntradaSalida";
import ManagerError from "@/utils/ManagerError";

import useEntradaState from "../../Entradas/EntradaState";
import { MainEntrada } from "@/models/MainEntrada";

const HeaderEntradaViewModel = (almacen: number, asignacionId: number) => {
  //Los estados que declaro aqui sera zustand

  const { header, setHeader, setMain, main } = useEntradaState();
  const { stateContext, setContext } = useContextState();

  const stateHeaders = () => {
    const head = new Headers();
    head.append("Content-Type", "application/json");
    head.append("Authorization", `Bearer ${stateContext?.refreshToken}`);
    return head;
  };

  const obtenerMain = async () => {
    try {
      const controller = new ControllerHeaderEntradaSalida<MainEntrada>(stateHeaders());
      const header = await controller.EntradaSalidaMovimiento("E", almacen, asignacionId);

      setMain(header);
      return header;
    } catch (error) {
      throw new ManagerError((error as Error).message, 0);
    }
  }
  const obtenerRegistro = async () => {
    try {
      const mainn = await obtenerMain();
      const controller = new ControllerHeaderEntradaSalida(stateHeaders());
      const header = await controller.obtenerRegistro(almacen, mainn?.ordenesCompra[0]);
      setHeader(header);
    } catch (error) {
      if ((error as ManagerError).code == 401) {
        setContext({
          isValidated: false, refreshToken: undefined,
          token: undefined, usuario: undefined, ubicacion: undefined,
          error: error as ManagerError
        });
      }

    }
  };
  return {
    header,
    setHeader,
    obtenerRegistro,

    main
  };


}

export default HeaderEntradaViewModel;