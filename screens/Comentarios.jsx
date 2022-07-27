import React, {useState} from 'react'
import { ScrollView, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Comment from '../components/Comment';
import StarRating from 'react-native-star-rating-widget';
import {useSelector, useDispatch} from 'react-redux'
import comentariosActions from '../redux/actions/comentariosActions';
import Toast from 'react-native-toast-message';
import experienciasActions from '../redux/actions/experienciasActions'

export default function Comentarios() {
	const [comentario, setComentario] = useState("");
	const [rating, setRating] = useState(5);
	const dispatch = useDispatch()
	const experiencia = useSelector(store => store.experienciasReducer.getOneExperiencia)
	const user = useSelector(store => store.usuariosReducer.user)


	async function agregarCommentarioUsuario(){
		const comment = {
			experiencia: experiencia._id,
			comentario: comentario,
			rating: rating
		}
		const res = await dispatch(comentariosActions.AddComment(comment))
		if (res.success) {
			Toast.show({
				type: 'success',
				text1: res.message
			});
			dispatch(experienciasActions.getOneExperiencia(experiencia._id))
			setComentario("")
		} else {
			Toast.show({
				type: 'error',
				text1: res.message
			});
		}
	}

	return (
		<ScrollView style={styles.container}>
		{user !== null ? <View>
			<Text style={styles.title}>Danos tu opinión</Text>
			<TextInput
					style={styles.form}
					onChangeText={setComentario}
					value={comentario}
				/>
			<View style={styles.rating}>
				<Text>Calificacion: </Text>
				<StarRating
					starSize={20}
					rating={rating}
					onChange={setRating}
				/>
		</View>
		<TouchableOpacity onPress={agregarCommentarioUsuario} >
			<Text style={styles.button}>Enviar</Text>
		</TouchableOpacity>
		</View>:
		<Text style={styles.title}>Inicia sesión para poder comentar</Text>}
		
		
		{experiencia.comentarios.map(comentario => <Comment key={comentario._id} comentario={comentario} idExperiencia={experiencia._id} />)}
	</ScrollView>
	)
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
	form:{
		alignSelf: 'center',
		marginBottom: 10,
		backgroundColor: 'white',
		padding: 10,
		paddingLeft: 10,
		borderRadius: 30,
		width: '90%'
	},
	title:{
		alignSelf: 'center',
		marginVertical: 10,
	},
	rating:{
		alignSelf: 'center',
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 10,
	},
	button:{
		alignSelf: 'center',
		backgroundColor: '#111827',
		color: 'white',
		padding: 10,
		fontSize: 17,
		borderRadius: 10,
	},
})
