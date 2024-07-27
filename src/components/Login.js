import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";
import { addUser } from "../redux/userSlice";
import { PAGE_BACKGROUND_IMG, USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const validationMessage = checkValidData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(validationMessage);
    if (validationMessage) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
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
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMessage(`${errorCode}: ${errorMessage}`);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${errorCode}: ${errorMessage}`);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${errorCode}: ${errorMessage}`);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="h-screen object-cover"
          src={PAGE_BACKGROUND_IMG}
          alt="body-background"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-800 rounded-lg bg-opacity-50 "
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-800 rounded-lg bg-opacity-50 "
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-800 rounded-lg bg-opacity-50"
        />
        {errorMessage && (
          <p className="text-red-500 font-bold text-base">* {errorMessage}</p>
        )}
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={() => handleButtonClick()}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        {isSignInForm ? (
          <p className="py-4">
            New to Netfilx?{" "}
            <span
              className="font-bold cursor-pointer"
              onClick={() => toggleSignInForm()}
            >
              Sign Up Now.
            </span>
          </p>
        ) : (
          <p className="py-4">
            Already Registered.{" "}
            <span
              className="font-bold cursor-pointer"
              onClick={() => toggleSignInForm()}
            >
              Sign In Now.
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
