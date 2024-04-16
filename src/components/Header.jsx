/* eslint-disable no-unused-vars */
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase-config";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaRegCaretSquareDown } from "react-icons/fa";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { logoImg, avatarImg } from "../utils/Constants";
import { toggleGPT } from "../utils/gptSlice";

const Header = () => {
  const [display, setDisplay] = useState(false);
  const hometoggle=useSelector((store)=>store.gpt.showGPT)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
       
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => {
      unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleSignOut = () => {
    signOut(auth)
      .then(() => {
      })
      .catch((error) => {

      });
  };
  const handleToggle=()=>{
    dispatch(toggleGPT());
  }
  return (
    <div className="flex justify-between absolute w-full h-16 bg-gradient-to-b from-black md:bg-black ">
      <img src={logoImg} alt="logo" className="h-12 sm:h-16" />
      <div className="flex flex-row py-2 mr-5">
        <div className="relative flex gap-2">
          <button className="sm:m-2 text-xs px-2 my-3 -translate-y-2  sm:-translate-y-0 sm:text-normal font-bold  sm:px-4 bg-purple-500 text-white rounded-sm" onClick={handleToggle}>
            { !hometoggle ? "GPT SEARCH" :"HOME"}
          </button>
          <img
            className="sm:h-10 sm:w-10 h-8 w-8 cursor-pointer"
            alt="avatar"
            src={avatarImg}
          />

          <FaRegCaretSquareDown
            onClick={() => setDisplay(!display)}
            className="cursor-pointer mt-5 h-3 w-3 sm:h-4 sm:w-4 bg-white"
          />

          {display && (
            <div className="absolute bg-white top-12 right-8 rounded shadow-md p-2 font-semibold">
              <button
                className="text-sm w-max hover:underline hover:decoration-2 text-red-500"
                onClick={toggleSignOut}
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
