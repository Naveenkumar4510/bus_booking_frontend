import axios from "axios";

const BUS_API='http://localhost:8080/api/bus'



export const listBuses = () => axios.get(BUS_API);