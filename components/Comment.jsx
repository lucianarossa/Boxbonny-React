import React, {useState} from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import StarRating from 'react-native-star-rating-widget';

export default function Comment({comentario}) {
	const [rating, setRating] = useState(0);

	return (
		<View style={styles.container}>
			<View style={styles.top}>
				<Image style={styles.imagen} source={{uri: comentario.idUsuario.imagen}}/>
				<StarRating
				starSize={20}
        rating={comentario.rating}
        onChange={setRating}
      />
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
		borderRadius: 10,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.22,
		shadowRadius: 2.22,
		elevation: 3,
  },
	imagen:{
		width: 40,
		height: 40,
		borderRadius: 150 / 2,
		overflow: "hidden",
		borderWidth: 1,
  	borderColor: "#FF8E72"
	},
	top: {
		flexDirection: "row",
		justifyContent: "space-between",
	}
})
