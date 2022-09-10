import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "../../../utils/UserContext";

export default UseGetApprovedEvents = () => {
  const { token } = useContext(UserContext);
  const [approvedEvents, setApprovedEvents] = useState([
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

  // const url = "http://localhost:3000/approvedEvents";
  const url = "https://intelligent-livre-26497.herokuapp.com/approvedEvents";
  const authHeader = { Authorization: `Basic ${token}` };
  const options = {
    method: "GET",
    headers: authHeader,
    url: url,
  };

  const getApprovedEvents = async () => {
    axios(options)
      .then((res) => {
        console.log(res.data);
        setApprovedEvents(res.data);
      })
      .catch((error) => {
        console.error("print the error", error);
      });
  };
  useEffect(() => {
    getApprovedEvents();
  }, []);

  return { getApprovedEvents, approvedEvents };
};
