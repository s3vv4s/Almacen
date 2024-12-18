import { MovimientosAlmacen } from "@/constants/UrlsGlobals";
import { ArgumentsMovimientos, Movimientos } from "./ModelsEntradaSalida";
import ManagerError from "@/utils/ManagerError";

class BusquedController {

  private header: Headers;
  constructor(header:Headers) {
    this.header = header;

  }

  public async getMovimientos(argSearch: ArgumentsMovimientos|undefined): Promise<Movimientos> {

    const response = await fetch(this.buildUrl(argSearch),{
      method: "GET",
      headers: this.header,
    });
    const text = await response.text();
    if(response.status == 401){
      throw new ManagerError(text, response.status);
    }
    const parse: Movimientos = JSON.parse(text);
    return parse;
  }

  private buildUrl(args: ArgumentsMovimientos|undefined) : string{
    return MovimientosAlmacen.movimientos+`?AlmacenID=${args?.AlmacenID}&AsignacionID=${args?.AsignacionID}&MovimientoID=-1&observaciones=${args?.observaciones}&orderBy=MovimientoID desc&pagina=${args?.pagina}&referencia=&status=${args?.status}&tipoMovimiento=${args?.tipoMovimiento}`;
  }

}

export default BusquedController;