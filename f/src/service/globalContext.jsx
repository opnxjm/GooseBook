import { useState } from "react";
import { createContext,useEffect } from "react";
// Create the context provider component
export const MyContext = createContext();
const MyContextProvider = ({ children }) => {
    // State variables or any other data you want to share
    const [userData, setUserData] = useState({
      userId: null,
      username: null,
      name: null,
      bio: null,
      profile_pic: null,
      email: null,
    });
  
    // Define functions for setting and getting user data
    const setUserDataValue = (newUserData) => {
    setUserData(prevUserData => ({ ...prevUserData, ...newUserData }));
    };
  
    const getUserDataValue = () => {
      return userData;
    };
  
    // Create an object with the values to be shared
    const contextValues = {
      setUserDataValue,
      getUserDataValue,

      
    };
  
    // Provide the context values to its children components
    return (
      <MyContext.Provider value={contextValues}>
        {children}
      </MyContext.Provider>
    );
  };
  export default MyContextProvider;
  