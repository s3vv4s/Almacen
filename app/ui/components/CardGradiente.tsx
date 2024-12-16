import { EnumIcons } from "@/assets/EnumIcons";
import Icon from "@/assets/Icons";
import { LinearGradient } from "expo-linear-gradient";
import { Pressable, View, ViewStyle } from "react-native";





type Props = {
  children: React.ReactNode;
  style?: ViewStyle;
  icono: EnumIcons;
  activate: () => void;
};
const CardGradiente = ({ children, style, icono, activate }: Props) => {
  return (
    <Pressable
    onPress={activate}
    style={[{
      marginTop: 20, flex: 1,
      backgroundColor: "white",
      shadowColor: "#000",
      borderRadius: 10,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      display: "flex",
      flexDirection: "column",
    }, style]}>

      <LinearGradient
        colors={['#6c162c', 'purple']}
        style={{
          width: '100%',
          height: '20%',

          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
        }}>
      </LinearGradient>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <View style={{
          position: "absolute",
          backgroundColor: "white", padding: 10, borderRadius: 50,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        }}>
          <Icon name={icono} size={90} color={"white"} />
        </View>
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column" }}>
        {children}
        <LinearGradient
          colors={['#6c162c', 'purple']}
          style={{
            bottom: 0,
            position: "absolute",
            width: '100%',
            height: '20%',
            borderBottomRightRadius: 10,
            borderBottomLeftRadius: 10,
          }}>
        </LinearGradient>


      </View>
    </Pressable>


  );
};

export default CardGradiente;