import { clearToken, setLocalStorage } from "../api";
import {
  SET_DEFAULT,
  SET_USER,
  SET_USER_ERROR,
  SET_USER_FROM_LOCAL_STORAGE,
  SET_USER_LOADING,
} from "../utils/constants/constants";

const userReducer = (state, action) => {
  switch (action.type) {
    case SET_USER_LOADING:
      return { ...state, loading: true, error: false, isAuth: false };

    case SET_USER:
      const { token, user } = action.payload;
      setLocalStorage(token, user);
      return { ...state, token, user, loading: false, isAuth: true };

    case SET_USER_ERROR:
      return {
        ...state,
        loading: false,
        user_error: true,
        message: action.payload,
        isAuth: false,
      };

    case SET_DEFAULT:
      return {
        loading: false,
        user: {},
        user_error: false,
        message: "",
        token: "",
        isAuth: false,
      };

    case SET_USER_FROM_LOCAL_STORAGE:
      const storedToken = localStorage.getItem("accessToken");
      return {
        ...state,
        token: storedToken,
        user: action.payload,
        loading: false,
        isAuth: true,
      };
    default:
      throw new Error(`No Matching "${action.type}" - action type`);
  }
};

export default userReducer;
