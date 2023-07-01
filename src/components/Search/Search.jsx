import { useRecipieContext } from "../../context/recipie-context";
import "./Search.css";
export const Search = () => {
  const { searchQuery, setSearchQuery } = useRecipieContext();

  return (
    <input
      className="search"
      placeholder="Search"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  );
};
