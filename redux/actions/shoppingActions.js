import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
// const url = 'http://localhost:8000/'
const url=  'https://boxbonny-back.herokuapp.com/'

const shoppingActions = {

addProduct: (idPack)=>{
  return async(dispatch,getState)=>{
    try{
    const token = await AsyncStorage.getItem('@token')
      const res = await axios.post(`https://boxbonny-back.herokuapp.com/api/shopping`,{idPack},{headers: {Authorization: "Bearer " + token}})
      // console.log(res.data)
      dispatch({type: 'message', payload:{view: true, message: res.data.message, success: res.data.success}})
      return res.data.response
  }catch (error){
    console.log(error)
}
}},

getUserProducts: () => {
  return async(dispatch, getState) => {
    const token = await AsyncStorage.getItem('@token')
      const res = await axios.get(`https://boxbonny-back.herokuapp.com/api/shopping`,{headers: {Authorization: "Bearer "+token}})
      console.log("NATIIIVEEEEE TE ODIOOOOOO", res.data)
      dispatch({type:'GET_PRO', payload:res.data.response})      
  }
},

deleteProduct: (id) => {
  return async(dispatch, getState) => {
    const token = await AsyncStorage.getItem('@token')
      try {
          const res = await axios.delete(`https://boxbonny-back.herokuapp.com/api/shopping/${id}`,{headers: {Authorization: "Bearer "+ token}})
          dispatch({type: 'message', payload:{view: true, message: res.data.message, success: res.data.success}})
          return res.data.response
      }catch (err) {
          console.log(err)
      }
    }},

  getOneProduct: (id) => {
    return async(dispatch, getState) => {
          const token = await AsyncStorage.getItem('@token')
            const answer = await axios.get(url+`api/shopping/${id}`,{headers: {Authorization: "Bearer "+token}})
            // console.log(answer)
            dispatch({type:'GET_ONE', payload:answer.data.response})
            return (answer.data.response)
        }
    },
    modifyProduct: (modifyCarrito) => {
      // console.log(modifyCarrito)
      return async (dispatch, getState) => {
        const token = await AsyncStorage.getItem('@token')
          const res = await axios.put(url+`api/shopping`,{...modifyCarrito},
          {headers: {Authorization: "Bearer "+token}})
      dispatch({type: 'message', payload: {view: true, message: res.data.message, success: res.data.success}})
      return res.data.response
      }
  },
}

export default shoppingActions