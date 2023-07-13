import { redirect } from "react-router-dom";
import { setCheckPass, setCurrentEvents, setPastEvents, setProfile, setRegisteredEvents, setUser, setTodoList } from '../slices/user'
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
      localStorage.role = 'Volunteer'
      localStorage.setItem("currentTalkjsUser", JSON.stringify(data))
      dispatch(setUser(data.email)) //res kurang
    } catch (error) {
      throw error
    }
  };
  // return axios({
  //   method: 'POST',
  //   url: BASE_URL + '/api/login',
  //   data: payload
  // })
};
export const register = (payload) => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: 'POST',
        url: BASE_URL + '/api/register',
        data: payload
      })
      console.log(data, 'data');
    } catch (error) {
      throw error
    }
  };
};

export const registerEvent = (id, payload) => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: 'POST',
        url: BASE_URL + '/api/eventregister/' + id,
        headers: { access_token: localStorage.access_token },
        data: payload
      })
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
};
export const getMyListEvent = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: 'GET',
        url: BASE_URL + '/api/mylist',
        headers: { access_token: localStorage.access_token },
      })
      let current = data.filter(e => e.status !== 'Done' && e.status !== 'Pending')
      let past = data.filter(e => e.status === 'Done')
      let registered = data.filter(e => e.status === 'Pending')
      dispatch(setCurrentEvents(current))
      dispatch(setPastEvents(past))
      dispatch(setRegisteredEvents(registered))
    } catch (error) {
      console.log(error);
    }
  };
};
export const fetchProfile = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: 'GET',
        url: BASE_URL + '/api/users',
        headers: { access_token: localStorage.access_token },
      })
      console.log('test');
      dispatch(setProfile(data))
    } catch (error) {
      console.log(error);
    }
  };
};

export const verifyAccount = (payload) => {
  return async (dispatch) => {
    try {
      console.log('hello');
      const { data } = await axios({
        method: 'POST',
        url: BASE_URL + '/api/verify',
        headers: { access_token: localStorage.access_token },
        data: payload
      })

      console.log(data, '<<< message')

      dispatch(setCheckPass(data.message))
    } catch (error) {
      console.log(error);
    }
  };
}

export const fetchTodoList = (eventId) => {
  return async (dispatch) => {
    try {
      console.log('masuk');
      const { data } = await axios({
        method: 'GET',
        url: BASE_URL + `/api/mytodo/${eventId}`,
        headers: { access_token: localStorage.access_token },
      })
      console.log('jalan', data)
      dispatch(setTodoList(data))
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateTodo = (id, payload) => {
  return async (dispatch) => {
    try {
      console.log('masuk');
      const { data } = await axios({
        method: 'PATCH',
        url: BASE_URL + `/api/todo/${id}`,
        headers: { access_token: localStorage.access_token },
        data: payload
      })
      console.log('jalan')
    } catch (error) {
      console.log(error);
    }
  };
};

export const claimTodo = (payload) => {
  return async (dispatch) => {
    try {
      console.log('masuk');
      const { data } = await axios({
        method: 'POST',
        url: BASE_URL + `/api/todo`,
        headers: { access_token: localStorage.access_token },
        data: payload
      })
      console.log('jalan')
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateIsClaim = (UserEventId) => {
  return async (dispatch) => {
    try {
      console.log('Mulai - Update Claim');
      const { data } = await axios({
        method: 'PATCH',
        url: BASE_URL + `/api/users/${UserEventId}`,
        headers: { access_token: localStorage.access_token },
        data: { isClaim: true }
      })
      dispatch(getMyListEvent())
      console.log('Selesai - Update Claim')
    } catch (error) {
      console.log(error);
    }
  };
};