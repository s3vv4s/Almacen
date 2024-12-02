
import { useState } from "react";
import { LoginToken } from "./AuthModel";



export const userAuthViewmodel = () => {

  const [loading,setLoading] = useState<boolean>(false);
  const [error,setError] = useState<string>("");

  const loginUser = async (username: string, password: string,date: string|Date) => {
    setLoading(true);
    setError("");
    try {
        const result = await LoginToken(username, password, date);


    } catch (error) {
      setError((error as Error).message);
    } finally {
      setTimeout(async () => {
      setLoading(false);
      }, 2000);
    }
  };


    return {
      loading,
      error,
      loginUser,
    };



};