
import { useState } from "react";
import { LoginToken } from "./AuthModel";
import { useContextState } from "@/app/global/Context";
import { useNavigation } from "@react-navigation/native";
import { NavigationProp, StackActions } from "@react-navigation/native";


export const userAuthViewmodel = () => {

  const navi = useNavigation<NavigationProp<Screen>>();
  const [loading,setLoading] = useState<boolean>(false);
  const [error,setError] = useState<string>("");
  const {setContext,stateContext} = useContextState();

  const [showCamara,setShowCamara] = useState<boolean>(false);


  const [refreshTokenn,setRefreshToken] = useState<string>("");
  const [username, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const loginUser = async (date: string|Date) => {

    setLoading(true);
    setError("");
    try {

      const result = await LoginToken(username, password, date);
      setRefreshToken(result);
      setShowCamara(true);

    } catch (error) {
      setError((error as Error).message);
    } finally {
        setLoading(false);
    }
  };

  const setLoginContext = () => {
    setContext({
      isValidated:true,
      refreshToken:refreshTokenn,
      token:refreshTokenn,
      usuario:username,
      ubicacion:"Mexico",
    });
    navi.dispatch(StackActions.replace("Home"));
  };

  return {
    loading,
    error,
    loginUser,
    setLoginContext,
    showCamara,setShowCamara,
    username,setUserName,password,setPassword
  };

};