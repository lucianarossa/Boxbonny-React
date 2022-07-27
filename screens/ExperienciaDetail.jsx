import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, Dimensions, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import {useSelector,useDispatch} from 'react-redux'
import experienciasActions from '../redux/actions/experienciasActions'
import StarRating from 'react-native-star-rating-widget';
import { useNavigation } from '@react-navigation/native';

export default function ExperienciaDetail({route}) {
	const dispatch = useDispatch()
	const navigation = useNavigation()
	const [rating, setRating] = useState(0);
	const experiencia = useSelector(store => store.experienciasReducer.getOneExperiencia)

	useEffect(()=>{
		dispatch(experienciasActions.getOneExperiencia(route.params.experienciaId))
	},[])

	const arrayComentarios = experiencia.comentarios
	let total = 0
	arrayComentarios?.map(comentario => total += comentario.rating)
	const promedio = Math.ceil(total/arrayComentarios?.length) 

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
				<Text style={styles.title}>	UBICACIÓN</Text>
				<Text style={styles.content}>{experiencia.incluye}</Text>
				<Text style={styles.title}>RESERVA ESTA EXPERIENCIA</Text>
				<Text style={styles.content}>contacto@boxbonny.com</Text>
			</View>
			{arrayComentarios?.length !== 0 ? <View style={styles.rating}>
				<Text >VALORACION ENTRE {arrayComentarios?.length} OPINIONES!</Text>
				<StarRating
        rating={promedio}
        onChange={setRating}
      />
			</View> :
			<Text style={styles.rating}>NADIE VALORO ESTA EXPERIENCIA AUN!</Text>}
			<TouchableOpacity onPress={() => navigation.navigate('Comentarios',{ comentarios: arrayComentarios})}>
				<Text style={styles.button}>Comentarios ({arrayComentarios?.length})</Text>
			</TouchableOpacity>
			
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
		rating:{
			marginVertical: 20,
			alignSelf: 'center',
		},
		button:{
			backgroundColor: "#393e41",
			color: "white",
			alignSelf: "center",
			padding: 10,
			borderRadius: 10,
			marginBottom: 100,	

		}
});
