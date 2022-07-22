import { View, Text, Dimensions, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'


export default function CarouselItem({item}){

	return (
		<View>
				<ImageBackground source={{ uri: item.imagen }} resizeMode="cover" style={styles.image}>
					<Text style={styles.text}>{item.nombre}</Text>
				</ImageBackground>
		</View>
	)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f0c9',
  },
	image:{
		flex: 1,
    justifyContent: "center",
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height/4
	},
	text:{
		alignSelf: "center",
		fontSize: 40,
		fontWeight: "bold",
		color: "white",
		textShadowColor: 'rgba(0, 0, 0, 0.75)',
		textShadowOffset: {width: -1, height: 1},
  	textShadowRadius: 10
	}
});