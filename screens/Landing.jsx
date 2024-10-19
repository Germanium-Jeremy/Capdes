import React from "react";
import { Text, View, Image, TouchableOpacity} from "react-native";

export default function Landing({ navigation }) {
     return (
          <View className={`bg-[#555F77] h-screen w-screen`}>
               <View className={`px-[30px] py-[20px]`}>
                    <Text className={`text-white text-xl font-bold`}>WELCOME TO</Text>
                    <Text className={`text-white text-5xl font-bold pt-[5px]`}>CA.P.DE.S</Text>
                    <Text className={`text-white text-xl`}>Your Solution for Car Problem On The Go.</Text>
               </View>
               <Image source={require('../assets/LandingImg1.png')} className={`w-screen h-[400px] mb-[30px]`} />
               <View className={`px-[20px] pr-[5px] my-[30px] flex flex-row gap-[16px] w-full justify-between`}>
                    <View className={`px-[25px] py-6 bg-[#444F66] rounded-lg shadow-md shadow-gray-900 max-w-[250px]`}>
                         <Text className={`text-[#aff] text-2xl font-semibold`}>CAPDES</Text>
                         <Text className={`text-white text-lg`}>CA.P.DE.S solution for car problems.</Text>
                    </View>
                    <View className={`px-[25px] py-6 bg-[#444F66] rounded-lg shadow-md shadow-gray-900 max-w-[250px]`}>
                         <Text className={`text-[#aff] text-2xl font-semibold`}>CAPDES</Text>
                         <Text className={`text-white text-lg`}>Car problem detection on the go.</Text>
                    </View>
               </View>
               <View className={`px-[30px] pr-[5px] my-[40px] flex flex-row gap-[16px] w-full justify-between`}>
                    <TouchableOpacity className={`px-20 py-3 rounded-3xl bg-[#5ff] shadow-lg shadow-gray-900`} onPress={() => navigation.navigate('Login')}>
                         <Text className={`text-[#333f55] text-2xl font-semibold`}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className={`px-20 py-3 rounded-3xl bg-[#5ff] shadow-lg shadow-gray-900`} onPress={() => navigation.navigate('Login')}>
                         <Text className={`text-[#333f55] text-2xl font-semibold`}>Register</Text>
                    </TouchableOpacity>
               </View>
               <TouchableOpacity className={`px-20 mx-[50px] py-3 rounded-3xl bg-[#5ff] shadow-lg shadow-gray-900`} onPress={() => navigation.navigate('Login')}>
                    <Text className={`text-[#333f55] text-2xl font-semibold text-center`}>Got A Problem</Text>
               </TouchableOpacity>
          </View>
     )
}