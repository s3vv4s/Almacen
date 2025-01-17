
import RootScreens from "@/constants/RootScreens";
import { View, Text, Pressable, ScrollView, TextInput} from "react-native";

import SlidebarAction from "./SlideBarAction";

import { create } from 'zustand'
import { NativeStackNavigationProp} from "@react-navigation/native-stack";
import { Movimiento } from "../ListaOC/ListaOCModels";
import CardMovimiento from "../components/HeaderEntrada/CardMovimiento";

/**
 * Componete donde llegara el movimiento en el cual se encutran los datos necesarios para buscar en la api y obtener sus datos necesarios
 * Se llamara el header principal del orden de compra
 * @param movimiento Datos generales del Movimiento donde estan todos los datos necesarios para mostrar
 */

type Prop = {
  movimiento: Movimiento,
  naviga: NativeStackNavigationProp<RootScreens>
}

const EntradasView = ({movimiento, naviga}:Prop) => {
  return (

    <View style={{flex: 1}}>
      <ScrollView style={{flex: 1}}>
        <CardMovimiento movimientoId={movimiento.movimientoID} almacenId={movimiento.almacenID}/>
        <Counter />
       </ScrollView>
      <SlidebarAction />
    </View>
  );
};

type Store = {
  count: number
  estadosarreglos: Array<string>
  setArreglos: (estadosarreglos:Array<string>) => void
  inc: () => void
  plus: (mas:number) => void
}

const useStore = create<Store>()((set) => ({
  count: 1,
  estadosarreglos:[],
  inc: () => set((state) => ({ count: state.count + 1 })),
  plus: (mas:number) => set((state) => ({ count: state.count + mas })),
  setArreglos: (estadosarreglos:Array<string>) => set((state) => ({ estadosarreglos: estadosarreglos ,}))
}))

function Counter() {
  const { count, inc, plus } = useStore()
  return (
    <View>
      <Text>{count}</Text>
      <Pressable onPress={()=>plus(10)}>
        <Text>Zustand</Text>
      </Pressable>
    </View>
  )
}
export default EntradasView;