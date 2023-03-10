import { useEffect } from "react";
import { useUserContext } from "../context/userContext";

export const ProfilePage = () => {
  const { user } = useUserContext();

  useEffect(() => {}, [user]);
  return (
    <>
      {user ? (
        <div>
          <h3>{user?.name}</h3>
          <h3>{user?._id}</h3>
          <h3>{user.email}</h3>
        </div>
      ) : (
        <div>
          <h3>Loading...</h3>
        </div>
      )}
    </>
  );
};
