/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import { recipies } from "../db/db";

const RecipieContext = createContext();

export const RecipieContextProvider = ({ children }) => {
  const recipiesFromLocal = localStorage.getItem("Recipies");
  const [allRecipies, setAllRecipies] = useState(
    JSON.parse(recipiesFromLocal) || recipies
  );
  const [selectedOption, setSelectedOption] = useState("name");
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    localStorage.setItem("Recipies", JSON.stringify(allRecipies));
  }, [allRecipies]);
  const filteredRecipies = allRecipies.filter((recipie) =>
    selectedOption === "ingredients"
      ? recipie.ingredients.some((ingredient) =>
          ingredient.includes(searchQuery)
        )
      : recipie[selectedOption]
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
  );
  const value = {
    allRecipies,
    setAllRecipies,
    filteredRecipies,
    selectedOption,
    setSelectedOption,
    searchQuery,
    setSearchQuery,
  };
  return (
    <RecipieContext.Provider value={value}>{children}</RecipieContext.Provider>
  );
};
export const useRecipieContext = () => useContext(RecipieContext);
