import { useState } from "react";
import { StyleProp, ViewStyle, TextInput, StyleSheet,TextStyle} from "react-native";
import { Colors } from "@/constants/Colors";


type InputProps = {
  placeholder: string;
  value : string;
  onChangeText: (text: string) => void;
  estilos?: StyleProp<TextStyle>;
};
const InputPrimary = ({onChangeText,value,estilos, placeholder}: InputProps) => {
  const [isFocus,setIsFocus] = useState<boolean>(false);

  return (
    <TextInput
    value={value}

    onFocus={()=>setIsFocus(true)}
      onBlur={()=>setIsFocus(false)}
      onChangeText={onChangeText}
      placeholder={placeholder}
      style={[
        style.input,
        {borderColor:!isFocus ?  Colors.main.secondary : Colors.main.primary},
        estilos
      ]}
    />
  );
};

const style = StyleSheet.create({

 input: {
    textAlign: "center",
    fontSize: 18,
    height: 40,
    borderTopWidth:0,
    borderLeftWidth:0,
    borderRightWidth:0,
    borderWidth: 2, marginBottom: 12, padding: 8,

  },

});

export default InputPrimary;