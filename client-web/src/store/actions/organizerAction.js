import axios from 'axios'
import { fetchData } from "./eventAction";

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
      localStorage.setItem("currentTalkjsUser", JSON.stringify(data))
    } catch (error) {
      throw error
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
      throw error
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
      fetchData()
    } catch (error) {
      console.log(error);
    }
  };
};
export const editEvent = (id, payload) => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: 'PUT',
        url: BASE_URL + '/events/' + id,
        data: payload,
        headers: { access_token: localStorage.access_token }
      })
      fetchData()
    } catch (error) {
      console.log(error);
    }
  };
};
export const addTodo = (payload) => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: 'POST',
        url: BASE_URL + '/todolists',
        data: payload,
        headers: { access_token: localStorage.access_token }
      })
      console.log(data);
      // fetchData()
    } catch (error) {
      console.log(error);
    }
  };
};

