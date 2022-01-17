import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { client } from "./client";
import "./Dish.css";

const Dish = () => {
  let navigate = useNavigate();

  const { recipesId } = useParams();
  // console.log(recipesId)
  // console.log(recipes)

  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  //this length is for increasing the length of ingredients when we map thru array
  //it will then be used to pass to fetch quantity array
  let lengthIngredient = -1;

  //making API call again, bcz when refreshing the page, props where gone
  //so to maintain the data, fetching API
  const fetchContentful = async () => {
    try {
      await client.getEntries().then((response) => {
        setRecipes(response.items);
        setLoading(false);
      });
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  useEffect(() => {
    fetchContentful();
  }, []);

  //if loading is true then data is not available yet...this statement will render the text inside it
  //and return back without executing next line of code
  //this is same with error message if statement
  if (loading) return <h1>Loading......</h1>;
  if (error) return <h1>{error}</h1>;
  const recipe = recipes.find(
    (element) => element.fields.id === parseInt(recipesId)
  );

  //to show minutes if cooking type = 0:55
  //if cooking time = 1:55,this will show Hours
  const hour = recipe.fields.cookingTime.split(":");
  let timeType = "";
  parseInt(hour[0]) === 0 ? (timeType = "Minutes") : (timeType = "Hours");

  console.log(recipe.fields.title);
  return (
    <div>
      {recipe ? (
        <>
          <div className="container">
            <div class="row mt-5 mb-5">
              <div class="col-md-4">
                <h2>
                  {recipe.fields.title}
                  <br />
                  <span style={{ fontSize: "18px" }}>
                    {recipe.fields.originalTitle}
                  </span>
                </h2>
                <h4>
                  ~{recipe.fields.cookingTime} {timeType}
                </h4>
                <embed src={recipe.fields.imageSrc} style={{}}></embed>
              </div>
              <div class="col-md-4">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th>Ingredients</th>
                      <th>Amount for 2</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recipe.fields.ingredients.map((ingredient) => {
                      lengthIngredient = lengthIngredient + 1;
                      return (
                        <>
                          <tr classNAme="tableRow">
                            <td>{ingredient}</td>
                            <td>{recipe.fields.quantity[lengthIngredient]}</td>
                          </tr>
                        </>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              <div className="col-md-4" style={{ textAlign: "justify" }}>
                {recipe.fields.recipe.content.map((recip) => {
                  return <div>{recip.content[0].value};</div>;
                })}
              </div>
            </div>
          </div>
        </>
      ) : (
        navigate("/dishes")
      )}
    </div>
  );
};

export default Dish;
