import React, { useState, useEffect } from "react";
import { createContext } from "react";
import axios from "../Api";

let UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [book, setBook] = useState([]);
  const [user, setUser] = useState([]);
  const [id, setId] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  let getData = async () => {
    let response1 = await axios.get("/library");
    let response2 = await axios.get("/user");
    setBook(response1.data);
    setUser(response2.data);
    setId([
      response1.data[0].i,
      response1.data[1].i,
      response1.data[2].i,
      response1.data[3].i,
      response1.data[4].i,
    ]);
  };
  return (
    <UserContext.Provider
      value={{
        book,
        user,
        id,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
