import { useNavigation } from "@react-navigation/native";
import {  NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { SafeAreaView, StyleSheet, Button, View, Text } from "react-native";
import { StackParamList } from "../App";



const Gated = () => {
 const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>()
 
 return (
   <SafeAreaView style={styles.wrapper}>
     <View>
       <Text>Successfully registered!</Text>
     </View>
     <Button
       title="Start over"
       onPress={() => navigation.replace("PhoneNumber")}
     />
   </SafeAreaView>
 );
};

const styles = StyleSheet.create({
 wrapper: {
   flex: 1,
   justifyContent: "center",
   alignItems: "center",
 },
});

export default Gated;
