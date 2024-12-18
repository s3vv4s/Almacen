import React, { useEffect, ReactNode, useState } from "react";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { StackActions } from "@react-navigation/native";
import { useContextState } from "./Context";
import ModalError from "../ui/components/ModalError";
 // Asegúrate de ajustar la ruta según tu estructura

interface AuthHandlerProps {
  children: ReactNode;
}

const AuthHandler: React.FC<AuthHandlerProps> = ({ children }) => {
  const navigation = useNavigation<NavigationProp<Screen>>();

  const { stateContext, setContext } = useContextState();

    const [mostrar, setMostrar] = useState<boolean>(false);
  useEffect(() => {

    if (stateContext?.error != undefined) {
      setMostrar(true);
    }

  }, [stateContext,setContext]);

const Verificacion = () => {
    //Ya funciona el problema es que pasa muy rapido y pasa de lago la validacion, aspi que da un falso aun que este tal vez sea contrario
    //Aqui aremos la validacion de token
    setContext(undefined);
    if (stateContext == undefined || stateContext?.isValidated == false) {
      navigation.dispatch(StackActions.replace("Login"));
    }
};
  return (
    <>
    {children}
    <ModalError mostrar={mostrar} setMostrar={setMostrar} error={stateContext?.error} action={Verificacion}/>
    </>
  );
};

export default AuthHandler;
