import { useRecipieContext } from "../../context/recipie-context";
import "./Filter.css";
export const Filter = () => {
  const { setSelectedOption } = useRecipieContext();
  const categoryHandler = (e) => {
    setSelectedOption(e.target.value);
  };
  return (
    <div className="filter">
      <b>Filters</b>
      <input
        onChange={(e) => categoryHandler(e)}
        type="radio"
        defaultChecked
        name="filter"
        value={"name"}
      />
      <label htmlFor="">Name</label>
      <input
        onChange={(e) => categoryHandler(e)}
        type="radio"
        name="filter"
        value={"ingredients"}
      />
      <label htmlFor="">Ingredients</label>
      <input
        onChange={(e) => categoryHandler(e)}
        type="radio"
        name="filter"
        value={"cuisineType"}
      />
      <label htmlFor="">Cuisine</label>
    </div>
  );
};
