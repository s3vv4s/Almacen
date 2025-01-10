import { useContextState } from "@/app/global/Context";
import BusquedController from "./BusquedController";
import { ArgumentsMovimientos } from "./ModelBusqueda";
import { useEffect, useState } from "react";
import ManagerError from "@/utils/ManagerError";
import { Movimientos } from "../../ListaOC/ListaOCModels";

/**
 * En lugar de usar estos comp parmetros se podria usar un context para el manejo de estos, pero no se se puede usar en View Model
 * @param almacen
 * @param tipoMovimiento
 * @returns
 */
const BusquedaViewModel = (almacen: number|undefined, tipoMovimiento: string|undefined) => {
  const [movimientos, setMovimientos] = useState<Movimientos>();
  const [showBusqueda, setShowBusqueda] = useState<boolean>(false);
  const [argMovimientos, setArgMovimientos] = useState<ArgumentsMovimientos>({
    AlmacenID: almacen,
    AsignacionID: "",
    MovimientoID: '',
    observaciones: "",
    pagina: 1,
    referencia: "",
    status: "",
    tipoMovimiento: tipoMovimiento,
    cve_ordenCompra:"",
  });

  useEffect(() => {
    getMovimientos();
  }, [setArgMovimientos]);

  const { stateContext, setContext } = useContextState();

  const getMovimientos = async () => {
    try {

      const head = new Headers();
      head.append("Content-Type", "application/json");
      head.append("Authorization", `Bearer ${stateContext?.refreshToken}`);
      const controller = new BusquedController(head);
      const response = await controller.getMovimientos(argMovimientos);
      response.lista = response.lista.filter((item) => item.ordenesCompra != "-");
      setMovimientos(response);
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
    getMovimientos,
    setArgMovimientos,
    movimientos,
    argMovimientos,
    setMovimientos,
    showBusqueda,
    setShowBusqueda

  };
};
export default BusquedaViewModel;