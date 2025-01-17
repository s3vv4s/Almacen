
export enum UrlSegurdad  {
  root = "http://172.16.9.10/seguridad/api/usuarios",
  refreshToken = root+"/refreshToken",
  fullname = root+"/obtenerNombreCompletoDelUsuario",//Este queda pendiente
};

enum EntrasAlmacen {
  root = "http://172.16.9.10/WebServicesARM/ControlAlmacenes/api/",
  ListAlmacenes = root+"Almacenes/almacenesAsignados",
  ListMovimientos = root+"Movimientos?",


}