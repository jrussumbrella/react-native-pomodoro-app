import React from "react";
import { View, Text } from "react-native";
import Countdown from "../../components/Countdown";

const Timer = ({ focusSubject }) => {
  return (
    <View>
      <Text>Focusing on:</Text>
      <Text>{focusSubject}</Text>
      <Countdown minutes={20} />
    </View>
  );
};

export default Timer;
