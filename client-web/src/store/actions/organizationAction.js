import { setOrgEvents } from '../slices/organization'
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

