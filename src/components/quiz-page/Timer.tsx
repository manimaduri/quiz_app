import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface TimerProps {
  timeLeft: number;
}

const Timer: React.FC<TimerProps> = ({ timeLeft }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{`Time Left: ${timeLeft}s`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#e74c3c',
  },
});

export default Timer;