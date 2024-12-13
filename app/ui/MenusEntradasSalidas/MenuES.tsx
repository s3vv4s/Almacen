import RootScreens from "@/constants/RootScreens";
import { Text, View,Image } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import {LinearGradient} from 'expo-linear-gradient';

type Props = NativeStackScreenProps<RootScreens, "MenuES">;

const MenuES = ({ navigation }: Props) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" ,flexDirection:"row",padding:20 }}>
      <View style={{ marginTop: 20 ,flex:1,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      }}>
<Text>MenuES</Text>
      </View>


      <View style={{ marginTop: 20 ,flex:1,
       backgroundColor:"white",
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
      }}>

      <LinearGradient
       colors={['#6c162c', 'purple']}

        style={{

          width: '100%',
          height: '30%',

          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,

        }}
      >
        <Text>MenuES</Text>
      </LinearGradient>
        <Text style={{fontSize:20}}>MenuESs</Text>
      </View>

    </View>
  );
};



export default MenuES;