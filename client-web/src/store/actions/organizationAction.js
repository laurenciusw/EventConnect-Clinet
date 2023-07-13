import { setAllUser, setOrgEvents, setUserDetail, setUserList, setUserPending } from '../slices/organization'
import axios from 'axios'

const BASE_URL = 'http://localhost:3000'

export const fetchOrgEvents = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: 'GET',
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
        url: BASE_URL + '/eventsByOrganizer'
      })
      // console.log(data)
      dispatch(setOrgEvents(data))
    } catch (error) {
      console.log(error);
    }
  };
};

export const destroyEvent = (eventId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: 'DELETE',
        headers: { access_token: localStorage.access_token },
        url: BASE_URL + `/events/${eventId}`
      })
      // console.log(data)
      dispatch(fetchOrgEvents())
    } catch (error) {
      console.log(error);
    }
  };
};

export const getUserList = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: 'GET',
        url: BASE_URL + '/userevent/' + id,
        headers: { access_token: localStorage.access_token }
      })
      let pending = data.filter(e => e.status === 'Pending')
      let all = data.filter(e => e.status !== 'Pending')
      dispatch(setUserPending(pending))
      dispatch(setUserList(all))
      dispatch(setAllUser(data))
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
};

export const getUserDetail = (userId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: 'GET',
        url: BASE_URL + `/userevent/user/${userId}`,
        headers: { access_token: localStorage.access_token }
      })
      dispatch(setUserDetail(data))
    } catch (error) {
      console.log(error);
    }
  };
};
export const updateUserStatus = (userId, status) => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: 'PATCH',
        url: BASE_URL + `/userevent/${userId}`,
        headers: { access_token: localStorage.access_token },
        data: { status }
      })
    } catch (error) {
      console.log(error);
    }
  };
};
