import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "../../../utils/UserContext";

export default useGetEvents = () => {
  const { token } = useContext(UserContext);
  const { refreshing } = useContext(UserContext);
  const [events, setEvents] = useState([
    {
      _id: "0",
      orgID: "0",
      category: "0",
      date: ["0"],
      location: "0",
      description: "0",
      minAge: "0",
      minMembers: "0",
      maxMembers: "0",
      members: [" ", " "],
      isEventApproved: false,
      updatedAt: "0",
      __v: 0,

      // orgID
      // category
      // date
      // location
      // description
      // minAge
      // minMembers
      // maxMembers
      // members
      // isEventApproved
    },
  ]);
  // const url = "http://localhost:3000/events";
  const url = "https://intelligent-livre-26497.herokuapp.com/events";
  const authHeader = { Authorization: `Basic ${token}` };
  const options = {
    method: "GET",
    headers: authHeader,
    url: url,
  };

  useEffect(() => {
    console.log("It will be printed 1-st");

    setTimeout(newStyleDelay, 100);

    async function newStyleDelay() {
      axios(options)
        .then((res) => {
          console.log(res.data);
          setEvents(res.data);
        })
        .catch((error) => {
          console.error("print the error", error);
        });
    }
  }, [refreshing]);
  return { events };
};
