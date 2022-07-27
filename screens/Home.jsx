import React from 'react'
import { StyleSheet, Text, View,ScrollView ,FlatList, Dimensions, Image, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux'
import CarouselItem from '../components/CarouselItem';
import { useScrollToTop } from '@react-navigation/native';


export default function Home({navigation}) {
	const ref = React.useRef(null);
    useScrollToTop(ref);
	const packs = useSelector(store => store.packsReducer.packs)
	
	return (
		<ScrollView style={styles.container}>
			<View style={styles.list}>
				<FlatList
						horizontal={true}
						data={packs}
						renderItem={CarouselItem}
						keyExtractor={item => item._id}
					/>
			</View>
			<View style={styles.description}>
				<Image source={require('../assets/boxlogo.png')} style={styles.image} />
				<View style={styles.descriptionText}>
					<Text style={styles.normal}>
						Provee regalos originales a través de experiencias y momentos inolvidables. Todas nuestras cajas regalo están repletas de emoción y quien la recibe podrá elegir la experiencia que desee.
					</Text>
					<Text style={styles.normal}>
						Porque los momentos de felicidad son los que recordaremos por siempre.
					</Text>
					<Text style={styles.bold}>
						Boxbonny. La felicidad de regalar.
					</Text>
				</View>
			</View>
			<Text style={styles.title}>¿Como funciona?</Text>
			<View style={styles.card}>
				<Image source={{uri : 'https://images01.nicepage.com/c461c07a441a5d220e8feb1a/8cc47b39e719570b996d9879/dsds.jpg'}}
				style={styles.cardImage}/>
				<Text style={styles.cardTitle}>
					Paso 1
				</Text>
				<Text style={styles.cardDescription}>
				Seleccioná el pack que quieras y su presentación con packaging físico o digital.
				</Text>
			</View>

			<View style={styles.card}>
				<Image source={{uri : 'https://images01.nicepage.com/c461c07a441a5d220e8feb1a/3b242447f922540fbe750cab/fdf.jpg'}}
				style={styles.cardImage}/>
				<Text style={styles.cardTitle}>
					Paso 2
				</Text>
				<Text style={styles.cardDescription}>
				Elegí una experiencia dentro de una amplia variedad de opciones.
				</Text>
			</View>

			<View style={styles.card}>
				<Image source={{uri : 'https://images01.nicepage.com/c461c07a441a5d220e8feb1a/a17abde8d83650a582a28432/users-with-speech-bubbles-vector_53876-82250.jpg'}}
				style={styles.cardImage}/>
				<Text style={styles.cardTitle}>
					Paso 3
				</Text>
				<Text style={styles.cardDescription}>
				Disfrutá la experiencia presentando la tarjeta física o código E-Pack.
				</Text>
			</View>
			<TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate("Packs")}
                        ref={ref}
                    >
                        <Text style={styles.buttonText}>CONOCE NUESTRAS OPCIONES</Text>
                    </TouchableOpacity>		
    </ScrollView>
	)
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
		backgroundColor: '#ffedd5',
  },
	list: {
		height: Dimensions.get('window').height/2.5,
		width: '100%',
	},
	image:{
		width: '35%',
		height: '30%'
	},
	description:{
		flexDirection: "row",
		height: Dimensions.get('window').height/2.5,
		alignItems: 'center'
	},
	descriptionText:{
		width: '60%',
		height:"100%",
		marginTop:50
	},
	normal:{
		marginBottom: 10,
		fontFamily:"Poppins_500Medium"
	},
	bold:{
		fontWeight: 'bold',
		fontFamily:"Poppins_500Medium"
	},
	title: {
		alignSelf: 'center',
		color: '#ff8e72',
		fontWeight: 'bold',
		fontSize: 25,
		marginBottom: 10,
		fontFamily:"Poppins_500Medium"
	},
	card:{
		alignItems: 'center',
		marginVertical: 15,
		alignSelf: 'center',
		width: '80%',
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
	cardImage:{
		width: '90%',
		height: 300,
	},
	cardTitle:{
		color: '#ff8e72',
		fontWeight: 'bold',
		fontSize: 25,
		fontFamily:"Poppins_500Medium"
	},
	cardDescription:{
		textAlign: 'center',
		paddingVertical: 10,
		paddingHorizontal: 20,
		color: '#393e41',
		fontSize: 15,
		marginBottom: 10,
		fontFamily:"Poppins_500Medium"
	},
	button:{
		alignSelf: 'center',
		backgroundColor: '#FF8E72',
		paddingVertical: 15,
		paddingHorizontal: 35,
		marginBottom: 80,
		borderRadius: 30,
		marginTop:20
		
	},
	buttonText:{
		color: 'white',
		fontWeight:"bold",
		fontFamily:"Poppins_500Medium"
	}
});
