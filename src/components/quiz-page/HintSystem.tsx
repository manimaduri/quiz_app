import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface HintSystemProps {
  hint: string;
}

const HintSystem: React.FC<HintSystemProps> = ({ hint }) => {
  const [showHint, setShowHint] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setShowHint(!showHint)}
      >
        <Text style={styles.buttonText}>{showHint ? 'Hide Hint' : 'Show Hint'}</Text>
      </TouchableOpacity>
      {showHint && <Text style={styles.hintText}>{hint}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  button: {
    backgroundColor: '#9b59b6',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  hintText: {
    marginTop: 10,
    color: '#8e44ad',
    fontStyle: 'italic',
  },
});

export default HintSystem;