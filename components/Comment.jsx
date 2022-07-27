import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import StarRating from 'react-native-star-rating-widget';
import moment from 'moment';
import { Entypo } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux'
import comentariosActions from '../redux/actions/comentariosActions';
import experienciasActions from '../redux/actions/experienciasActions'
import Toast from 'react-native-toast-message';


export default function Comment({ comentario, idExperiencia }) {
	const [rating, setRating] = useState(0);
	const user = useSelector(store => store.usuariosReducer.user)
	const dispatch = useDispatch()


	async function modifyComment() {
		//const commentData = {
		//		idComentario: comentario._id,
		//		comentario: modify,
		//}
		//const res = await dispatch(comentariosActions.UpdateComment(commentData))
		//if (res.success) {
		//	Toast.show({
		//		type: 'success',
		//		text1: res.message
		//	});
		//	dispatch(experienciasActions.getOneExperiencia(idExperiencia))
		//} else {
		//	Toast.show({
		//		type: 'error',
		//		text1: res.message
		//	});
		//}
	}
	async function deleteComment() {
		const res = await dispatch(comentariosActions.DeleteComment(comentario._id))
		if (res.data.success) {
			Toast.show({
				type: 'success',
				text1: res.data.message
			});
			dispatch(experienciasActions.getOneExperiencia(idExperiencia))
		} else {
			Toast.show({
				type: 'error',
				text1: res.data.message
			});
		}

	}

	return (
		<View style={styles.container}>
			<View style={styles.top}>
				<View style={styles.user}>
					<Image style={styles.imagen} source={{ uri: comentario.idUsuario.imagen }} />
					<Text style={styles.comentarioNombre}>{comentario.idUsuario.nombre}</Text>
				</View>
				<StarRating
					starSize={20}
					rating={comentario.rating}
					onChange={setRating}
					style={styles.ratingStars}
				/>
			</View>
			<Text style={styles.comentario}>{comentario.comentario}</Text>

			<View style={styles.bottom}>
				{user?.id !== comentario.idUsuario._id ? <Text style={styles.fecha}>{moment(comentario.fecha).fromNow()}</Text>
					: <>
						<Text style={styles.fecha}>{moment(comentario.fecha).fromNow()}</Text>
						<View style={styles.editBox}>
							<TouchableOpacity onPress={modifyComment}>
								<Entypo style={styles.edit} name="pencil" size={22} color="gray" />
							</TouchableOpacity>
							<TouchableOpacity onPress={deleteComment}>
								<Entypo name="trash" size={20} color="gray" />
							</TouchableOpacity>
						</View>
					</>}
			</View>


		</View>

	)

}
const styles = StyleSheet.create({
	container: {
		alignSelf: 'center',
		padding: 10,
		marginTop: 10,
		width: '95%',
		backgroundColor: 'white',
		borderRadius: 20,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.22,
		shadowRadius: 2.22,
		elevation: 3,
	},
	imagen: {
		width: 40,
		height: 40,
		borderRadius: 150 / 2,
		overflow: "hidden",
		borderWidth: 1,
		borderColor: "#FF8E72",
		marginRight: 10,
	},
	top: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	user: {
		flexDirection: "row",
		alignItems: "center",
	},
	comentarioNombre: {
		fontSize: 13,
		fontFamily: "Poppins_500Medium"
	},
	comentario: {
		marginTop: 10,
		paddingLeft: 10,
		paddingBottom: 10,
		fontSize: 13,
		fontFamily: "Poppins_500Medium"
	},
	fecha: {
		fontSize: 10,
		color: "gray",
		fontFamily: "Poppins_500Medium",
		paddingLeft: 10,
	},
	bottom: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	editBox: {
		flexDirection: "row",
	},
	edit: {
		marginRight: 20,
	},
	ratingStars:{
		fontSize: 15,
		marginTop:10
	}
})
