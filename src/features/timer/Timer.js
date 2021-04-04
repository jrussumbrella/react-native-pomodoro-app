import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import Countdown from "../../components/Countdown";
import { fontSizes, spacing } from "../../utils/sizes";

const Timer = ({ focusSubject }) => {
  const [isStarted, setIsStarted] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Focusing on:</Text>
      <Text style={styles.subjectTitle}>{focusSubject}</Text>
      <Countdown isPaused={!isStarted} minutes={20} />
      <View>
        <Button
          mode="contained"
          style={styles.button}
          contentStyle={styles.buttonContent}
          onPress={() => setIsStarted(!isStarted)}
        >
          {isStarted ? "Pause" : "Start"}
        </Button>
      </View>
    </View>
  );
};

export default Timer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: spacing.xl,
  },
  heading: {
    fontSize: fontSizes.lg,
    color: "#fff",
  },
  subjectTitle: {
    color: "#fff",
    fontSize: fontSizes.xl,
  },
  button: {
    width: 200,
    borderRadius: 50,
    borderColor: "#fff",
    borderWidth: 1,
    marginBottom: 20,
  },
  buttonContent: {
    height: 60,
  },
});
