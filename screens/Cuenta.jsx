import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

export default function Cuenta() {
	return (
		<View>
			<Text style={styles.text}>Cuenta</Text>
		</View>
	)

}

const styles = StyleSheet.create({
	text: {
		textAlign: 'center',
		width: '100%',
		position: 'absolute',
		fontSize: 40,
		fontWeight: "bold",
		color: "white",
		textShadowColor: 'rgba(0, 0, 0, 0.75)',
		textShadowOffset: { width: -1, height: 1 },
		textShadowRadius: 10,
		paddingTop: 30,
	}
});

