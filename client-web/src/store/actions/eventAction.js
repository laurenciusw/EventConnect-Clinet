import { setData, setEvent } from '../slices/event'
import axios from 'axios'

const BASE_URL = 'http://localhost:3000'

export const fetchData = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: 'GET',
        url: BASE_URL + '/events'
      })
      dispatch(setData(data))
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchDataById = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: 'GET',
        url: BASE_URL + '/events/' + id
      })
      console.log(data);
      dispatch(setEvent(data))
    } catch (error) {
      console.log(error);
    }
  };
};
