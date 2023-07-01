import { Link, useParams } from "react-router-dom";
import "./RecipieDetails.css";
import { useRecipieContext } from "../../context/recipie-context";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
export const RecipieDetails = () => {
  const { id } = useParams();
  const { allRecipies } = useRecipieContext();
  const selectedRecipie = allRecipies.find((recipie) => +recipie.id === +id);
  const { name, img, cuisineType, ingredients, instructions } =
    selectedRecipie || true;
  return (
    <div className="recipie-details">
      {selectedRecipie.id && (
        <>
          <Link to={"/"}>
            <ArrowBackIcon />
          </Link>
          <h1>{name}</h1>
          <div className="details-card">
            <img src={img} alt="" />
            <div className="recipie-details">
              <b>Cuisine: {cuisineType}</b>
              <p>
                <b>Ingredients: </b>
                {ingredients.join(", ")}
              </p>
              <span>
                <b>Instruction: </b>
                <ol>
                  {instructions.map((instruction, index) => (
                    <li key={index}>{instruction}</li>
                  ))}
                </ol>
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
