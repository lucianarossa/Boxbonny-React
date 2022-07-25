import axios from "axios";

const experienciasActions = {
    getExperiencias: () => {
      return async (dispatch, getState) => {
         const res = await axios.get("https://boxbonny-back.herokuapp.com/api/experiencias");
         dispatch({ type: "GETEXPERIENCIAS", payload: res.data.response.experiencia });
      };
   },

   getOneExperiencia: (id) => {
      return async (dispatch, getState) => {
         const res = await axios.get(`https://boxbonny-back.herokuapp.com/api/experiencias/${id}`);
           console.log("resssssssssss", res)
         dispatch({ type: "GETONEEXPERIENCIA", payload: res.data.response });
      };
   },

   filterExperiencia: (input) => {
      return (dispatch, getState) => {
         dispatch({ type: "FILTEREXPERIENCIAS", payload: input });
      };
   },

   addExperiencia: (formData) => {
      const token = localStorage.getItem('token')
      return async(dispatch, getState) => {
         const res = await axios.post("https://boxbonny-back.herokuapp.com/api/adminUpload", formData,
         {headers:{
            "Authorization": "Bearer "+token
         }
      })
      dispatch({
         type:'message',
         payload:{
            view: true,
            message: res.data.message,
            success: res.data.success
         }
      })
      return res
      }
   }
};

export default experienciasActions;