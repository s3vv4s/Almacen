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
    setContext({
      usuario: "traba",
      isValidated: true,
      refreshToken: "123456",
      token: "123456",
      ubicacion: "Madrid",
    });
//Ya funciona el problema es que pasa muy rapido y pasa de lago la validacion, aspi que da un falso aun que este tal vez sea contrario
//Aqui aremos la validacion de token
    if (!true) {
      navigation.dispatch(StackActions.replace("Login"));
      console.log("Entra aqui cuando no deveria ");
    }
  }, [setContext ]);

  return <>{children}</>;
};

export default AuthHandler;
