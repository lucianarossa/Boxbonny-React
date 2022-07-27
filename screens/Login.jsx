import React, {useState} from 'react'
import { StyleSheet, Text,KeyboardAvoidingView, TextInput, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import Toast from 'react-native-toast-message';
import usuariosActions from '../redux/actions/usuariosActions';
import { useDispatch } from 'react-redux'


export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigation = useNavigation()
	const dispatch = useDispatch()

	const loginSubmit = async () =>{
		const logueado = {
			email: email,
			password: password,
			from: "formulario-inicio"
		}
		let res = await dispatch(usuariosActions.inicioSesion(logueado))
		if (res.data.success) {
			Toast.show({
				type: 'success',
				text1: 'Bienvenido 👋',
				text2: res.data.message
			});
		}else{
			Toast.show({
				type: 'error',
				text1: 'no se pudo completar el inicio de sesion',
				text2: res.data.message
			});
			setEmail("")
			setPassword("")
		}
	}

	return (
		<KeyboardAvoidingView
		style={styles.container}
		behavior={Platform.OS === "ios" ? "padding" : "height"}>

			<LinearGradient
			style={styles.top}
        // Button Linear Gradient
        colors={['#e7a696', '#e79985', '#ee947d']}
				>
					<Text style={styles.titleCircle}>No tenés cuenta todavía?</Text>
					<Text style={styles.subtitleCircle}>Registrate para empezar a regalar emociones</Text>
					<TouchableOpacity onPress={() => navigation.navigate('registro')}>
						<Text style={styles.buttonCircle}>Registrate</Text>
					</TouchableOpacity>
				</LinearGradient>
			
			<TextInput
        style={styles.form}
        onChangeText={setEmail}
        value={email}
        placeholder="Email address"
      />
			<TextInput
        style={styles.form}
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
				secureTextEntry={true}
      />
			<TouchableOpacity onPress={loginSubmit}>
				<Text style={styles.button}>Log In</Text>
			</TouchableOpacity>
			
		</KeyboardAvoidingView>
	)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
	form:{
		alignSelf: 'center',
		marginBottom: 20,
		backgroundColor: '#f0f0f0',
		padding: 10,
		paddingLeft: 10,
		borderRadius: 30,
		width: '80%',
		
	},
	top:{
		alignItems: 'center',	
		width: 300,
		height: 300,
		padding: 10,
		backgroundColor: 'red',
		borderBottomLeftRadius: 0,
		borderBottomRightRadius: 300,
		borderTopLeftRadius: 0,
		borderTopRightRadius: 0,
		marginBottom: 20,
	},
	button:{
		alignSelf: 'center',
		backgroundColor: '#111827',
		color: 'white',
		padding: 10,
		fontSize: 17,
		borderRadius: 10,
	},
	titleCircle:{
		marginTop: 30,
		textAlign: 'center',
		color: 'white',
		fontWeight: 'bold',
		fontSize: 16,
	},
	subtitleCircle:{
		marginTop: 5,
		textAlign: 'center',
		color: 'white',
		fontSize: 14,
	},
	buttonCircle:{
		marginTop: 10,
		alignSelf: 'center',
		color: 'white',
		padding: 7,
		borderColor: 'white',
		borderWidth: 1,
		borderRadius: 10,
	}
});