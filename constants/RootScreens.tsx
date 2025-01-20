import { Almacen } from "@/app/ui/ListaAlmacenes/ListaModel";
import { Movimiento } from "@/app/ui/ListaOC/ListaOCModels";

 type RootScreens = {
  Login: undefined,
  MenuES: undefined,
  ListaAlmacenes: ParamEntraSalida,//Para obtener el tipo desde el primer menu de entrada y salida
  ListaOc:AlmacenType,//Lista de orden de compra donde obtiene, un tipo y el almacen
  ControlMain:ParamEntraSalidaMovimiento//Control main donde obtentra el el movimiento,
};

type ParamEntraSalida = {
  tipo: "E"|"S",
}
export type AlmacenType = {
  tipo: "E"|"S",
  almacen:Almacen,
};


export type ParamEntraSalidaMovimiento = {
  movimiento: Movimiento,
}

export default RootScreens;