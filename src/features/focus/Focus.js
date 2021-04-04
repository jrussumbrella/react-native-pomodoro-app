import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { IconButton } from "react-native-paper";

const Focus = ({ addSubject }) => {
  const [focusText, setFocusText] = useState("");

  const handleChangeText = (value) => {
    setFocusText(value);
  };

  const handleAddSubject = () => {
    addSubject(focusText);
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}> What do you want to focus on? </Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          value={focusText}
          onChangeText={handleChangeText}
          style={styles.input}
        />
        <Button
          mode="contained"
          onPress={handleAddSubject}
          style={styles.button}
        >
          Add
        </Button>
      </View>
    </View>
  );
};

export default Focus;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 40,
    color: "#fff",
    textAlign: "center",
    fontWeight: "500",
  },
  titleContainer: {
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    height: 60,
  },
  input: {
    flex: 1,
    marginRight: 10,
  },
  button: {
    width: 80,
    height: "100%",
    borderWidth: 1,
    borderColor: "#fff",
    justifyContent: "center",
  },
});
