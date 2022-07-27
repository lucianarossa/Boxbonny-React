import React from 'react'
import { Provider } from 'react-redux';
import {configureStore}	 from '@reduxjs/toolkit'
import mainReducer from './redux/reducers/mainReducer';
import Navigation from './navigation/Navigation';
import * as NavigationBar from 'expo-navigation-bar';
import Toast from 'react-native-toast-message';
import { useFonts, Poppins_500Medium } from '@expo-google-fonts/poppins'
import { Raleway_500Medium, Raleway_500Medium_Italic } from '@expo-google-fonts/raleway'
import AppLoading from "expo-app-loading";
  

export default function App() {
	const reduxReducer = configureStore({reducer: mainReducer})
	NavigationBar.setBackgroundColorAsync('#F6F7EB');

	let [fontsLoaded] = useFonts({
		Poppins_500Medium,
		Raleway_500Medium, 
		Raleway_500Medium_Italic
	  });
	
	  if (!fontsLoaded) {
		return <AppLoading />;
	  }

  return (
		<Provider store={reduxReducer}>
			
			<Navigation />
			<Toast />
		</Provider>
  );
}


