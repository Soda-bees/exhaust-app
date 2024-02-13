import io from "socket.io-client";
import { baseURL } from "../../utilities/ApiInstance";
import { updateNotificationRedux, updateOrderStatusRedux } from "../../../store/userData";
import { getUserDetails } from "../API";

let socket;
socket = io(baseURL)

socket.on('connect', () => {
  console.log('Connected to server');
});

const socketService = (dispatch, authToken) => {

  const handleCustomEvent = data => {
    handleGetUserNotification(authToken, dispatch)
    dispatch(updateOrderStatusRedux(data))
  };

  const handleCheckEvent = data => {
    console.log(data);
  }
  socket.on('statusUpdateClient', handleCustomEvent);
  socket.on('checkEvent', handleCheckEvent);
}

export { socket, socketService };

const handleGetUserNotification = async (token, dispatch) => {
  try {
    const response = await getUserDetails(token)
    console.log("socket file response", response.message);
    if (response.success) {
      const allNotification = response.userData.notifications
      dispatch(updateNotificationRedux(allNotification))
    } else {
      console.log(response.message);
    }
  } catch (error) {
    console.log(error);
  }
}