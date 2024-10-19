import React, { useState } from 'react';
import { View, Text, TextInput, Button, AsyncStorage } from 'react-native';

export default function LoginScreen({ navigation }) {
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');

     const handleLogin = async () => {
          // await AsyncStorage.setItem('user', JSON.stringify({ email }));
          navigation.navigate('Mechanics');
     };

     return (
          <View>
               <Text className={`text-pink-600`}>Good morning Login</Text>
          </View>
     );
}
