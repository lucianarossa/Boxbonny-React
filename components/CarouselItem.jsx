import { View, Text, Dimensions, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'

export default function CarouselItem({item}){
	return (
		<View>
			<ImageBackground source={{ uri: item.imagen }} resizeMode="cover" style={styles.image}>
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
		width: '100%',
		height: '20%',
		backgroundColor: 'white'
	}
});