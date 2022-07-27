
import React from 'react'
import { Image } from 'react-native';
import { useSelector } from 'react-redux'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, Fontisto } from '@expo/vector-icons';
import Home from '../screens/Home'
import StackPacks from './StackPacks';
import StackAcceso from './StackAcceso';
import Cuenta from '../screens/Cuenta'
import Cart from '../screens/Cart';
import LogOut from '../components/LogOut';
import CartTabButton from '../components/CartTabButton';

const Tab = createBottomTabNavigator()



export default function MyTabs() {
	const user = useSelector(store => store.usuariosReducer.user)
	return (
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
					fontFamily: "Poppins_500Medium",
					height: 65,
				},
				tabBarLabelStyle: {
					fontSize: 10,
					fontFamily: "Poppins_500Medium"
				  }

			}}
		>
			<Tab.Screen name="Home" component={Home} options={{  headerShown: false,
				tabBarIcon: ({ color, size }) =>
					(<MaterialCommunityIcons name="home" size={size} color={color} />)
			}} />
			<Tab.Screen name="Packs" component={StackPacks} options={{  headerShown: false,
				tabBarIcon: ({ color, size }) =>
					(<Fontisto name="shopping-package" size={size} color={color} />),
				headerShown: false

			}} />
			<Tab.Screen name="Cart" component={Cart} options={{ 
				tabBarIcon: () =>
					(<CartTabButton />),
				tabBarLabel: ''

			}} />
			{user == null ? <Tab.Screen name="ingresa" component={StackAcceso} options={{
				 headerShown: false,
				tabBarIcon: ({ color, size }) =>
					(<MaterialCommunityIcons name="login" size={size} color={color} />),
				headerShown: false
			}} /> : <Tab.Screen name="salir" component={LogOut} options={{
				headerShown: false,
				tabBarIcon: ({ color, size }) =>
					(<MaterialCommunityIcons name="logout" size={size} color={color} />),

			}} />
			}

			<Tab.Screen name="cuenta" component={Cuenta} options={{
				tabBarIcon: ({ color, size }) =>
				(<Image style={{
					width: 35,
					height: 35,
					marginTop: 5,
					marginBottom: 5,
					borderRadius: 150 / 2,
					overflow: "hidden",
					borderWidth: 1,
					borderColor: "#FF8E72"
				}} source={user == null
					? require('../assets/user.jpg') :
					{ uri: user.imagen }}
				/>),
				tabBarLabel: user?.nombre
			}} />
		</Tab.Navigator>
	)
}
