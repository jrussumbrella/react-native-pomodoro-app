import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet } from "react-native";
import { fontSizes } from "../utils/sizes";

const minutesToMillis = (min) => min * 1000 * 60;

const formatTime = (time) => (time < 10 ? `0${time}` : time);

const Countdown = ({ minutes = 20, isPaused = true }) => {
  const [millis, setMillis] = useState(minutesToMillis(minutes));
  const intervalRef = useRef();

  const millisToMinutes = Math.floor(millis / 1000 / 60) % 60;
  const millisToSeconds = Math.floor(millis / 1000) % 60;

  const countDown = () => {
    setMillis((time) => {
      if (time === 0) {
        return time;
      }
      const timeLeft = time - 1000;
      return timeLeft;
    });
  };

  useEffect(() => {
    if (isPaused) {
      return;
    }
    intervalRef.current = setInterval(countDown, 1000);
    return () => clearInterval(intervalRef.current);
  }, [isPaused]);

  return (
    <View>
      <Text style={styles.countDownTitle}>
        {formatTime(millisToMinutes)}:{formatTime(millisToSeconds)}
      </Text>
    </View>
  );
};

export default Countdown;

const styles = StyleSheet.create({
  countDownTitle: {
    fontSize: fontSizes.xxl,
    color: "#fff",
    textAlign: "center",
    marginVertical: 30,
  },
});
