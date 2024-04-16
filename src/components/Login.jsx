/* eslint-disable no-unused-vars */
import Header from "./Header";
import { useState, useRef } from "react";
import { checkValidity } from "../utils/Validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase-config";
import { bannerImg, avatarImg } from "../utils/Constants";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const [isSignIn, setSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const userName = useRef(null);
  const password = useRef(null);
  const email = useRef(null);

  const handleValidation = () => {
    const errorMessage = checkValidity(
      email.current.value,
      password.current.value
    );
    if (errorMessage) {
      setErrorMessage(errorMessage);
      return;
    }
  

    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: avatarImg,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              // eslint-disable-next-line no-unused-vars
            })
            .catch((error) => {
              // An error occurred
              
              // ...
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setErrorMessage(errorCode + "-" + errorMessage);
          // navigation("/");
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
   
          // navigation("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // navigation("/");

          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignIn = () => {
    setSignIn(!isSignIn);
  };
  return (
    <div className="bg-banner">
      <Header />
      <div className="absolute w-full">
        <img src={bannerImg} alt="banner" />
      </div>
      <div className="flex justify-center items-center h-dvh ">
        <form
          onSubmit={(e) => e.preventDefault()}
          className=" absolute rounded  bg-black opacity-85  flex flex-col gap-5 p-5 py-6 sm:w-96 sm:h-96"
        >
          <h1 className=" sm:text-3xl text-xl text-white font-bold my-2">
            {isSignIn ? "Sign In" : "Sign up"}
          </h1>
          {!isSignIn && (
            <input
              ref={userName}
              className="w-full h-10 sm:p-5 p-2  text-white border rounded border-white bg-neutral-900"
              type="text"
              name="userName"
              id="name"
              placeholder="Full Name"
            />
          )}
          <input
            ref={email}
            className="w-full h-10 sm:p-5 p-2 border rounded border-white text-white  bg-neutral-900 "
            type="email"
            name="emailid"
            id="emailid"
            placeholder="Email Id"
          />
          <input
            ref={password}
            className="w-full h-10 sm:p-5 p-2  border rounded border-white text-white bg-neutral-900"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          <p className="text-red-500 font-medium ps-1">{errorMessage}</p>
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded"
            onClick={handleValidation}
          >
            {isSignIn ? "Sign In" : "Sign up"}
          </button>
          <div className="flex text-white gap-2">
            <h2 className=" text-gray-400 text-sm sm:text-lg">
              {isSignIn ? "New to NetflixGPT?" : "Already user"}{" "}
            </h2>
            <h2
              className=" cursor-pointer hover:underline text-sm sm:text-lg"
              onClick={toggleSignIn}
            >
              {isSignIn ? "Sign Up now" : "Sign In now"}
            </h2>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
