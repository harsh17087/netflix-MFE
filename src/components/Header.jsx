
import { useDispatch, useSelector } from "react-redux";
import { netflixLogo, supportedLanguages, userIcon } from "../utils/constants";
import { toggleSearchView } from "../utils/searchSlice";
import { changeLanguage } from "../utils/configSlice";
const Header = () => {
  const dispatch=useDispatch()  
  const showSearchView = useSelector(store=>store.search.showSearchView);
  const handleLangChange=(e)=>{
    dispatch(changeLanguage(e.target.value))
  }
  
  const handleSearchClick=()=>{
      // Toggle Search functionality
      dispatch(toggleSearchView())
    }
  
    return (
    <div className="flex items-center justify-between w-screen absolute p-2 bg-gradient-to-b from-black z-10 bg-opacity-70">
      <img
        className="w-48 "
        src={netflixLogo}
        alt="netflix-logo"
      />
      <div className="flex p-2 items-center">
        {showSearchView && <select onChange={handleLangChange} className="outline-none hover:cursor-pointer p-2 bg-black rounded-md text-white">
          {
            supportedLanguages.map((lang)=><option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)
          }
        </select>}
        <button onClick={handleSearchClick} className="bg-blue-500 hover:bg-blue-800 text-white px-4 py-2 mx-4 rounded-lg">{showSearchView?"Browse":"Search"}</button>
        <img
          className="w-12 h-12"
          src={userIcon}
          alt="user-icon"
          
        />
        <button className="font-bold text-white">Sign Out</button>
      </div>
    </div>
  );
};

export default Header;
