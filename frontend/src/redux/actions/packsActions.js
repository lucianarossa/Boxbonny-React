import axios from "axios";

const packsActions = {
    getPacks: () => {
      return async (dispatch, getState) => {
         const res = await axios.get("https://boxbonny-back.herokuapp.com/api/packs");
         // console.log(res)
         dispatch({ type: "GETPACKS", payload: res.data.response.packs });
      };
   },

   getOnePack: (id) => {
      return async (dispatch, getState) => {
         const res = await axios.get(`https://boxbonny-back.herokuapp.com/api/packs/${id}`);
         // console.log(res)
         dispatch({ type: "GETONEPACK", payload: res.data.response });
      };
   },
   
   filterExperiencia: (input) => {
      return (dispatch, getState) => {
         dispatch({ type: "FILTEREXPERIENCIAS", payload: input });
      };
   },
};

export default packsActions;
