//Lista de Movimientos, en controller por ejemplo eliminar solamente ,

import { EntradasAlmacen, SalidasAlmacen } from "@/constants/UrlsGlobals";
import ManagerError from "@/utils/ManagerError";


class ListaController {
  private header: Headers;

  private tipo: "E"|"S";
  constructor(header:Headers, tipo:"E"|"S") {
    this.header = header;
       this.tipo = tipo;
  }
  public async removeOc(movimientoId?: number,almacenId?:number): Promise<void> {
    try {
      const url = this.urlBuilder(movimientoId,almacenId);
      console.log(url);
      const res = await fetch(url,{
        method: "DELETE",
        headers:this.header ,
      });
      const text = await res.text();
      if(res.status == 401){
        throw new ManagerError(text,401);
      }
      if(res.status != 204){
        throw new ManagerError(text,res.status);
      }
    }catch(error){
      throw new ManagerError((error as Error).message,0);
    }
  }
  private urlBuilder(movimientoId?: number,almacenId?:number):string{
    console.log("Tipo¡: "+this.tipo);
    if(this.tipo == "E"){
      return EntradasAlmacen.Entradas+`?AlmacenID=${almacenId}&EntradaID=${movimientoId}`;
    }else {
      return SalidasAlmacen.Salidas+`?AlmacenID=${almacenId}&SalidaID=${movimientoId}`;
    }
  }

}

export default ListaController;