import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../app/utils/UserContext";
import useGetUser from "./useGetUser";

export default useRegister = () => {
  useGetUser();
  const { user } = useContext(UserContext);
  const [isRegister, setIsRegister] = useState(null);

  useEffect(() => {
    console.log("verify registration");
    console.log("The user", user);
    if (user) {
      setIsRegister(true);
      console.log("register");
    } else if (user === false) {
      console.log("user not register");
      setIsRegister(false);
    }
  }, [user]);

  return { isRegister };
};
