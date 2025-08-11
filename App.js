import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ProfileCard from './src/components/ProfileCard';

export default function App() {
  return (
    <View style={styles.container}>
      <ProfileCard name={"Shawn Mendes"} username={"shawn.mendes@gmail.com"} avatarUrl={"https://static.wikia.nocookie.net/copcal/images/3/37/Shawnwikia.jpg/revision/latest?cb=201803030547280"} bio={"Singer"}></ProfileCard>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
