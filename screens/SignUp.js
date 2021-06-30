import React, { useState, useContext } from 'react';
import { View, Button, Text, TextInput, SafeAreaView, StyleSheet  } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { AuthContext } from '../context/AuthContext'
import { signUp } from '../context/actions' 

export default () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  const {navigate} = useNavigation();
  const {state, dispatch} = useContext(AuthContext)

  const singUphandler = () => {
    signUp(email, password)
    navigate('Stack', {screen: 'About'})
  }

 return (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <TextInput value={email} onChangeText={setEmail} placeholder="useless placeholder"
 />

   <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
      />
    </SafeAreaView>
   
    <Button title='SignUp' style={{width: 10, height: 3}} onPress={singUphandler} />
  </View>
);
}


const styles = StyleSheet.create({
  input: {
    height: 40,
        width: '80%',

    margin: 12,
    borderWidth: 1,
  },
});

