import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import {Text, View} from "react-native";

type TabParamList = {
  Home: undefined;
  Profile: undefined;
};
const Tab = createBottomTabNavigator<TabParamList>();

const navigation = useNavigation<NavigationProp<Screen>>();

export const SettingsScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => <Text style={{ color }}></Text>,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => <Text style={{ color }}>Profile</Text>,
        }}
      />
    </Tab.Navigator>
  );
};