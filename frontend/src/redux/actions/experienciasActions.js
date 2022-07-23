import axios from "axios";

const experienciasActions = {
    getExperiencias: () => {
      return async (dispatch, getState) => {
         const res = await axios.get("https://boxbonny-back.herokuapp.com/api/experiencias");
         dispatch({ type: "GETEXPERIENCIAS", payload: res.data.response.experiencia });
      };
   },

   getOneExperiencia: (id) => {
      console.log("IDDD",id)
      return async (dispatch, getState) => {
         const res = await axios.get(`https://boxbonny-back.herokuapp.com/api/experiencias/${id}`);
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
   },

   getExperienciasByPack: (id) => {
      return async (dispatch, getState) => {
          const res = await axios.get(`https://boxbonny-back.herokuapp.com/api/experienciabypack/${id}`)
          // console.log(res)
          dispatch({ type: 'GETEXPERIENCIASBYPACK', payload: res.data.response })
          return res
      }
  },

};

export default experienciasActions;