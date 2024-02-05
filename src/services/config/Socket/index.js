import  io  from "socket.io-client";
import { baseURL } from "../../utilities/ApiInstance";

let socket;
export default socket = io(baseURL)

socket.on('connect', () => {
    console.log('Connected to server');
  });

