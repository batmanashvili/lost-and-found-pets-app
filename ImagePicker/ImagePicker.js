import React, { useState, useEffect } from "react";
import { Button, Image, View, Platform, StyleSheet } from "react-native";

import * as ImagePicker from "expo-image-picker";

const ImagePickerScreen = () => {
  const [image, setImage] = useState(null);

  useEffect(async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Sorry, we need camera roll permissions to make this work!");
    }
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      AllowEditing: true,
      aspect: [9, 16],
      quality: 1,
    });

    console.log(result);
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        title="choose picture"
        style={{ width: 20, height: 20 }}
        onPress={pickImage}
      />
      {image && (
        <Image source={{ uri: image }} style={{ height: 300, width: 300 }} />
      )}

      
    </View>
  );
};

export default ImagePickerScreen;

const styles = StyleSheet.create({});
