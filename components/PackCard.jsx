import {Text, StyleSheet, Pressable, TouchableOpacity, View} from 'react-native'
import React,{useState} from 'react'
import { useNavigation } from '@react-navigation/native';
import {Video} from 'expo-av'
export default function PackCard ({pack})  {
	const navigation = useNavigation()
	const [change, setChange] = useState(false);

	return (
		<View>
			<Video
					style={styles.card}
					source={{uri: pack.imagen}}
					rate={1}
					shouldPlay={true}
					isLooping={true}
					muted={true}
					resizeMode="cover"
				/>
			<Pressable onPress={()=> setChange(!change)} style={styles.top}>
			{change ? 
			<>
				<Text style={styles.description}>{pack.descripcion}</Text>
				<TouchableOpacity onPress={() => navigation.navigate('detalle del pack',{ packId: pack._id})}>
					<Text style={styles.button}>Ver pack</Text>
				</TouchableOpacity>
			</>:
			<Text style={styles.text}>{pack.nombre}</Text>}
				
			</Pressable>
		</View>
	
		
	)
}
const styles = StyleSheet.create({
  //front: {
	//	alignSelf: 'center',
	//	width: '100%',
	//	height: 400,
	//},
	//back:{
	//	alignSelf: 'center',
	//	justifyContent: 'space-around',
	//	width: '100%',
	//	height: 400,
	//	opacity: .8
		
	//},
	top:{
		position: 'absolute',
		alignSelf: 'center',
		backgroundColor: 'rgba(0, 0, 0, .3)',
		padding: 10,
		width: '80%',
		height: 350,
		marginHorizontal: 25,
		borderRadius: 20,
		marginBottom: 20,
		overflow: 'hidden',
		shadowColor: "#000"
	},
	card:{
		alignSelf: 'center',
		backgroundColor: 'black',
		width: '80%',
		height: 350,
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
		textAlign: 'center',
		width: '100%',
		position: 'absolute',
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
		marginBottom: 20,	
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

