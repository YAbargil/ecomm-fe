import { useContext, useEffect, useReducer } from "react";
import React, { createContext } from "react";
import reducer from "../reducers/userReducer";
import {
  SET_USER,
  SET_USER_ERROR,
  SET_USER_FROM_LOCAL_STORAGE,
  SET_USER_LOADING,
} from "../utils/constants/constants";
import { logIn, signUp } from "../api";

const initialState = {
  loading: false,
  user: {},
  user_error: false,
  message: "",
  token: "",
  isAuth: false,
};
const UserContext = createContext(initialState);

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      console.log("user", user);
      dispatch({ type: SET_USER_FROM_LOCAL_STORAGE, payload: user });
    }
  }, [state.isAuth]);

  const logUser = async (values) => {
    try {
      dispatch({ type: SET_USER_LOADING, payload: values });
      const result = await logIn(values);
      dispatch({ type: SET_USER, payload: result.data });
    } catch (err) {
      dispatch({
        type: SET_USER_ERROR,
        payload: err.response.data.msg,
      });
    }
  };

  const signUpHandler = async (values) => {
    try {
      dispatch({ type: SET_USER_LOADING, payload: values });
      const result = await signUp(values);
      dispatch({ type: SET_USER, payload: result.data });
    } catch (err) {
      dispatch({
        type: SET_USER_ERROR,
        payload: err.response.data.msg,
      });
      console.log(err);
    }
  };

  return (
    <UserContext.Provider
      value={{
        ...state,
        logUser,
        signUpHandler,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
