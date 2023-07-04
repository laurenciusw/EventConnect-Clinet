import axios from 'axios'

const BASE_URL = 'http://localhost:3000'

export const loginOrganizer = (payload) => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: 'POST',
        url: BASE_URL + '/loginorganizer',
        data: payload
      })
      localStorage.access_token = data.access_token
      localStorage.role = 'Organizer'
    } catch (error) {
      console.log(error);
    }
  };
};
export const register = (payload) => {
  return async (dispatch) => {
    try {
      await axios({
        method: 'POST',
        url: BASE_URL + '/organizers',
        data: payload
      })
    } catch (error) {
      console.log(error);
    }
  };
};
export const createEvent = (payload) => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: 'POST',
        url: BASE_URL + '/events',
        data: payload,
        headers: { access_token: localStorage.access_token }
      })
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
};

