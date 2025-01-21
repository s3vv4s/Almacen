import { useContextState } from "@/app/global/Context";
import ControllerHeaderEntradaSalida from "@/controllers/ControllerHeaderEntradaSalida";
import ManagerError from "@/utils/ManagerError";

import { MainEntrada } from "@/models/MainEntrada";
import { HeaderApiOC } from "@/models/HeaderEntradaSalida";
import { useEffect, useState } from "react";


const HeaderEntradaViewModel = (almacen: number, asignacionId: number) => {
  //Los estados que declaro aqui sera zustand

  const { stateContext, setContext } = useContextState();

  const stateHeaders = () => {
    const head = new Headers();
    head.append("Content-Type", "application/json");
    head.append("Authorization", `Bearer ${stateContext?.refreshToken}`);
    return head;
  };
var mains:MainEntrada|undefined;
  const obtenerMain = async (setMain:(setain:MainEntrada|undefined)=>void) => {
    try {
      const controller = new ControllerHeaderEntradaSalida<MainEntrada>(stateHeaders());
      const header = await controller.EntradaSalidaMovimiento("E", almacen, asignacionId);
       mains = header;
      setMain(header);
    } catch (error) {
      throw new ManagerError((error as Error).message, 0);
    }
  }


  const obtenerRegistro = async (setHeader:(header:HeaderApiOC|undefined)=>void) => {
    try {

      const controller = new ControllerHeaderEntradaSalida(stateHeaders());
      const header = await controller.obtenerRegistro(almacen,mains?.ordenesCompra[0] );
      mains = undefined;
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

  useEffect(() => {}, [obtenerMain, obtenerRegistro]);
  return {
    obtenerRegistro,
    obtenerMain
  };


}

export default HeaderEntradaViewModel;