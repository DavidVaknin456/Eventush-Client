import getIDToken from "./useGetIDToken";
import axios from "axios";

export default function getUser() {
  const url = "https://intelligent-livre-26497.herokuapp.com/getUser";
  const authHeader = { Authorization: `Basic ${getIDToken()}` };
  const options = {
    method: "GET",
    headers: authHeader,
    url: url,
  };
  axios(options)
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((error) => {
      console.error(error);
      return null;
    });
}
