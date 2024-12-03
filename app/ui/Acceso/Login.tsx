import { ActivityIndicator, Text, TextInput, View, StyleSheet, Button,Image, ImageBackground, Pressable } from "react-native";
import { userAuthViewmodel } from "./AuthViewModel";
import React, { useState } from "react";
import { DateTimePickerAndroid, DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { FormatDate } from "@/utils/FormatDate";
import {BlurView} from "expo-blur"
import ButtonPrimary from "../components/Buttons";
import { Colors } from "@/constants/Colors";
import InputPrimary from "../components/Inputs";

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
      <Image source={require("@/assets/images/dif_logo.png")} style={{
          position: "absolute",
          width: 300, height: 300,
          resizeMode: "contain",
        }}/>
         </BlurView>

      <InputPrimary
      placeholder="Usuario"
      value={username}
      onChangeText={setUserName} />

      <InputPrimary
      placeholder="Contraseña"
      value={password}
      onChangeText={setPassword} />


      {loading && <ActivityIndicator size="large" color="#6c162c" />}
      {error && <Text style={styles.errorText}>{error}</Text>}
      <ButtonPrimary  onClick={verificar} text="Entrar" estilos={{borderRadius:10}}/>
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
    height: 40,
    borderTopWidth:0,
    borderLeftWidth:0,
    borderRightWidth:0,
    borderWidth: 2, marginBottom: 12, padding: 8,

  },
  errorText: {
    color: 'red', marginBottom: 12
  },
  successText: {
    color: 'green', marginBottom: 12
  }
});

export default Login;