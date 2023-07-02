import { setUser } from '../slices/user'
import axios from 'axios'

const BASE_URL = 'http://localhost:3000'

export const login = (payload) => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: 'POST',
        url: BASE_URL + '/api/login',
        data: payload
      })
      localStorage.access_token = data.access_token
      dispatch(setUser(data.email)) //res kurang
    } catch (error) {
      console.log(error);
    }
  };
};
