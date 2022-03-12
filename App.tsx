import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";

import PhoneNumber from "./screens/PhoneNumber";
import Otp from "./screens/Otp";


 export type StackParamList = {
    PhoneNumber: undefined;
    Otp: undefined;
    Gated: undefined;
  } | Record<string, object | undefined>
  
const App = () => {
  

  const Stack = createNativeStackNavigator<StackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="PhoneNumber"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="PhoneNumber" component={PhoneNumber} />
        <Stack.Screen name="Otp" component={Otp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
