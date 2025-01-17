import { Almacen } from "@/app/ui/ListaAlmacenes/ListaModel";
import { Movimiento } from "@/app/ui/ListaOC/ListaOCModels";

 type RootScreens = {
  Login: undefined,
  MenuES: undefined,
  ListaAlmacenes: ParamEntraSalida,
  ListaOc:AlmacenType,

  OrdenesCompra:undefined,
  EntradaMain:AlmacenType,

  Entradas:ParamEntraSalidaMovimiento

};

export type ParamEntraSalidaMovimiento = {
  movimiento: Movimiento,
}
type ParamEntraSalida = {
  tipo: "E"|"S",
}
export type AlmacenType = {
  tipo: "E"|"S",
  almacen:Almacen,
};

export default RootScreens;