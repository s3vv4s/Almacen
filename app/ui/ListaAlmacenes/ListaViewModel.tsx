import { useEffect, useState } from "react";
import { Almacen } from "./ListaModel";
import ListaController from "./ListaController";
import { getHeader } from "@/app/global/ContextPermisos";

const ListaViewModel = () => {
  const [listaAlmacenes, setListaAlmacenes] = useState<Array<Almacen>>([]);

  const getListaAlmacenes = async () => {
    console.log("ListaViewModel====>");
    const header = getHeader();
    console.log(header);
    const listaController  = new ListaController(header);
    const lista = await listaController.getListaAlmacenes();
    setListaAlmacenes(lista);
  };
  return {
    listaAlmacenes,
    setListaAlmacenes,
    getListaAlmacenes
  };

};

export default ListaViewModel;