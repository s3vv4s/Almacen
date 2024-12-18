import { DecodeJWT } from "@/models/TypesSeguridad";
import { createContext, ReactNode, useContext, useState } from "react";
import { useContextState } from "./Context";
interface ContextProps{
  statePermisos: DecodeJWT|undefined;
  setStatePermisos: React.Dispatch<React.SetStateAction<DecodeJWT|undefined>>;
}

export const ContextPermisosState = createContext<ContextProps|undefined>(undefined);


function ContextPermisos({children}: {children: ReactNode}) {

  const [statePermisos,setStatePermisos] = useState<DecodeJWT|undefined>(undefined);
  return (
    <ContextPermisosState.Provider value={{statePermisos,setStatePermisos}}>
      {children}
    </ContextPermisosState.Provider>
  );
}

export function  useContextPermisos(): ContextProps {

  const context = useContext(ContextPermisosState);

  if (context === undefined) {
    throw new Error("useContextPermisos must be used within a ContextPermisosProvider");
  }
  return context;
}

export const getHeader = ():Headers => {
  console.log("Config Header");
  const head = new  Headers();
  console.log("getHeader");
  const {stateContext} = useContextState();
  head.append("Content-Type", "application/json");
  head.append("Authorization", `Bearer ${stateContext?.token}`);
  return head;
};


export default ContextPermisos;