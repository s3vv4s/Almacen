import React, { useEffect, ReactNode } from "react";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { StackActions } from "@react-navigation/native";
import { useContextState } from "./Context";
 // Asegúrate de ajustar la ruta según tu estructura

interface AuthHandlerProps {
  children: ReactNode;
}

const AuthHandler: React.FC<AuthHandlerProps> = ({ children }) => {
  const navigation = useNavigation<NavigationProp<Screen>>();

  const { stateContext, setContext } = useContextState();

  useEffect(() => {
    //Ya funciona el problema es que pasa muy rapido y pasa de lago la validacion, aspi que da un falso aun que este tal vez sea contrario
    //Aqui aremos la validacion de token


    if (stateContext == undefined || stateContext?.isValidated == false) {
      navigation.dispatch(StackActions.replace("Login"));
      console.log("Entra aqui cuando no deveria ");
    }

  }, [stateContext]);
  return <>{children}</>;
};

export default AuthHandler;
