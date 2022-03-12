import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";

import PhoneNumber from "./screens/PhoneNumber";
import Otp from "./screens/Otp";
import Gated from "./screens/Gated"


 export type StackParamList = {
    PhoneNumber: undefined;
    Otp: {phoneNumber: string}
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
        <Stack.Screen name="Gated" component={Gated} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
