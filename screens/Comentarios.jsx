import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Comment from '../components/Comment';

export default function Comentarios({route}) {
	const comentarios = route.params.comentarios
	return (
		<View style={styles.container}>
		{comentarios.map(comentario => <Comment key={comentario._id} comentario={comentario} />)}
	</View>
	
	)
	
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },})
