import { useContextState } from "@/app/global/Context";
import BusquedController from "./BusquedController";
import { ArgumentsMovimientos, Movimientos } from "./ModelsEntradaSalida";
import { useEffect, useState } from "react";

const BusquedaViewModel = (almacen:number,tipoMovimiento:string) => {
  const [movimientos, setMovimientos] = useState<Movimientos>();
  const [showBusqueda, setShowBusqueda] = useState<boolean>(false);
  const [argMovimientos,setArgMovimientos] = useState<ArgumentsMovimientos>({
    AlmacenID:almacen,
    AsignacionID:"",
    MovimientoID:'2',
    observaciones:"",
    pagina:1,
    referencia:"",
    status:"",
    tipoMovimiento:tipoMovimiento,

  });
  useEffect(()=>{
    console.log("useEffect");
    getMovimientos();
  },[]);

  const {stateContext} = useContextState();

  const getMovimientos = async () => {
    console.log("getMovimientos");
       const head = new Headers();
      head.append("Content-Type", "application/json");
      head.append("Authorization", `Bearer ${stateContext?.refreshToken}`);
    const controller = new BusquedController(head);
    const response = await controller.getMovimientos(argMovimientos);
    console.log(JSON.stringify(response));
    setMovimientos(response);
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