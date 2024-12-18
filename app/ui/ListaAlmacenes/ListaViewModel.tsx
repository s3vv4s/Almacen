import { useEffect, useState } from "react";
import { Almacen } from "./ListaModel";
import ListaController from "./ListaController";
import { useContextState } from "@/app/global/Context";
import ManagerError from "@/utils/ManagerError";

const ListaViewModel = () => {
  const [listaAlmacenes, setListaAlmacenes] = useState<Array<Almacen>>([]);
  const { stateContext, setContext } = useContextState();

  const getListaAlmacenes = async () => {
    try {

      const head = new Headers();
      head.append("Content-Type", "application/json");
      head.append("Authorization", `Bearer ${stateContext?.refreshToken}`);
      const controller = new ListaController(head);
      const lista = await controller.getListaAlmacenes();
      setListaAlmacenes(lista);
    } catch (error) {
      //console.log((error as Error).message);
      console.log((error as ManagerError).stack);
      if((error as ManagerError).code == 401){
        setContext({
          isValidated:false,refreshToken:undefined,
          token:undefined,usuario:undefined,ubicacion:undefined,
          error:error as ManagerError
        });
     }
    }


  };
  return {
    listaAlmacenes,
    setListaAlmacenes,
    getListaAlmacenes
  };

};

export default ListaViewModel;