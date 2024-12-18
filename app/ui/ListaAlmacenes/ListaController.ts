import { EntrasAlmacen } from "@/constants/UrlsGlobals";
import { Almacen } from "./ListaModel";
import  ManagerError  from "@/utils/ManagerError";



class ListaController {
  private head : Headers;
  constructor(head:Headers) {
    this.head = head;
  }
  public getListaAlmacenes = async ():Promise<Array<Almacen>> => {
    const res = await fetch(EntrasAlmacen.ListAlmacenes,{
      method: "GET",
      headers:this.head ,
    });

    if(res.status == 401){
      throw new ManagerError("Session Expireda", 401);
    }
    if (res.status !== 200) {
      const tt = await res.text();
      throw new ManagerError(tt, res.status);
    }
    const resuulta = await res.text();
    const parse:Array<Almacen> = await JSON.parse(await resuulta);
    return parse;
  };
}

export default  ListaController;
