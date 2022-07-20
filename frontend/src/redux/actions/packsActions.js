import axios from "axios";

const packsActions = {
    getPacks: () => {
      return async (dispatch, getState) => {
         const res = await axios.get("https://boxbonny-back.herokuapp.com/api/packs");
         console.log(res)
         dispatch({ type: "GETPACKS", payload: res.data.response.packs });
      };
   },

   getOnePack: (id) => {
      return async (dispatch, getState) => {
         console.log("hola");
         const res = await axios.get(`https://boxbonny-back.herokuapp.com/api/packs/${id}`);
         console.log(res)
         console.log("chau");
         dispatch({ type: "GETONEPACK", payload: res.data.response });
      };
   },
};

export default packsActions;
