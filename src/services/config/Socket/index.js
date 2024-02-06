import io from "socket.io-client";
import { baseURL } from "../../utilities/ApiInstance";
import { updateOrderStatusRedux } from "../../../store/userData";

let socket;
socket = io(baseURL)

socket.on('connect', () => {
  console.log('Connected to server');
});

const socketService = (dispatch) => {

  const handleCustomEvent = data => {
    dispatch(updateOrderStatusRedux(data))
  };

  socket.on('statusUpdateClient', handleCustomEvent);
}

export { socket, socketService };
