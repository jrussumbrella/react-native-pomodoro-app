import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";

const RoundedButton = ({ style = {}, size = 100, children, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles(size).radius, style]}>
      {children}
    </TouchableOpacity>
  );
};

export default RoundedButton;

const styles = (size) =>
  StyleSheet.create({
    radius: {
      borderRadius: size / 2,
      borderColor: "#fff",
      borderWidth: 2,
    },
  });
