import { AlmacenType } from "@/constants/RootScreens";
import { createContext, useContext, useState } from "react";

interface ContextSelectAlmacenAndType {
  selectAlmacenAndType: AlmacenType|undefined;
  setSelectAlmacenAndType: React.Dispatch<React.SetStateAction<AlmacenType|undefined>>;
}

const contexSelect = createContext<ContextSelectAlmacenAndType|undefined>(undefined);


function ContextAlmacenAndType({children}: {children: React.ReactNode}) {
  const [selectAlmacenAndType,setSelectAlmacenAndType] = useState<AlmacenType|undefined>(undefined);
  return (
    <contexSelect.Provider value={{selectAlmacenAndType,setSelectAlmacenAndType}}>
      {children}
    </contexSelect.Provider>
  );
}

 function useContextSelectAlmacenAndType(): ContextSelectAlmacenAndType {

  const context = useContext(contexSelect);

  if (context === undefined) {
    throw new Error("useContextSelectAlmacenAndType must be used within a contextSelectAlmacenAndType");
  }
  return context;
}
