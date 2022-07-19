import axios from "axios";

const packsActions = {
    getPacks: () => {
      return async (dispatch, getState) => {
         const res = await axios.get("https://boxbonny-back.herokuapp.com/api/packs");
         dispatch({ type: "GETPACKS", payload: res.data.response.cities });
      };
   },

   getOnePack: (id) => {
      return async (dispatch, getState) => {
         const res = await axios.get(`https://boxbonny-back.herokuapp.com/api/packs/${id}`);
         //   console.log(res)
         dispatch({ type: "GETONEPACK", payload: res.data.response.city });
      };
   },
};

export default packsActions;
