import axios from "axios";

const comentariosActions = {

    AddComment: (comentario) => {
        
        return async (dispatch, getState) => {
            try{
            const token = localStorage.getItem("token")
            const res = await axios.post("https://boxbonny-back.herokuapp.com/api/experiencias/comment", {comentario}, {
                headers: {
                    "Authorization": "Bearer " + token
                }
                
            })
            // console.log("RESP ACTIONS",res)

            return res.data

            }catch (error){
                console.log(error)
            }
        } 
    },

    UpdateComment: (comentario) => {
        // console.log("COMENTARIO",comentario)
        const token = localStorage.getItem('token')
        return async (dispatch, getState) => {
            try{
                const res = await axios.put("https://boxbonny-back.herokuapp.com/api/modifcomment", {...comentario }, {
                    headers: {
                        'Authorization': 'Bearer '+token
                    }
                })
                console.log("RESACTIONS",res)

                dispatch({
                    type: 'message',
                    payload: {
                        view: true,
                        message: res.data.message,
                        success: res.data.success
                    }
                })

                return res

            }catch(err){
                console.log(err)
            }

        }
    } ,
  
  
    DeleteComment: (id) => {
        const token = localStorage.getItem("token")
        return async (dispatch, getState) => {
            const res = await axios.post(`https://boxbonny-back.herokuapp.com/api/experiencias/comment/${id}`, {}, {
                headers: {
                    "Authorization": "Bearer " + token
                }
            })
            dispatch({
                type: "MESSAGE",
                payload: {
                    view: true,
                    message: res.data.message,
                    success: res.data.success
                }
            })
            return res
        }

    },

    CheckRating: (id) => { //RECIBE EL ID DE LA EXP COMO PARAM
        const token = localStorage.getItem("token") //LEVANTO EL TOKEN
        return async (dispatch) => {
            try {
                let response = await axios.put(`https://boxbonny-back.herokuapp.com/api/rating/${id}`, {}, //ESPERA EL PUT DE AXIOS, PRIMER PARAMETRO OBJETO VACIO(PARA OCUPAR EL LUGAR DE BODY Y NO TOME EL HEADER COMO BODY) Y LUEGO EL HEADER
                {headers: {
                    Authorization: "Bearer "+ token
                }
            })
            dispatch({
                type: 'message',
                payload: {
                    view: true,
                    message: response.data.message,
                    success: response.data.success
                }
            })
     
            return response.data
       
     
            }catch (error) {
                console.log(error)
            }
            
        }
     }
}

export default comentariosActions