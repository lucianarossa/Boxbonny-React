import React, { useEffect } from 'react'
import { StyleSheet, Text, View,ActivityIndicator } from 'react-native';
import { useDispatch } from 'react-redux'
import usuariosActions from '../redux/actions/usuariosActions';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';

export default function LogOut() {
	const dispatch = useDispatch()
	const navigation = useNavigation()
	useEffect(() => {
		dispatch(usuariosActions.desloguearse())
		navigation.navigate('Home')
		Toast.show({
			type: 'success',
			text1: 'Gracias por tu visita',
			text2: 'vuelve pronto'
		});
	},[])
	return (
		<View style={styles.container}>
		<Text>Cerrando sesión</Text>
		<ActivityIndicator size="large" color="#FF8E72" />
	</View>
	)
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
		alignItems: 'center',
		justifyContent: 'center',
  },})
