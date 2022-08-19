import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "../../../utils/UserContext";

export default useGetEvents = () => {
  const { refreshing } = useContext(UserContext);
  const [events, setEvents] = useState([
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
  const url = "http://localhost:3000/events";
  // const url = "https://intelligent-livre-26497.herokuapp.com/events";
  const options = {
    method: "GET",
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
