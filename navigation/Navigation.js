import React, {useEffect} from 'react'
import {NavigationContainer} from "@react-navigation/native";


import {useDispatch} from 'react-redux'
import packsActions from '../redux/actions/packsActions'
import MyTabs from './MyTabs';

export default function Navigation(){
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(packsActions.getPacks())
	},[])

	return(
		<NavigationContainer>
			<MyTabs />
		</NavigationContainer>
	)
}