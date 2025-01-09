import { Colors } from '@/constants/Colors';
import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';



type PropsShow = {
  width: Animated.SharedValue<number>,
  children: React.ReactNode,
}
const AppAccordeon = ({ width, children, }: PropsShow) => {
  useEffect((

  ) => { console.log("accordion useEffect"); }, [width]);
  return (
    <Animated.View
      style={{
        flex: width,
        maxHeight:"40%",
        minHeight: "40%",
        borderColor: Colors.main.primary,
        borderWidth: 1,
        position: 'sticky',
      }}>
      {children}
    </Animated.View>
  );
}


export const MvvMAcordeon = () => {

  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [minP, setMinP] = useState<number>(0);
  const [maxP, setMaxP] = useState<number>(0);

  const width = useSharedValue(0);
  useEffect(() => {
    handlePress();
  }, [isExpanded]);
  const handlePress = () => {
    //setIsExpanded(!isExpanded);
    width.value = withSpring(isExpanded ? maxP : minP);
  };
  return {
    isExpanded,
    width,
    setMinP,
    setMaxP,
    setIsExpanded
  };

}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 24,
  },
  buttonContainer: {
    flex: 1,
    paddingBottom: 16,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  parent: {
    width: 200,
  },
  wrapper: {
    width: '100%',
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
  },
  animatedView: {
    width: '100%',
    overflow: 'hidden',
  },
  box: {
    height: 120,
    width: 120,
    backgroundColor: '#b58df1',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

//export default AppAccordeon;
