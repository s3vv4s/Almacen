import { MovimientosAlmacen } from "@/constants/UrlsGlobals";
import { ArgumentsMovimientos } from "./ModelBusqueda";
import ManagerError from "@/utils/ManagerError";
import { Movimientos } from "../../ListaOC/ListaOCModels";

class BusquedController {

  private header: Headers;
  constructor(header:Headers) {
    this.header = header;

  }

  public async getMovimientos(argSearch: ArgumentsMovimientos|undefined): Promise<Movimientos> {
    console.log(this.buildUrl(argSearch));
    const response = await fetch(this.buildUrl(argSearch),{
      method: "GET",
      headers: this.header,
    });
    const text = await response.text();
    if(response.status == 401){
      throw new ManagerError(text, response.status);
    }
    const parse: Movimientos = await JSON.parse(text);
    return parse;
  }

  private buildUrl(args: ArgumentsMovimientos|undefined) : string{
    if (args?.MovimientoID == "" || args?.MovimientoID == "-") {
        args.MovimientoID = -1;
        console.log("No deberia entrar");
    }
    return MovimientosAlmacen.movimientos+`AlmacenID=${args?.AlmacenID}&AsignacionID=${args?.AsignacionID}&MovimientoID=${args?.MovimientoID}&observaciones=${args?.observaciones}&orderBy=MovimientoID desc&pagina=${args?.pagina}&referencia=${args?.referencia}&status=${args?.status}&tipoMovimiento=${args?.tipoMovimiento}&cve_ordenCompra=${args?.cve_ordenCompra}`;
  }

}

export default BusquedController;