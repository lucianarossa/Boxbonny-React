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
         //   console.log(res)
         dispatch({ type: "GETONEEXPERIENCIA", payload: res.data.response.experiencia });
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
         const res = await axios.post("https://boxbonny-back.herokuapp.com/api/experiencias", formData,
         {headers:{
            Authotization: "Bearer "+token
         }
      })
      return res
      }
   }
};

export default experienciasActions;