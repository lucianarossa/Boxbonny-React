import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './navigation/Navigation';
import * as NavigationBar from 'expo-navigation-bar';
export default function App() {
	NavigationBar.setBackgroundColorAsync('#F6F7EB');
  return (
		<Navigation />
  );
}

const styles = StyleSheet.create({
  container: {
  
  },
});
