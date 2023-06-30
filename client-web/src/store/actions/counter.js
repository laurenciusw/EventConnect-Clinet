import { setData } from "../slices/counter";

export const fetchData = (payload) => {
  return async (dispatch) => {
    try {
      //fetch
      const data = ["test", "data", "fetch"];
      dispatch(setData(data));
    } catch (error) {
      console.log(error);
    }
  };
};
