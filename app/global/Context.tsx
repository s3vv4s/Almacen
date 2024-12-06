import RootScreens from "@/constants/RootScreens";
import { NavigationProp, StackActions, StackNavigationState } from "@react-navigation/native";
import { useNavigation } from "expo-router";
import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";

export type ContextType = {
  usuario: string,
  isValidated: boolean,
  refreshToken: string,
  token: string,
  ubicacion: string|undefined,
};

interface ContextProp  {
  stateContext: ContextType|undefined;
  setContext: React.Dispatch<React.SetStateAction<ContextType|undefined>>;
}

export const ContextState = createContext<ContextProp|undefined>(undefined);



function ContextProvider({children}: {children: ReactNode}) {


  const [stateContext,setContext] = useState<ContextType|undefined>(undefined);

  return (
    <ContextState.Provider value={{stateContext,setContext}}>
      {children}
    </ContextState.Provider>
  );

};

export function  useContextState(): ContextProp {

  const context = useContext(ContextState);


  if (context === undefined) {
    throw new Error("useContextState must be used within a ContextProvider");
  }
  return context;
}
export default ContextProvider;