import { useContextState } from "@/app/global/Context";
import BusquedController from "./BusquedController";
import { ArgumentsMovimientos, Movimientos } from "./ModelsEntradaSalida";
import { useState } from "react";

const BusquedaViewModel = () => {
  const [search, setSearch] = useState<Movimientos>();
  const [argMovimientos,setArgMovimientos] = useState<ArgumentsMovimientos>();
  const {stateContext} = useContextState();
  const getMovimientos = async () => {
       const head = new Headers();
      head.append("Content-Type", "application/json");
      head.append("Authorization", `Bearer ${stateContext?.refreshToken}`);
    const controller = new BusquedController(head);
    const response = await controller.getMovimientos(argMovimientos);
    console.log(response);
    setSearch(response);
  };
  return {
    getMovimientos


  };
};
export default BusquedaViewModel;