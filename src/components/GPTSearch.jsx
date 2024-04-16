import GPTSearchBar from "./GPTSearchBar";
import GPTSearchResults from "./GPTSearchResults";
const GPTSearch = () => {
  return ( 
    <div className="pt-16 w-screen bg-banner h-dvh">
      <GPTSearchBar />
      <GPTSearchResults />
    </div>
  );
};

export default GPTSearch;
