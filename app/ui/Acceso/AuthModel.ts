import { UrlSegurdad } from "@/app/global/UrlSeguridad";
import { DecodeJWT, TokenRefresh } from "@/models/TypesSeguridad";
import {jwtDecode, } from "jwt-decode";

export const LoginToken = async (username: string, password: string,fecha : Date | string): Promise<string> => {
  // Simulación de una llamada API
  username = username.toLowerCase().trim();
  password = password.replace(/"/g, '\\"');
  try {
    const body = JSON.stringify({
      username,
      password,
      fecha,
    });

    const res = await fetch(UrlSegurdad.root, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    });
    console.log(body);
    if (res.status !== 200) {
      const tt = await res.text();
      throw new Error(`${tt}`);
    }
    return await res.text();

  } catch (error) {
    throw new Error((error as Error).message);
  }
};
export const RefreshToken = async (username:string, refreshtoken:string):Promise<DecodeJWT> =>{

  try {
    const head = new  Headers();
    head.append("Content-Type", "application/json");
    const body = {
      username,
      refreshtoken
    };
    const raw = JSON.stringify(body);
    const res = await fetch(UrlSegurdad.refreshToken, {
      method: "PUT",
      headers: head,
      body: raw,
    });
    if (res.status !== 200) {
      const tt = await res.text();
      throw new Error(`${tt}`);
    }

    //console.log(await res.text());
    const respuesta:TokenRefresh = await JSON.parse(await res.text());
    console.log(respuesta.fingerprint);
    const decode = jwtDecode<DecodeJWT>(respuesta.token);
    console.log(decode);
    return decode;
  } catch (error) {
    throw new Error((error as Error).message);

    console.log((error as Error).message);
  }
};