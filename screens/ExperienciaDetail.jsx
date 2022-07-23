import React, {useState, useEffect} from 'react'

import { StyleSheet, Text, View, Dimensions, ImageBackground, ScrollView } from 'react-native';
import {useSelector,useDispatch} from 'react-redux'
import experienciasActions from '../redux/actions/experienciasActions'

export default function ExperienciaDetail({route}) {
	const dispatch = useDispatch()
	const experiencia = useSelector(store => store.experienciasReducer.getOneExperiencia)

	useEffect(()=>{
		dispatch(experienciasActions.getOneExperiencia(route.params.experienciaId))
		console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
		console.log(experiencia)
	},[])
	return (

		<ScrollView style={styles.container}>
			<ImageBackground source={{uri: experiencia.imagen}} style={styles.image} >
			<Text style={styles.text}>{experiencia.nombre}</Text>
			</ImageBackground>

			<View style={styles.info}>
				<Text style={styles.title}>DESCRIPCION</Text>
				<Text style={styles.content}>{experiencia.descripcion}</Text>
				<Text style={styles.title}>¿QUE INCLUYE?</Text>
				<Text style={styles.content}>{experiencia.incluye}</Text>
				<Text style={styles.title}>Ubicacion</Text>
				<Text style={styles.content}>{experiencia.incluye}</Text>
				<Text style={styles.title}>RESERVA ESTA EXPERIENCIA</Text>
				<Text style={styles.content}>contacto@boxbonnt.com</Text>
			</View>
		


	</ScrollView>
	)
}
const styles = StyleSheet.create({
		container:{
		backgroundColor: '#f6f7eb',
		flex: 1,
		},
		image:{
			justifyContent: 'center',
			width: Dimensions.get('window').width,
			height: Dimensions.get('window').height/4,
		},
		text:{
			alignSelf: "center",
			fontSize: 40,
			fontWeight: "bold",
			color: "white",
			textShadowColor: 'rgba(0, 0, 0, 0.75)',
			textShadowOffset: {width: -1, height: 1},
			textShadowRadius: 10
		},
		title:{
			fontSize: 20,
			marginTop: 15,
			borderBottomColor: '#ff8e72',
			marginLeft: 20,
			paddingBottom: 10,
			borderBottomWidth: 2,
			width: '80%',
		},
		content:{
			marginTop: 10,
			paddingHorizontal: 30,
		},
		info:{
			
		}
});
