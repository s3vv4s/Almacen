
 type RootScreens = {
  Login: undefined,
  MenuES: undefined,
  ListaAlmacenes: ParamEntraSalida,
  ListaOc:ParamEntraSalida,

};
type ParamEntraSalida = {
  tipo: "E"|"S",
};

export default RootScreens;