const root = "http://172.16.9.10/WebServicesARM/ControlAlmacenes/api/";

export enum AlmacenesList{
  ListAlmacenes = root+"Almacenes/almacenesAsignados",
}

export enum MovimientosAlmacen{
  movimientos = root+ "Movimientos/?",
   ObtenerRegistro = root +"OrdenesCompra/obtenerRegistro?",
}

export enum EntradasAlmacen{
  Entradas = root+ "EntradasPorOrdenDeCompra/"
}
export enum SalidasAlmacen{
  Salidas = root+ "SalidasPorOrdenDeCompra/"
}
