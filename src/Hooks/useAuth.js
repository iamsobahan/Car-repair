import { useContext } from "react";
import { AuthContext } from "../Contexts/Authprovider";

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
