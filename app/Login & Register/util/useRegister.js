import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Screens/utils/UserContext";
import getUser from "./getUser";

export default useRegister = () => {
  const { user, setUser } = useContext(UserContext);
  const [isRegister, setIsRegister] = useState(null);

  useEffect(() => {
    // getUser from server
    const srt = getUser();
    if (srt) {
      setIsRegister(true);
    } else {
      setIsRegister(false);
    }
  }, [user]);

  return { isRegister };
};
