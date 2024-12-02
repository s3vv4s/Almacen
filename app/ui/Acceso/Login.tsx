import { ActivityIndicator, Text, TextInput, View, StyleSheet, Button,Image, ImageBackground } from "react-native";
import { userAuthViewmodel } from "./AuthViewModel";
import { useState } from "react";
import { DateTimePickerAndroid, DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { FormatDate } from "@/utils/FormatDate";
import {BlurView} from "expo-blur"

const Login = () => {
  const { error, loading, loginUser } = userAuthViewmodel();
  const [username, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  //Estado para picket fecha de trabajo
  const [dateWork, setDateWork] = useState<Date>(new Date());


  const verificar = () => {
    loginUser(username, password, FormatDate(dateWork));
  };

  const setDate = () =>{
    DateTimePickerAndroid.open({
      mode:"date",
      value:dateWork,
      onChange:(event:DateTimePickerEvent, fecha : Date|undefined)=>{
       console.log(FormatDate(fecha));
       //@ts-ignore
       setDateWork(fecha);
      }
    });

  }
  return (
    <View style={styles.container}>
      <BlurView intensity={90}  style={styles.containerImg}>
      <ImageBackground source={require("@/assets/images/dif_logo.png")} style={{
          position: "absolute",
          width: 300, height: 300,


        }}/>
         </BlurView>
      <TextInput style={styles.input} placeholder="Username" value={username} onChangeText={setUserName} />
      <TextInput style={styles.input} placeholder="Password" value={password} onChangeText={setPassword} />
      {loading && <ActivityIndicator size="large" color="#6c162c" />}
      {error && <Text style={styles.errorText}>{error}</Text>}
      <Button title="Login" onPress={verificar} disabled={loading} />
      <Button  onPress={setDate} title="Fecha de Trabajo"/>
    </View>);
};

const styles = StyleSheet.create({
containerImg:{


  justifyContent: "center",
  alignContent: "center",
  alignItems: "center",
},
  container: {
    flex: 1, justifyContent: 'center',
    alignContent: 'center',
    padding: 16
  },
  input: {
    height: 40, borderColor: 'gray',
    borderWidth: 1, marginBottom: 12, padding: 8
  },
  errorText: {
    color: 'red', marginBottom: 12
  },
  successText: {
    color: 'green', marginBottom: 12
  }
});

export default Login;