import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ProgressBarProps {
  current: number;
  total: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const progress = (current / total) * 100;

  return (
    <View style={styles.container}>
      <View style={[styles.bar, { width: `${progress}%` }]} />
      <Text style={styles.text}>{`${current} / ${total}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 20,
    backgroundColor: '#ecf0f1',
    borderRadius: 10,
    marginBottom: 20,
  },
  bar: {
    height: '100%',
    backgroundColor: '#2ecc71',
    borderRadius: 10,
  },
  text: {
    position: 'absolute',
    right: 5,
    top: 2,
    color: '#2c3e50',
  },
});

export default ProgressBar;