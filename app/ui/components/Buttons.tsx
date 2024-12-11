import { Colors } from "@/constants/Colors";
import { Pressable, StyleSheet, StyleSheetProperties, Text, ViewStyle, StyleProp} from "react-native"



type ButtonProps = {
  onClick: () => void;
  text: string;
  estilos?: StyleProp<ViewStyle>;
  activo ?: boolean;
};
const ButtonPrimary = ({onClick,text,estilos,activo}: ButtonProps) => {

    return (
      <Pressable
      //@ts-ignore
      disable={activo}
      onPress={onClick}
      style={[style.primary,estilos]}>
        <Text style={style.texto}>{text}</Text>
      </Pressable>
    );
};


const style = StyleSheet.create({
  primary: {
    padding: 16,
    backgroundColor: Colors.main.primary,
    borderRadius: 10,
    margin:10,

  },
  texto: {
    textAlign: "center",
    color: Colors.main.text,
    fontSize: 16,
    fontWeight: 'bold'
  }

});
export default ButtonPrimary;