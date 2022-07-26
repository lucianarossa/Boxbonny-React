
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, Text } from 'react-native';
import { MaterialCommunityIcons} from '@expo/vector-icons'; 


export default function CartTabButton(){
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