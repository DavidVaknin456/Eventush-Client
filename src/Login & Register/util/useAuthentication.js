import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";

export default useAuthentication = () => {
  const [isAuthenticate, setIsAuthenticate] = useState();

  useEffect(() => {
    console.log("verify authentication ");
    getAuth().onAuthStateChanged((auth) => {
      setIsAuthenticate(!!auth);
    });
  }, []);

  return { isAuthenticate };
};
