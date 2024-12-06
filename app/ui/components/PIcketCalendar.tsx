import { useContextState } from "@/app/global/Context";
import { FormatDate } from "@/utils/FormatDate";
import { DateTimePickerAndroid, DateTimePickerEvent } from "@react-native-community/datetimepicker";
import { useEffect, useState } from "react";

const PicketCalendar = () => {
    const [dateWork,setDateWork] = useState<Date>(new Date());
    const [dateString,setDateString] = useState<string>(FormatDate(new Date()));

    useEffect(()=>{},[setDateString,setDateWork]);

  const setDate = () =>{
    DateTimePickerAndroid.open({
      mode:"date",
      value:dateWork,
      onChange:(event:DateTimePickerEvent, fecha : Date|undefined)=>{
       console.log(fecha);
        setDateString(FormatDate(fecha));
       //@ts-ignore
       setDateWork(fecha);
      }
    });
  }

  return {
    dateWork,
    dateString,
    setDate,
  };


}

export default PicketCalendar;