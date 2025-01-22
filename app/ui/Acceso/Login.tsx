
import { ActivityIndicator, Text, TextInput, View, StyleSheet, Button,Image, ImageBackground, Pressable } from "react-native";
import { userAuthViewmodel } from "./AuthViewModel";
import React, { useState } from "react";
import {BlurView} from "expo-blur"
import ButtonPrimary from "../components/Buttons";
import { Colors } from "@/constants/Colors";
import InputPrimary from "../components/Inputs";
import PicketCalendar from "../components/PIcketCalendar";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import RootScreens from "@/constants/RootScreens";
import AuthCamara from "./AuthCamara";
import { stripBaseUrl } from "expo-router/build/fork/getStateFromPath-forks";

type Props = NativeStackScreenProps<RootScreens, "Login">;
const Login = ({navigation,route}: Props) => {
  const {
    error,
    loading,
    loginUser,
    setUserName,
    username,
    password,
    setPassword,
    showCamara,
    setShowCamara,
    setLoginContext
  } = userAuthViewmodel();


  //Estado para picket fecha de trabajo
  const {dateString,setDate} = PicketCalendar();
  const verificar = async () => {
    await loginUser(dateString);
  };

 return (
    <View style={styles.container}>
      <BlurView intensity={90}  style={styles.containerImg} tint="dark" >
      <Image source={require("@/assets/images/dif_logo.png")} style={{
          position: "absolute",
          width: 300, height: 300,
          resizeMode: "contain",
        }}/>
      </BlurView>

      <InputPrimary
      placeholder="Usuario"
      value={username}
      onChangeText={(value:string)=>{
        let user = value.trim().toLowerCase();
        setUserName(user);
      }} />

      <InputPrimary
      placeholder="Contraseña"
      value={password}
      onChangeText={setPassword} />

      {loading && <ActivityIndicator size="large" color={Colors.main.primary} />}
      {error && <Text style={styles.errorText}>{error}</Text>}
      <ButtonPrimary  onClick={verificar} text="Entrar" estilos={{borderRadius:10}}/>
      <ButtonPrimary  onClick={setDate} text="Fecha de Trabajo" estilos={{borderRadius:10}}/>
      <AuthCamara showChange={setShowCamara} visible={showCamara} next={setLoginContext} userName={username}/>
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
