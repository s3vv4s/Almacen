import { HeaderApiOC } from "@/models/HeaderEntradaSalida";
import { MainEntrada } from "@/models/MainEntrada";
import { create } from "zustand";

export type EntradaState = {
  header: HeaderApiOC | undefined,
  main: MainEntrada | undefined,
  setHeader: (header:HeaderApiOC | undefined) => void,
  setMain:(main:MainEntrada | undefined) => void,
}

const useEntradaState = create<EntradaState>()((set) => ({
  header: undefined,
  main: undefined,
  setHeader: (header:HeaderApiOC | undefined) => set({ header }),
  setMain:(main:MainEntrada | undefined) => set(({ main })),
}));


export default useEntradaState;