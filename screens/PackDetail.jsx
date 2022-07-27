import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View,ScrollView, ActivityIndicator, SafeAreaView, Button, TouchableOpacity } from 'react-native';
import {useSelector,useDispatch} from 'react-redux'
import ExperienciaCard from '../components/ExperienciaCard';
import packsActions from '../redux/actions/packsActions'
import DropDownPicker from 'react-native-dropdown-picker';
import shoppingActions from '../redux/actions/shoppingActions';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export default function PackDetail({route}) {
	const dispatch = useDispatch()
	const pack = useSelector(store => store.packsReducer.getOnePack)
	const [packLoad, setPackLoad] = useState(false);
	const [open, setOpen] = useState(false);
	const [reload, setReload] = useState(false)
  const [value, setValue] = useState("Todas las provincias");
  const [items, setItems] = useState([
    {label: 'Todas las provincias', value: 'Todas las provincias'},
    {label: 'Buenos Aires', value: 'Buenos Aires'},
    {label: 'Córdoba', value: 'Córdoba'},
    {label: 'Mendoza', value: 'Mendoza'},
  ]);


	useEffect(()=>{
		dispatch(packsActions.getOnePack(route.params.packId))
		if(pack !== undefined){
			setPackLoad(true)
		}else{
			setPackLoad(false)
			console.log(pack)
		}
	},[])

	async function añadirProducto(event) {
        const idPack = event.target.id
        dispatch(shoppingActions.addProduct(idPack))
        dispatch(shoppingActions.getUserProducts())
        setReload(!reload)
    }

	return (
		<View style={styles.container}>
			{ packLoad ? <>
				<Text style={styles.title}> {pack.nombre} </Text>
				<Text style={styles.description}> {pack.descripcion} </Text>
				<Text style={styles.price}>PRECIO DEL PACK: ${pack.Precio} </Text>
				<TouchableOpacity style={styles.button} id={pack._id} onPress={añadirProducto} ><Text><MaterialCommunityIcons name="shopping-outline" size={24} color="white" />Añadir Producto</Text></TouchableOpacity>
				<Text style={styles.slogan}>MOMENTOS UNICOS PARA DISFRUTAR</Text>
				<SafeAreaView  style={styles.select}>
					<DropDownPicker
					placeholder="Todas las provincias"
						open={open}
						value={value}
						items={items}
						setOpen={setOpen}
						setValue={setValue}
						setItems={setItems}
					/>
				</SafeAreaView>
				
				<ScrollView horizontal={true} style={styles.list}>
					{ value === "Todas las provincias" 
					? 
					pack.experiencias?.map(experiencia => <ExperienciaCard key={experiencia._id} experiencia={experiencia}/>)
					:
					pack.experiencias.filter(city => city.ciudad === value).map(experiencia => <ExperienciaCard key={experiencia._id} experiencia={experiencia}/>)}
				</ScrollView>
			</>
			: <ActivityIndicator />}
		</View>
	)
	
}
const styles = StyleSheet.create({
	container:{
		backgroundColor: '#f6f7eb',
		flex: 1,
	},
  title:{
		color: '#f6f7eb',
		marginTop: 10,
		fontSize: 35,
		alignSelf: 'center',
		fontWeight: 'bold',
		textShadowColor: 'rgba(0, 0, 0, 0.75)',
		textShadowOffset: {width: -1, height: 1},
  	textShadowRadius: 10,
	},
	description:{
		marginTop: 10,
		fontSize: 15,
		paddingHorizontal: 20,
		color:'#393e41',
		textAlign: 'center',
	},
	price:{
		marginTop: 15,
		color:'#393e41',
		textAlign: 'center',
		fontWeight:'bold',
	},
	slogan:{
		alignSelf: 'center',
		color: '#fe967c',
		marginTop: 10,
		borderBottomColor: '#393e41',
		paddingBottom: 10,
		borderBottomWidth: 1,
		marginBottom: 20,
	},
	select:{
		flex: 1,
		alignSelf: 'center',
		marginHorizontal: 50,
		marginBottom: 50,
	},
	list:{
		marginTop: 10,
		marginBottom: 25,
	},
	button:{
		alignSelf: 'center',
		backgroundColor: '#e9580c',
		paddingVertical: 15,
		paddingHorizontal: 35,
		marginBottom: 10,
		marginTop:15,
		color: 'white',
		borderRadius: 30,
	}
});
