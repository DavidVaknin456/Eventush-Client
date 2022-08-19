import React, { useContext, useState, useEffect } from "react";
import { getAuth } from "firebase/auth";
import { UserContext } from "../../app/utils/UserContext";

export default useGetIDToken = () => {
  const { setToken } = useContext(UserContext);

  useEffect(() => {
    console.log("search token");
    getAuth().onAuthStateChanged((user) => {
      user
        .getIdToken()
        .then((idToken) => {
          setToken(idToken);
          console.log(idToken);
          console.log("token exist");
        })
        .catch((error) => {
          console.log(error);
          console.log("there is no token");
        });
    });
  }, []);
};
