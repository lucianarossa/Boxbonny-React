import React from 'react'
import { StyleSheet, Text, View,SafeAreaView,FlatList, Dimensions} from 'react-native';
import {useSelector} from 'react-redux'
import CarouselItem from '../components/CarouselItem';


export default function Home() {
	const packs = useSelector(store => store.packsReducer.packs)
	
	return (
		<View style={styles.container}>
			<View style={styles.list}>
				<FlatList
						horizontal={true}
						data={packs}
						renderItem={CarouselItem}
						keyExtractor={item => item._id}
					/>
			</View>

    </View>
	)
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
	list: {
		height: Dimensions.get('window').height/3.5,
		width: '100%',
	}
	
});
