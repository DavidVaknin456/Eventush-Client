import React, { useContext, useState, useEffect } from "react";
import { getAuth } from "firebase/auth";

export default useGetIDToken = () => {
  const [tokenId, setTokenId] = useState("");

  useEffect(() => {
    getAuth().onAuthStateChanged((user) => {
      user
        .getIdToken()
        .then((idToken) => {
          setTokenId(idToken);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }, []);

  return { tokenId };
};
