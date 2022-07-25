import React, {useEffect} from 'react'
import {NavigationContainer} from "@react-navigation/native";
import {useDispatch} from 'react-redux'
import packsActions from '../redux/actions/packsActions'
import usuariosActions from '../redux/actions/usuariosActions'

import MyTabs from './MyTabs';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Navigation(){
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(packsActions.getPacks())
		const token = AsyncStorage.getItem('@token')
    if(token !== null) {
			dispatch(usuariosActions.verificarToken(token))
    }
	},[])

	return(
		<NavigationContainer>
			<MyTabs />
		</NavigationContainer>
	)
}