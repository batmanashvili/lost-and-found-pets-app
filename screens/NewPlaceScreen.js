import React, { useState, useCallback } from "react";
import {
  ScrollView,
  View,
  Button,
  Text,
  TextInput,
  StyleSheet,
} from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

import Colors from "../constants/Colors";
import ImgPicker from "../components/ImgPicker";
import LocationPicker from '../components/LocationPicker';
import * as placesActions from '../store/places-actions';

const NewPlaceScreen = (props) => {
  const dispatch = useDispatch();
const { params } = useRoute();

  const [titleValue, setTitleValue] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState({lat: 37, lng: 38});

console.log(params, " params at NewPlacesScreen ")
  

  const titleChangeHandler = (text) => {
    // you could add validation
    setTitleValue(text);
  };

  const imageTakenHandler = (imagePath) => {
    setSelectedImage(imagePath);
  };

  const locationPickedHandler = useCallback(location => {
    setSelectedLocation(location);
  }, []);

  const savePlaceHandler = () => {
    dispatch(placesActions.addPlace(titleValue, selectedImage, selectedLocation));
    props.navigation.goBack();
  };


  return (
    <ScrollView>
      <View style={styles.form}>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={titleChangeHandler}
          value={titleValue}
        />
        <ImgPicker onImageTaken={imageTakenHandler} />
        <LocationPicker
          // navigation={props.route}
          onLocationPicked={locationPickedHandler}
          mapPickedLocation={selectedLocation}
        />
        <Button
          title='Save Place'
          color={Colors.primary}
          onPress={savePlaceHandler}
        />
      </View>
    </ScrollView>
  );
};

NewPlaceScreen.navigationOptions = {
  headerTitle: 'Add Place'
}

const styles = StyleSheet.create({
  form: {
    margin: 30,
  },
  label: {
    fontSize: 18,
    marginBottom: 15,
  },
  textInput: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginBottom: 15,
    paddingVertical: 4,
    paddingHorizontal: 2,
  },
});

export default NewPlaceScreen;
