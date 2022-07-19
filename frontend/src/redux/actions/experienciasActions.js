import axios from "axios";

const experienciasActions = {
    getExperiencias: () => {
      return async (dispatch, getState) => {
         const res = await axios.get("https://boxbonny-back.herokuapp.com/api/experiencias");
         dispatch({ type: "GETEXPERIENCIAS", payload: res.data.response.cities });
      };
   },

   getOneExperiencia: (id) => {
      return async (dispatch, getState) => {
         const res = await axios.get(`https://boxbonny-back.herokuapp.com/api/experiencias/${id}`);
         //   console.log(res)
         dispatch({ type: "GETONEEXPERIENCIA", payload: res.data.response.city });
      };
   },

   filterExperiencia: (input) => {
      return (dispatch, getState) => {
         dispatch({ type: "FILTEREXPERIENCIAS", payload: input });
      };
   },
};

export default experienciasActions;
