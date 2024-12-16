import { EntrasAlmacen } from "@/constants/UrlsGlobals";
import { Almacen } from "./ListaModel";

import { useContextState } from "@/app/global/Context";



class ListaController {

  private head : Headers;
  constructor(head:Headers) {
    this.head = head;
  }

  public getListaAlmacenes = async ():Promise<Array<Almacen>> => {
    console.log("Lista controller");
    const {stateContext, setContext} = useContextState();
    this.head.append("Content-Type", "application/json");
    const res = await fetch(EntrasAlmacen.ListAlmacenes,{
      method: "GET",
      headers:this.head ,
    });
    console.log(res.status);
    console.log(await res.text());

    if(res.status == 401){
    setContext({
        isValidated: false,
        refreshToken: "",
        token: "",
        usuario: "",
        ubicacion: "",
      });
    }
    if (res.status !== 200) {
      const tt = await res.text();
      throw new Error(`${tt}`);
    }
    const parse:Array<Almacen> = await JSON.parse(await res.text());
    return parse;
  };
}

export default  ListaController;
