import { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../redux/userSlice";
import { LANGUAGE_LIST, LOGO } from "../utils/constants";
import { toggleGptSearchView } from "../redux/gptSlice";
import { changeLanguage } from "../redux/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useEffect(() => {
    const authStateChange = onAuthStateChanged(auth, (user) => {
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

    return () => authStateChange();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageSelection = (event) => {
    event.preventDefault();
    dispatch(changeLanguage(event.target.value));
  };

  return (
    <div className="absolute w-full md:px-36 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="logo" />
      {user && (
        <div className="flex p-2 justify-between">
          {showGptSearch && (
            <select
              className="p-2 m-2 bg-gray-900 text-white"
              onChange={(e) => handleLanguageSelection(e)}
            >
              {LANGUAGE_LIST.map((lang) => (
                <option key={lang.value} value={lang.value}>
                  {lang.label}
                </option>
              ))}
            </select>
          )}
          <button
            className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg"
            onClick={() => handleGptSearchClick()}
          >
            {!showGptSearch ? "GPT Search" : "Homepage"}
          </button>
          <img
            className="hidden md:block w-12 h-12 rounded-full"
            alt="userIcon"
            src={user?.photoURL}
          />
          <button
            className="font-bold text-white cursor-pointer"
            onClick={() => handleSignOut()}
          >
            ╰┈➤
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
