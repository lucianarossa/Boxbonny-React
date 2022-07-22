import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Packs from '../screens/Packs'
import PackDetail from '../screens/PackDetail'

const stack = createNativeStackNavigator()

export default function StackPacks(){
	return(
		<stack.Navigator
			initialRouteName='Packs'
			screenOptions={{
				headerStyle: { backgroundColor: '#F6F7EB' },
				headerTintColor: '#393E41',
			}}
		>
			<stack.Screen
				name="Packs"
				component={Packs}
			/>
			<stack.Screen
				name="detalle del pack"
				component={PackDetail}
			/>
		</stack.Navigator>
	)
}