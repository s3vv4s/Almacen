
import ManagerError from "@/utils/ManagerError";
import React, { createContext, ReactNode, useContext,useState } from "react";

export type ContextType = {
  usuario: string|undefined,
  isValidated: boolean|undefined,
  refreshToken: string|undefined,
  token: string|undefined,
  ubicacion: string|undefined,
  error: ManagerError|undefined,
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