import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Focus from "./src/features/focus/Focus";
import { colors } from "./src/utils/colors";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import Timer from "./src/features/timer/Timer";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    accent: "yellow",
  },
};

export default function App() {
  const [focusSubject, setFocusSubject] = useState("");

  const handleAddSubject = (value) => {
    setFocusSubject(value);
  };

  return (
    <PaperProvider theme={theme}>
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        {focusSubject ? (
          <Timer focusSubject={focusSubject} />
        ) : (
          <Focus addSubject={handleAddSubject} />
        )}
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
});
