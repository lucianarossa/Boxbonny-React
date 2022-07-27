import React from 'react'
import { StyleSheet, Text, View, ScrollView, Button, Alert, TextInput } from 'react-native';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Video} from 'expo-av'

export default function Cart() {

	const [reload, setReload] = useState(false)
	const dispatch = useDispatch()
	const products = useSelector(store => store.shoppingReducer.productos)

	async function toDelete(event) {
		const idProducto = event.target.id
		dispatch(shoppingActions.getUserProducts())
		dispatch(shoppingActions.deleteProduct(idProducto))
		setReload(!reload)
	}

	const productosSum = products?.shopping
	console.log(productosSum)

	let contador = 0
	productosSum?.map(c => contador = contador + c.cantidad)

	let total = 0
	productosSum?.forEach(prod => {
		total = total + prod.idPack?.Precio * prod?.cantidad
	})

	async function toModify(event) {
		event.preventDefault()
		const modifyCarrito = {
			productId: event.target.id,
			cantidad: event.target.value
		}
		dispatch(shoppingActions.modifyProduct(modifyCarrito))
		dispatch(shoppingActions.getUserProducts())
		setReload(!reload)
	}

	return (
		<ScrollView>
			<Text>Resumen de la compra</Text>
			<Text>Cantidad de Packs: {products.shopping?.map(c => c.cantidad.length)} </Text>
			{products.shopping?.map((p, index) =>
				<View key={index}>
						<Video
					style={styles.card}
					source={{uri: p.idPack?.imagen}}
					shouldPlay={true}
					muted={true}
					resizeMode="cover"
				/>

					<Text>{p.idPack?.nombre}</Text>
					<Text>${p.idPack?.Precio}</Text>
					


					<View style={styles.fixToText}>
						<Button
							title="-"
							onPress={() => Alert.alert('Left button pressed')}
						/><TextInput type="number" min="1" max="100" defaultValue='1'></TextInput>
						<Button
							title="+"
							onPress={() => Alert.alert('Right button pressed')}
						/>
					</View>
				</View>)}
				</ScrollView>

	)

}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20
	},
	image: {
		width: 150,
		height: 150
	},
	fixToText: {
		flexDirection: 'row',
		padding: 20,
		height: 80,
	},
	card:{
		alignSelf: 'center',
		backgroundColor: 'black',
		width: '80%',
		height: 350,
		marginHorizontal: 25,
		borderRadius: 20,
		marginBottom: 20,
		overflow: 'hidden',
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.22,
		shadowRadius: 2.22,
		elevation: 3,
	},

})

