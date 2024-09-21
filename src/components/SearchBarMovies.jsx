import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import openAI from "../utils/openai";
const SearchBarMovies = () => {
  const selectedLang = useSelector((store) => store.config.language);

  // if (!selectedLang) return;
  const searchText = useRef(null);
  const handleSearchClick = async () => {
    const searchQuery =
      "Act as movie recommendation system and suggest some movies for the query" +
      searchText.current.value +
      "only give me names of 5 movies, comma separated like the example result given ahead. Example Result: gadar, Sholay, Don, Baazigar, Koi Mil Gaya";
    const searchResults = await openAI.chat.completions.create({
      messages: [{ role: "user", content: searchQuery }],
      model: "gpt-3.5-turbo",
    });
    console.log(searchResults.choices);
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          ref={searchText}
          className="p-2 m-4 col-span-9 outline-none"
          placeholder={lang[selectedLang].searchBarPlaceholder}
        />
        <button
          type="submit"
          className="bg-purple-700 hover:bg-purple-800 col-span-3 m-4 text-white px-4 py-3 rounded-lg"
          onClick={handleSearchClick}
        >
          {lang[selectedLang].search}
        </button>
      </form>
    </div>
  );
};

export default SearchBarMovies;
