import { Almacen } from "@/app/ui/ListaAlmacenes/ListaModel";

 type RootScreens = {
  Login: undefined,
  MenuES: undefined,
  ListaAlmacenes: ParamEntraSalida,
  ListaOc:ListaOcArgs,

};
type ParamEntraSalida = {
  tipo: "E"|"S",
};
type ListaOcArgs = {
  tipo: "E"|"S",
  almacen:Almacen,
};

export default RootScreens;