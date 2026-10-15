import { useState } from 'react';
import {
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import { useStopwatch } from '../hooks/useStopwatch';
import PracticeTracker from './PracticeTracker';
import Stopwatch from './Stopwatch';

export default function LabScreen() {
  const [solved, setSolved] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const seconds = useStopwatch(isRunning);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Lab Timer & Practice Tracker</Text>

      <Stopwatch seconds={seconds} isRunning={isRunning} />

      <View style={styles.timerButtons}>
        <Pressable
          style={styles.startButton}
          onPress={() => setIsRunning(true)}
        >
          <Text style={styles.buttonText}>Start</Text>
        </Pressable>

        <Pressable
          style={styles.stopButton}
          onPress={() => setIsRunning(false)}
        >
          <Text style={styles.buttonText}>Stop</Text>
        </Pressable>
      </View>

      <PracticeTracker
        solved={solved}
        onSolve={() => setSolved((previousSolved) => previousSolved + 1)}
        onReset={() => setSolved(0)}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#ffffff',
  },
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  },
  timerButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 15,
    marginVertical: 10,
  },
  startButton: {
    backgroundColor: '#16a34a',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  stopButton: {
    backgroundColor: '#dc2626',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});