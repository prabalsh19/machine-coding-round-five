import { useState } from "react";
import "./AddRecipieModal.css";
import { useRecipieContext } from "../../context/recipie-context";
export const AddRecipeModal = ({ setShowAddRecipeModal }) => {
  const [formData, setFormData] = useState({
    name: "",
    cuisineType: "",
    ingredients: "",
    instructions: "",
    img: "",
  });
  const { name, cuisineType, img } = formData;
  const { allRecipies, setAllRecipies } = useRecipieContext();

  const inputChangeHandler = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const addRecipieHandler = (e) => {
    e.preventDefault();
    setAllRecipies((prev) => [
      ...prev,
      {
        id: allRecipies.length + 1,
        name,
        cuisineType,
        img,
        ingredients: formData.ingredients.split(","),
        instructions: formData.instructions.split(","),
      },
    ]);

    setShowAddRecipeModal(false);
  };
  return (
    <form onSubmit={addRecipieHandler} autoComplete="off">
      <div className="add-recipie-modal">
        <h3>Add Recipie</h3>
        <input
          value={formData.name}
          type="text"
          placeholder="Name"
          onChange={(e) => inputChangeHandler(e)}
          name="name"
        />
        <input
          value={formData.cuisineType}
          type="text"
          placeholder="Cuisine Type"
          onChange={(e) => inputChangeHandler(e)}
          name="cuisineType"
        />
        <input
          value={formData.ingredients}
          type="text"
          placeholder="Ingredients"
          onChange={(e) => inputChangeHandler(e)}
          name="ingredients"
        />
        <span>Note: Enter Ingredients separted by commas {"(,)"}</span>
        <input
          value={formData.instructions}
          type="text"
          placeholder="Instructions"
          onChange={(e) => inputChangeHandler(e)}
          name="instructions"
        />
        <span>Note: Enter Instructions separted by commas {"(,)"}</span>
        <input
          value={formData.img}
          type="url"
          placeholder="Image URL"
          onChange={(e) => inputChangeHandler(e)}
          name="img"
        />
        <button className="add-btn">ADD</button>
      </div>
    </form>
  );
};
