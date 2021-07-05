import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Card = (props) => {
  return <View style={...styles.card, ...props.style}>{props.children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  Card: {
    elevation: 5,
    borderRadius: 10,
    shadowOffSet: { width: 0, height: 2 },
    shadowColor: "#333",
    shadowOpacity: 0.26,
    shadowRadius: 10,
    backgroundColor: "#fff",
  },
});
