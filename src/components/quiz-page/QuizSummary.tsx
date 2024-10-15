import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface QuizSummaryProps {
  score: number;
  totalQuestions: number;
}

const QuizSummary: React.FC<QuizSummaryProps> = ({ score, totalQuestions }) => {
  const percentage = (score / totalQuestions) * 100;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quiz Completed!</Text>
      <Text style={styles.score}>{`Score: ${score} / ${totalQuestions}`}</Text>
      <Text style={styles.percentage}>{`Percentage: ${percentage.toFixed(2)}%`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f4f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2c3e50',
  },
  score: {
    fontSize: 20,
    marginBottom: 10,
    color: '#3498db',
  },
  percentage: {
    fontSize: 18,
    color: '#2ecc71',
  },
});

export default QuizSummary;