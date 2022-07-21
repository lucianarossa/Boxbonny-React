import React from 'react'
import { Provider } from 'react-redux';
import {configureStore}	 from '@reduxjs/toolkit'
import mainReducer from './redux/reducers/mainReducer';
import Navigation from './navigation/Navigation';
import * as NavigationBar from 'expo-navigation-bar';

export default function App() {
	const reduxReducer = configureStore({reducer: mainReducer})
	NavigationBar.setBackgroundColorAsync('#F6F7EB');

  return (
		<Provider store={reduxReducer}>
			<Navigation />
		</Provider>
  );
}


