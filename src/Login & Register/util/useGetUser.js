import axios from "axios";
import { useContext, useEffect } from "react";
import { UserContext } from "../../app/utils/UserContext";

export default useGetUser = () => {
  const { user, setUser } = useContext(UserContext);
  const url = "https://intelligent-livre-26497.herokuapp.com/getUser";
  const { token } = useContext(UserContext);
  const authHeader = { Authorization: `Basic ${token}` };
  const options = {
    method: "GET",
    headers: authHeader,
    url: url,
  };
  useEffect(() => {
    const getUser = async () => {
      console.log("get user from db");
      console.log(token);
      if (token) {
        axios(options)
          .then((res) => {
            console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%", user);
            console.log(res.data);
            setUser(res.data);
          })
          .catch((error) => {
            console.error("print the error", error);
            console.log("+++++++++++++++++++++++++++++++++++++++++++++", user);
          });
      } else {
        console.log("The tokenId is invalid");
      }
    };
    getUser();
  }, [token]);
};
