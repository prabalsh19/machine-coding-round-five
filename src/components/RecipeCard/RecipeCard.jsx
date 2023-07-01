/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import "./RecipeCard.css";
import { useRecipieContext } from "../../context/recipie-context";
export const RecipieCard = ({ id, img, name, cuisineType }) => {
  const { setAllRecipies } = useRecipieContext();
  const deleteRecipieHandler = (id) => {
    setAllRecipies((prev) => prev.filter((recipie) => recipie.id !== id));
  };
  return (
    <div className="recipie-card">
      <div className="actions">
        <span>
          <EditIcon />
        </span>
        <span onClick={() => deleteRecipieHandler(id)}>
          <DeleteIcon />
        </span>
      </div>
      <Link to={`/details/${id}`}>
        <img src={img} alt="" />
        <h2>{name}</h2>
        <div className="info">
          <b>Cuisine Type</b>
          <span>{cuisineType}</span>
        </div>
        <div className="info">
          <b>Ingredients</b>
          <span>See Recipe {">"}</span>
        </div>
        <div className="info">
          <b>Cuisine Type</b>
          <span>See Recipe {">"}</span>
        </div>
      </Link>
    </div>
  );
};
