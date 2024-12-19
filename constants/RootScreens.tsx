
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
  almacen:number,
};

export default RootScreens;