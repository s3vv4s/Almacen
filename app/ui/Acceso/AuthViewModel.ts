
import { useState } from "react";
import { decodeJwt, LoginToken, RefreshToken } from "./AuthModel";
import { useContextState } from "@/app/global/Context";
import { useNavigation } from "@react-navigation/native";
import { NavigationProp, StackActions } from "@react-navigation/native";
import { DecodeJWT } from "@/models/TypesSeguridad";
import { useContextPermisos } from "@/app/global/ContextPermisos";


export const userAuthViewmodel = () => {

  const navi = useNavigation<NavigationProp<Screen>>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const { setContext, stateContext } = useContextState();
  const { statePermisos, setStatePermisos } = useContextPermisos();

  const [showCamara, setShowCamara] = useState<boolean>(false);


  const [tokenLogin, setTokenLogin] = useState<string>("");
  const [refreshTokenn, setRefreshToken] = useState<string>("");
  const [username, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [decodeJWT, setDecodeJWT] = useState<DecodeJWT | undefined>(undefined);

  /**
   * View model que maneja el login del usuario, desde el usuario y contraseña,
   * por medio de estados,
   * @returns manejo de estados
   */
  const loginUser = async (date: string | Date) => {
    setLoading(true);
    setError("");
    try {

      const result = await LoginToken(username, password, date);
      const tokens = await RefreshToken(username, result);
      setRefreshToken(tokens.token);
      const decode = decodeJwt(tokens.token);
      setDecodeJWT(decode);

      setTokenLogin(result);
      if(!decode.puedeUsarTablet){
        throw new Error("No tiene permisos para usar la tablet");
      }
      setShowCamara(true);

    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const setLoginContext = () => {

      setContext({
        isValidated: true,
        refreshToken: refreshTokenn,
        token: tokenLogin,
        usuario: username,
        ubicacion: "Mexico",
        error:undefined,
      });
      setStatePermisos(decodeJWT);
      navi.dispatch(StackActions.replace("MenuES"));

  };

  return {
    loading,
    error,
    loginUser,
    setLoginContext,
    showCamara, setShowCamara,
    username, setUserName, password, setPassword,

  };

};