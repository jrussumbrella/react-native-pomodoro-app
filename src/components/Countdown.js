import React, { useState, useEffect } from "react";

const minutesToMillis = (min) => min * 1000 * 60;

const formatTime = (time) => (time < 10 ? `0${time}` : time);

const Countdown = ({ minutes = 20, isPaused }) => {
  const [millis, setMillis] = useState(minutesToMillis(minutes));

  const millisToMinutes = Math.floor(millis / 1000 / 60) % 60;
  const millisToSeconds = Math.floor(millis / 1000) % 60;

  return (
    <View>
      <Text>
        {formatTime(millisToMinutes)}:{formatTime(millisToSeconds)}
      </Text>
    </View>
  );
};

export default Countdown;
