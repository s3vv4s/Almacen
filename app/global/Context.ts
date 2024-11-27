import { createContext, ReactNode, useContext, useState } from "react";
import { Text } from "react-native";

type ContextType = {
  usuario: string,
  isValidated: boolean,
  refreshToken: string,
  token: string,
  ubicacion: string|undefined,
};

interface ContextProp  {
  stateContext: ContextType;
  setContext: (context: ContextType) => void;
}
const ContextState = createContext<ContextProp>({
  stateContext: {
    usuario: "",
    isValidated: false,
    refreshToken: "",
    token: "",
    ubicacion: undefined,
  },
  setContext: () => {},
});

type Chil={
    children:ReactNode|JSX.Element|JSX.Element[]
}
function ContextProvider({children}: Chil) {
  const Contesto = useState<ContextProp|null>(null);

  return (
    <ContextState.Provider value={Contesto} >
      <Text>Priovider</Text>
    </ContextState.Provider>

  );
};
