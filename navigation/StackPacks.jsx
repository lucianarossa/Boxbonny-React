import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Packs from '../screens/Packs'
import PackDetail from '../screens/PackDetail'
import Comentarios from '../screens/Comentarios'
import ExperienciaDetail from '../screens/ExperienciaDetail'


const stack = createNativeStackNavigator()

export default function StackPacks(){
	return(

		<stack.Navigator
			initialRouteName='Lista de packs'
			screenOptions={{
				headerStyle: { backgroundColor: '#F6F7EB' },
				headerTintColor: '#393E41',
			}}
			options={{ headerShown: false, marginTop:200 }}

		>
			<stack.Screen
				name="Lista de packs"
				component={Packs}
				options={{ headerShown: false,}}

			/>
			<stack.Screen
				name="detalle del pack"
				component={PackDetail}
				options={{ headerShown: false,  }}
			/>
				<stack.Screen
				name="detalle de la experiencia"
				component={ExperienciaDetail}
				options={{ headerShown: false, }}
			/>
				<stack.Screen
				name="Comentarios"
				component={Comentarios}
			/>
		</stack.Navigator>
	)
}