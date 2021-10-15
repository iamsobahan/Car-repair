import {
  GoogleAuthProvider,
  getAuth,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import firebaseInit from "../Firebase/Firebase.init";

firebaseInit();

const useFirebase = () => {
  const [user, setuser] = useState({});
  const [isloading, setloading] = useState(true);
  const auth = getAuth();
  const goolgeProvider = new GoogleAuthProvider();

  const signInGoogle = () => {
    setloading(true);
    signInWithPopup(auth, goolgeProvider)
      .then((result) => {})
      .finally(() => {
        setloading(false);
      });
  };

  const logOut = () => {
    signOut(auth)
      .then((result) => {
        setuser({});
      })
      .finally(() => {
        setloading(false);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setuser(user);
      } else {
        setuser({});
      }
      setloading(false);
    });
  }, []);

  return {
    user,
    signInGoogle,
    isloading,
    logOut,
  };
};
export default useFirebase;
