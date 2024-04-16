import { useRef } from "react";
import openai from "../utils/openai";

const GPTSearchBar = () => {
  const searchText = useRef(null);

  const searchClick = async () => {
    searchText.current.value;

    const GPTQuery =
      "Act as a movie recommendation system and suggest some movies for the query :" +
      searchText.current.value +
      ".only give me name of  movies, comma separated like the example result given ahead. Example Don, Leo,Vikram, vada chennai and Red ";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: GPTQuery }],
      model: "gpt-3.5-turbo",
    });

    gptResults;
  };

  return (
    <div>
      <form className="sm:w-1/2 w-full " onSubmit={(e) => e.preventDefault()}>
        <input
          ref={searchText}
          type="text"
          name="search"
          id="search"
          placeholder="hey!,what would you like to watch today"
          className="sm:p-2 sm:m-2 sm:w-2/3 p-1.5 w-11/12  ms-3 text-sm sm:px-16 border-2 border-black active:border-red-500 "
        />
        <button
          type="submit"
          className="sm:p-2 sm:m-2 sm:ms-0 mt-1 py-0 sm:px-5 rounded-sm px-7 ms-[36.5%] border border-1 bg-red-500 text-white"
          onClick={searchClick}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
