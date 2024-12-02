import { UrlSegurdad } from "@/app/global/UrlSeguridad";
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
