
//Esta clase tendra la peticion de al api de verificacion de identidad
//y la respuesta de la misma

import { TypeAuthFace } from "@/constants/TypeAuthFace";


/**
 * Controller para la verificacion de identidad con el rostro
 *
 */
class Verificacion{
  /**
   * Aborta la verificacion de identidad
   */
  private abort : AbortController;

  constructor(){
    this.abort = new AbortController();
  }
  public abortVerificacion() {
   this.abort.abort();
  }

  public async Verificar(uriImage: string,nombre:string) {

      const forms = new FormData();
      forms.append("nickname", nombre);
      forms.append("foto", { name: "fotos.jpg", type: 'image/jpeg', uri: uriImage } as any);
      const resp = await fetch(TypeAuthFace.verificar, {
        method: "POST",
        body: forms,
        signal: this.abort.signal,
      });
      const respuesta = await resp.text();
      if (resp.status != 200) {
        throw new Error(respuesta);
      }
      console.log("Verificacion de identidad exitosa");

  }
}

export default new  Verificacion;