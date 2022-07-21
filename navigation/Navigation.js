import React, {useEffect} from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from "@react-navigation/native";
import Home from '../screens/Home'
import Packs from '../screens/Packs'
import Login from '../screens/Login'
import SignUp from '../screens/SignUp'
import Cart from '../screens/Cart';
import { useNavigation } from '@react-navigation/native';


import {useDispatch} from 'react-redux'
import packsActions from '../redux/actions/packsActions'

import { MaterialCommunityIcons, Fontisto } from '@expo/vector-icons'; 
import { TouchableHighlight, TouchableOpacity, View, Text } from 'react-native';

//const CitiesStack = createNativeStackNavigator()

//const MyStack = ()=>{
//	return(
//		<CitiesStack.Navigator
//			initialRouteName='Cities List'
//			screenOptions={{
//				headerStyle: { backgroundColor: '#111827' },
//				headerTintColor: 'white',
//			}}
//		>
//			<CitiesStack.Screen
//				name="Cities List"
//				component={Cities}
//			/>
//			<CitiesStack.Screen
//				name="detail"
//				component={Detail}
//			/>
//				<CitiesStack.Screen
//				name="Activities"
//				component={Activities}
//			/>
//				<CitiesStack.Screen
//				name="Comments"
//				component={Comments}
//			/>
//		</CitiesStack.Navigator>
//	)
//}

const Tab = createBottomTabNavigator()
const CustomTabBarButton = () =>{
const navigation = useNavigation()
	
	return(
	
	<TouchableOpacity 
		style={{backgroundColor: '#FF8E72', padding: 20, position: 'absolute', borderRadius: 35,bottom: 2}}
		onPress={() => navigation.navigate('Cart')}
	>
		<Text >
			<MaterialCommunityIcons name="cart" size={30} color='#393E41' />
		</Text>
	</TouchableOpacity>
	

)}
	

const MyTabs = ()=>{
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
				<Tab.Screen name="Packs" component={Packs} options={{
																													tabBarIcon: ({color, size}) =>
																													(<Fontisto name="shopping-package" size={size} color={color} />)
																												
				}}/>
				<Tab.Screen name="Cart" component={Cart} options={{
																													tabBarIcon: () =>
																													(<CustomTabBarButton />),
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

export default function Navigation(){
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(packsActions.getPacks())
	},[])

	return(
		<NavigationContainer>
			<MyTabs />
		</NavigationContainer>
	)
}