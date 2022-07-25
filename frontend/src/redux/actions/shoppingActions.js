import axios from 'axios'

// const url = 'http://localhost:8000/'
const url=  'https://boxbonny-back.herokuapp.com/'

const shoppingActions = {

addProduct: (idPack)=>{
  const token = localStorage.getItem('token')
  console.log(token)
  return async(dispatch,getState)=>{
      const res = await axios.post(url+`api/shopping`,{idPack},{headers: {Authorization: "Bearer "+token}})
      dispatch({type: 'message', payload:{view: true, message: res.data.message, success: res.data.success}})
      console.log(res.data.response)
      return res.data.response
  }
},

getUserProducts: () => {
  const token = localStorage.getItem('token')
  return async(dispatch, getState) => {
      const answer = await axios.get(url+`api/shopping`,{headers: {Authorization: "Bearer "+token}})
      dispatch({type:'GET_PRO', payload:answer.data.response})
      //console.log(answer.data.response.basket)
      return answer.data.response
  }
},

deleteProduct: (id) => {
  const token = localStorage.getItem('token')
  return async(dispatch, getState) => {
      try {
          const answer = await axios.delete(url+`api/shopping/${id}`,{headers: {Authorization: "Bearer "+ token}})
          dispatch({type: 'message', payload:{view: true, message: answer.data.message, success: answer.data.success}})
          return answer.data.response
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