import { Filter } from "../../components/Filter/Filter";
import { RecipieCard } from "../../components/RecipeCard/RecipeCard";
import { Search } from "../../components/Search/Search";
import { recipies } from "../../db/db";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import "./Home.css";
import { useState } from "react";
import { AddRecipeModal } from "../../components/AddRecipieModal/AddRecipeModal";
import { useRecipieContext } from "../../context/recipie-context";
export const Home = () => {
  const [showAddRecipeModal, setShowAddRecipeModal] = useState(false);
  const { filteredRecipies } = useRecipieContext();
  return (
    <div className="home-container">
      <div className="header">
        <Search />
        <Filter />
      </div>
      <div className="main">
        <h2>All Recipies:</h2>
        <div className="recipies-container">
          {filteredRecipies.map((recipie) => (
            <RecipieCard key={recipie.id} {...recipie} />
          ))}
          <div
            className="add-recipe-btn"
            onClick={() => setShowAddRecipeModal(true)}
          >
            <ControlPointIcon fontSize="large" />
          </div>
          {showAddRecipeModal && (
            <AddRecipeModal setShowAddRecipeModal={setShowAddRecipeModal} />
          )}
        </div>
      </div>
    </div>
  );
};
