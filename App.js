import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Counter from './src/components/Counter'
import Greeting from './src/components/Greeting';


export default function App() {
  return (
    <View style={styles.container}>
      <Counter></Counter>
      <StatusBar style="auto" />
      <Greeting></Greeting>
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});
