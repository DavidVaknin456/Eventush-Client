import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "../../../utils/UserContext";

export default useGetMyEvents = () => {
  const { token } = useContext(UserContext);
  const [myEvents, setMyEvents] = useState([
    {
      _id: "0",
      category: "0",
      date: ["0"],
      location: "0",
      description: "0",
      minAge: "0",
      updatedAt: "0",
      members: [" ", " "],
      __v: 0,
    },
  ]);

  // const url = "http://localhost:3000/myEvents";
  const url = "https://intelligent-livre-26497.herokuapp.com/myEvents";
  const authHeader = { Authorization: `Basic ${token}` };
  const options = {
    method: "GET",
    headers: authHeader,
    url: url,
  };

  const getMyEvents = async () => {
    axios(options)
      .then((res) => {
        console.log(res.data);
        setMyEvents(res.data);
      })
      .catch((error) => {
        console.error("print the error", error);
      });
  };
  useEffect(() => {
    getMyEvents();
  }, []);

  return { getMyEvents, myEvents };
};
