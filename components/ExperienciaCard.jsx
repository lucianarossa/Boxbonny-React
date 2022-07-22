import {Text, StyleSheet, ImageBackground, TouchableOpacity,View, Dimensions} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

export default function ExperienciaCard ({experiencia})  {
	const navigation = useNavigation()

	return (
	
			<View style={styles.card}>
	<ImageBackground source={{ uri: experiencia.imagen }} resizeMode="cover" style={styles.back}>
				<Text style={styles.text}>{experiencia.nombre}</Text>
				<Text style={styles.description}>{experiencia.ciudad}</Text>
				<TouchableOpacity onPress={() => navigation.navigate('detalle del pack',{ experienciaId: experiencia._id})}>
					<Text style={styles.button}>Ver mas</Text>
				</TouchableOpacity>
			</ImageBackground> 
			</View>
		
		
	)
}
const styles = StyleSheet.create({
	back:{
		alignSelf: 'center',
		justifyContent: 'space-around',
		width: '100%',
		height: '100%',
		opacity: .8
		
	},
	card:{
		backgroundColor: 'black',
		width: Dimensions.get('window').width/1.5,
		marginHorizontal: 10,
		borderRadius: 20,
		marginBottom: 20,
		overflow: 'hidden',
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.22,
		shadowRadius: 2.22,
		elevation: 3,
	},
	text:{
		marginTop: 10,
		alignSelf: "center",
		fontSize: 40,
		fontWeight: "bold",
		color: "white",
		textShadowColor: 'rgba(0, 0, 0, 0.75)',
		textShadowOffset: {width: -1, height: 1},
  	textShadowRadius: 10
	},
	description: {
		color: "white",
		fontSize: 18,
		textAlign: "center",
	},
	button:{
		backgroundColor: "#393e41",
		color: "white",
		alignSelf: "center",
		padding: 10,
		borderRadius: 10,
	}
});
