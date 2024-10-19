import React from "react";
import { Text, View, Button } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'
export default function Footer() {
     return (
          <View className={`bg-[#333F55] text-white px-[50px] py-[16px] flex flex-row justify-between items-center fixed bottom-0`}>
               <View className={`bg-white border border-white absolute top-0 left-[60px] right-[60px]`}></View>
               <Icon name="chevron-left" color={'white'} className={`text-xl`} size={30} />
               <Icon name="home" color={'white'} className={`text-xl`} size={30} />
               <Icon name="phone" color={'white'} className={`text-xl`} size={30} />
               <Icon name="chevron-right" color={'white'} className={`text-xl`} size={30} />
          </View>
     )
}