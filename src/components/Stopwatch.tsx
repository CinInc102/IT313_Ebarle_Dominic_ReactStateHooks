import { StyleSheet, Text, View } from 'react-native';

type StopwatchProps = {
  seconds: number;
  isRunning: boolean;
};

export default function Stopwatch({
  seconds,
  isRunning,
}: StopwatchProps) {
  const minutes = Math.floor(seconds / 60)
    .toString()
    .padStart(2, '0');

  const remainingSeconds = (seconds % 60)
    .toString()
    .padStart(2, '0');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lab Stopwatch</Text>

      <Text style={styles.time}>
        {minutes}:{remainingSeconds}
      </Text>

      <Text style={styles.status}>
        {isRunning ? 'Running…' : 'Paused'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#e0f2fe',
    borderRadius: 12,
    marginVertical: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  time: {
    fontSize: 42,
    fontWeight: 'bold',
    fontVariant: ['tabular-nums'],
    marginBottom: 8,
  },
  status: {
    fontSize: 18,
    color: '#334155',
  },
});
