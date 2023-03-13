import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import HelloText from './HelloText';

export default function App() {

  let user = "Teerasej";

  const onSignIn = () => console.log('Hello')

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>สวัสดีวันจันทร์</Text>
      <HelloText username={user}/>
      <HelloText/>
      <Button title='Sign in' onPress={onSignIn}/>
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
    fontSize: 120,
  },
  heading: {
    fontSize: 84,
    color: 'red',
  }
});
