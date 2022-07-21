import axios from "axios";

const packsActions = {
    getPacks: () => {
      return async (dispatch, getState) => {
         const res = await axios.get("https://boxbonny-back.herokuapp.com/api/packs");
  
         dispatch({ type: "GETPACKS", payload: res.data.response.packs });
      };
   },

   getOnePack: (id) => {
      return async (dispatch, getState) => {
         
         const res = await axios.get(`https://boxbonny-back.herokuapp.com/api/packs/${id}`);
         
         dispatch({ type: "GETONEPACK", payload: res.data.response });
      };
   },
};

export default packsActions;
