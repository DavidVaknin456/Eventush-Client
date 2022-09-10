import { useEffect } from "react";
import { useContext, useState } from "react";
import { UserContext } from "../../../utils/UserContext";
import axios from "axios";

export default useGetAdminEvents = () => {
  const { token } = useContext(UserContext);
  const [adminEvents, setAdminEvents] = useState([
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

  // const url = "http://localhost:3000/adminEvents";
  const url = "https://intelligent-livre-26497.herokuapp.com/adminEvents";
  const authHeader = { Authorization: `Basic ${token}` };
  const options = {
    method: "GET",
    headers: authHeader,
    url: url,
  };

  const getAdminEvents = async () => {
    axios(options)
      .then((res) => {
        console.log(res.data);
        setAdminEvents(res.data);
      })
      .catch((error) => {
        console.error("print the error", error);
      });
  };

  useEffect(() => {
    getAdminEvents();
  }, []);

  return { getAdminEvents, adminEvents };
};
