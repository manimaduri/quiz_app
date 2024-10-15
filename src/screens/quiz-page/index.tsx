import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Sound from 'react-native-sound';
import QuizQuestion from '../../components/quiz-page/QuizQuestion';
import ProgressBar from '../../components/quiz-page/ProgressBar';
import Timer from '../../components/quiz-page/Timer';
import HintSystem from '../../components/quiz-page/HintSystem';
import QuizSummary from '../../components/quiz-page/QuizSummary';

const questions = [
  {
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Madrid"],
    correctAnswer: 2,
    hint: "This city is known as the 'City of Light'."
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correctAnswer: 1,
    hint: "It's named after the Roman god of war."
  },
  // Add more questions here
];

const QuizScreen = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showSummary, setShowSummary] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);

  const correctSound = new Sound(require('../../assets/sounds/correct.wav'), Sound.MAIN_BUNDLE);
  const wrongSound = new Sound(require('../../assets/sounds/wrong.wav'), Sound.MAIN_BUNDLE);
//   const correctSound = new Sound(require('../../assets/sounds/correct.wav'), Sound.MAIN_BUNDLE);


  useEffect(() => {
    const timer = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      } else {
        handleNextQuestion();
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleAnswer = (selectedAnswer: number) => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
      correctSound.play();
    } else {
      wrongSound.play();
    }
    handleNextQuestion();
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setTimeLeft(30);
    } else {

      setShowSummary(true);
    }
  };

  if (showSummary) {
    return <QuizSummary score={score} totalQuestions={questions.length} />;
  }

  return (
    <View style={styles.container}>
      <ProgressBar current={currentQuestion + 1} total={questions.length} />
      <Timer timeLeft={timeLeft} />
      <QuizQuestion
        question={questions[currentQuestion].question}
        options={questions[currentQuestion].options}
        onAnswer={handleAnswer}
      />
      <HintSystem hint={questions[currentQuestion].hint} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    padding: 20,
  },
});

export default QuizScreen;