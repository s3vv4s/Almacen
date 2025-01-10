import { Almacen } from "@/app/ui/ListaAlmacenes/ListaModel";

 type RootScreens = {
  Login: undefined,
  MenuES: undefined,
  ListaAlmacenes: ParamEntraSalida,
  ListaOc:ListaOcArgs,

  OrdenesCompra:undefined,
  TabsPrueba:undefined

};
type ParamEntraSalida = {
  tipo: "E"|"S",
};
export type ListaOcArgs = {
  tipo: "E"|"S",
  almacen:Almacen,
};

export default RootScreens;