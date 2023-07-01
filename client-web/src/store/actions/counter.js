import { setData } from '../slices/counter'
import axios from 'axios'
export const fetchData = (payload) => {
  return async (dispatch) => {
    try {
      //fetch
      const { data } = await axios({
        method: 'GET',
        url: 'http://localhost:3000/events'
      })
      console.log(data);
      // const data = ['test', 'data', 'fetch']
      dispatch(setData(data))
    } catch (error) {
      console.log(error);
    }
  };
};
