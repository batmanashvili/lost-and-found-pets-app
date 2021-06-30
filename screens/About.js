import React from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from '@react-navigation/native'

const About = () => {
    const { navigate, goBack } = useNavigation()

  
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Welcome About</Text>
      <Button title="Go Back" onPress={() => goBack()} />
    </View>
  );
};

export default About;
