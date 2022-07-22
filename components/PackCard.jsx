import {Text, StyleSheet, Pressable, ImageBackground, TouchableOpacity} from 'react-native'
import React,{useState} from 'react'
import { useNavigation } from '@react-navigation/native';

export default function PackCard ({pack})  {
	const navigation = useNavigation()
	const [change, setChange] = useState(false);

	return (
		<Pressable onPress={()=> setChange(!change)} style={styles.card}>
			{change ? 
			<ImageBackground source={{ uri: pack.imagen }} resizeMode="cover" style={styles.back}>
				<Text style={styles.text}>{pack.nombre}</Text>
				<Text style={styles.description}>{pack.descripcion}</Text>
				<TouchableOpacity onPress={() => navigation.navigate('detalle del pack',{ packId: pack._id})}>
					<Text style={styles.button}>Ver pack</Text>
				</TouchableOpacity>
				</ImageBackground> :

			 <ImageBackground source={{ uri: pack.imagen }} resizeMode="cover" style={styles.front}>
					<Text style={styles.text}>{pack.nombre}</Text>
				</ImageBackground>}
		</Pressable>
	)
}
const styles = StyleSheet.create({
  front: {
		alignSelf: 'center',
		width: '100%',
		height: 400,
	},
	back:{
		alignSelf: 'center',
		justifyContent: 'space-around',
		width: '100%',
		height: 400,
		opacity: .8
		
	},
	card:{
		backgroundColor: 'black',
		marginHorizontal: 25,
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
		zIndex: 2,
		backgroundColor: "#393e41",
		color: "white",
		alignSelf: "center",
		padding: 10,
		borderRadius: 10,
	}
});

