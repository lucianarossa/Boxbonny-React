import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import {useSelector} from 'react-redux'
import PackCard from '../components/PackCard';

export default function Packs() {
	const packs = useSelector(store => store.packsReducer.packs)
	return (
		<ScrollView style={styles.container}>
			<Text style={styles.description}>"No se envuelven, envuelven en una nueva experiencia a quien los recibe. Se guardan en la memoria y se convierten en uno de esos recuerdos que, como un buen vino, mejoran con el tiempo"</Text>
			<Text style={styles.subtitle}>SELECCIONA Y DESCUBRI LAS EXPERIENCIAS</Text>
			{packs.map(pack => <PackCard key={pack._id} pack={pack} />)}

		</ScrollView>
	)
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f6f7eb',
	},
	description: {
		textAlign: 'center',
		paddingVertical: 10,
		paddingHorizontal: 20,
		fontSize: 18,
		marginBottom: 20,
	},
	subtitle:{
		alignSelf: 'center',
		color: '#e9580c',
		borderBottomColor: '#e9580c',
		borderBottomWidth: 1,
		paddingBottom: 10,
		marginBottom: 20,
	}
});

