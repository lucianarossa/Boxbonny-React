import { View, Text, Dimensions, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import { Video } from 'expo-av'



export default function CarouselItem({ item }) {


	return (
		<View>
			<Video
				style={styles.video}
				source={{ uri: item.imagen }}
				rate={1}
				shouldPlay={true}
				isLooping={true}
				muted={true}
				resizeMode="cover"
			/>
			<Text style={styles.text}>{item.nombre}</Text>

		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f8f0c9',
	},
	video: {
		flex: 1,
		justifyContent: "center",
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height / 4
	},
	text: {
		position: 'absolute',
		paddingTop: 150,
		alignSelf: "center",
		fontSize: 60,
		fontWeight: "bold",
		color: "white",
		textShadowColor: 'rgba(0, 0, 0, 0.75)',
		textShadowOffset: { width: -1, height: 1 },
		textShadowRadius: 10,
		textAlign:"center"
	}
});