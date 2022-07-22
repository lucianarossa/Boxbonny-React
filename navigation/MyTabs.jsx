
import React from 'react'

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MaterialCommunityIcons, Fontisto } from '@expo/vector-icons'; 
import Home from '../screens/Home'
import StackPacks from './StackPacks';
import Login from '../screens/Login'
import SignUp from '../screens/SignUp'
import Cart from '../screens/Cart';
import CartTabButton from '../components/CartTabButton';

const Tab = createBottomTabNavigator()



export default function MyTabs(){
	return(
			<Tab.Navigator
				initialRouteName='Home'
				labeled={false}
				screenOptions={{
					tabBarActiveTintColor: '#FF8E72',
					tabBarInactiveTintColor: '#393E41',
					headerStyle: { backgroundColor: '#F6F7EB' },
					headerTintColor: '#393E41',
					tabBarStyle: {
						backgroundColor: '#F6F7EB',
					},
					
				}}
			>
				<Tab.Screen name="Home" component={Home} options={{
																													tabBarIcon: ({color, size}) =>
																													(<MaterialCommunityIcons name="home" size={size} color={color} />)
				}}/>
				<Tab.Screen name="Packs" component={StackPacks} options={{
																													tabBarIcon: ({color, size}) =>
																													(<Fontisto name="shopping-package" size={size} color={color} />),
																													headerShown: false
																												
				}}/>
				<Tab.Screen name="Cart" component={Cart} options={{
																													tabBarIcon: () =>
																													(<CartTabButton />),
																													tabBarLabel: ''
																													

				}}/>
				<Tab.Screen name="Login" component={Login} options={{
																													tabBarIcon: ({color, size}) =>
																													(<MaterialCommunityIcons name="login" size={size} color={color} />)
				}}/>
				<Tab.Screen name="Signup" component={SignUp} options={{
																													tabBarIcon: ({color, size}) =>
																													(<MaterialCommunityIcons name="book-account-outline" size={size} color={color} />)
				}}/>
			</Tab.Navigator>																											
	)
}
