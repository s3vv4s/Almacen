import { EntradasAlmacen, MovimientosAlmacen, SalidasAlmacen } from "@/constants/UrlsGlobals";
import { HeaderApiOC } from "@/models/HeaderEntradaSalida";
import ManagerError from "@/utils/ManagerError";

class ControllerHeaderEntradaSalida<T> {
  private header:Headers;
  constructor(head:Headers) {
    this.header = head;
  }
  //Recordemos que asignacionID, pueden ser varios entonces se obtiene de un array del Header de Movmiento
  public async obtenerRegistro(almacen:number, asignacionId:number|undefined):Promise<HeaderApiOC|undefined> {
    try {
      console.log("Obteniendo registro"+almacen+asignacionId);
      console.log(MovimientosAlmacen.ObtenerRegistro+`AlmacenID=${almacen}&AsignacionID=${asignacionId}`);
      const response = await fetch(MovimientosAlmacen.ObtenerRegistro +
          `AlmacenID=${almacen}&AsignacionID=${asignacionId}`, {
        method: "GET",
        headers: this.header,
      });
      const text = await response.text();
      console.log(text);

      if (response.status == 401) {
        throw new ManagerError(text,401);
      }
      if (response.status != 200) {
        throw new ManagerError(text,response.status);
      }
      const decode = ( await JSON.parse(text)) as HeaderApiOC;
      return decode;
    } catch (error) {
      throw new ManagerError((error as Error).message,0);

    }
  }
  public async EntradaSalidaMovimiento(tipo:"E"|"S", almacen:number, clave:number):Promise<T|undefined> {
    try {
      const url = tipo == "E" ?
        EntradasAlmacen.Entradas+`?AlmacenID=${almacen}&EntradaID=${clave}`
        : SalidasAlmacen.Salidas+`?AlmacenID=${almacen}&SalidaID=${clave}`;

        const response = await fetch(url, {
          method: "GET",
          headers: this.header,
        });
        const text = await response.text();
        if (response.status == 401) {
          throw new ManagerError(text,401);
        }
        if (response.status != 200) {
          throw new ManagerError(text,response.status);
        }
        const decode = ( await JSON.parse(text)) as T;
        return decode;

    } catch (error) {
      throw new ManagerError((error as Error).message,0);
    }
  }
}

export default  ControllerHeaderEntradaSalida;