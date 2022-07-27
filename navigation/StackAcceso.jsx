import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login'
import SignUp from '../screens/SignUp'


const stack = createNativeStackNavigator()

export default function StackAcceso(){
	return(
		<stack.Navigator
			initialRouteName='inicio de sesión'
			screenOptions={{
				headerStyle: { backgroundColor: '#F6F7EB' },
				headerTintColor: '#393E41',
			}}
		>
			<stack.Screen
				name="inicio de sesión"
				component={Login}
			/>
			<stack.Screen
				name="registro"
				component={SignUp}
			/>
		</stack.Navigator>
	)
}