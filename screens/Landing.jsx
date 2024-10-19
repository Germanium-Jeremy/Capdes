import React from "react";
import { Text, View, Image } from "react-native";

export default function Landing() {
     return (
          <View className={`w-screen h-screen bg-[#555F77]`}>
               <View className={`px-[30px] py-[20px]`}>
                    <Text className={`text-white text-xl font-bold`}>WELCOME TO</Text>
                    <Text className={`text-white text-5xl font-bold pt-[5px]`}>CA.P.DE.S</Text>
                    <Text className={`text-white text-xl`}>Your Solution for Car Problem On The Go.</Text>
               </View>
               <Image source={require('../assets/LandingImg1.png')} className={`w-screen h-[200px] pb-[100px]`} />
          </View>
     )
}