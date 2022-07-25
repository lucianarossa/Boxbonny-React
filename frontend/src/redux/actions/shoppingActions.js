import axios from 'axios'

const url = 'http://localhost:8000/'
// const url=  'https://boxbonny-back.herokuapp.com/'

const shoppingActions = {

addProduct: (idPack)=>{
  const token = localStorage.getItem('token')
  return async(dispatch,getState)=>{
      const res = await axios.post(url+`api/shopping`,{idPack},{headers: {Authorization: "Bearer " + token}})
      dispatch({type: 'message', payload:{view: true, message: res.data.message, success: res.data.success}})
      console.log(res.data)
      return res.data.response.newCarrito
  }
},

getUserProducts: () => {
  const token = localStorage.getItem('token')
  return async(dispatch, getState) => {
      const res = await axios.get(url+`api/shopping`,{headers: {Authorization: "Bearer "+token}})
      dispatch({type:'GET_PRO', payload:res.data.response})
      console.log(res.data.response)
      
  }
},

deleteProduct: (id) => {
  console.log(id)
  const token = localStorage.getItem('token')
  return async(dispatch, getState) => {
      try {
          const res = await axios.delete(url+`api/shopping/${id}`,{headers: {Authorization: "Bearer "+ token}})
          dispatch({type: 'message', payload:{view: true, message: res.data.message, success: res.data.success}})
          return res.data.response
      }catch (err) {
          console.log(err)
      }
    }},

  getOneProduct: (id) => {
        const token = localStorage.getItem('token')
        return async(dispatch, getState) => {
            const answer = await axios.get(url+`api/shopping/${id}`,{headers: {Authorization: "Bearer "+token}})
            dispatch({type:'GET_ONE', payload:answer.data.response})
            
            console.log(answer.data.response)
            return (answer.data.response)
        }
    }




}

export default shoppingActions