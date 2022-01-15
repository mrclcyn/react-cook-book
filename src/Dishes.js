import { Link, useLocation } from "react-router-dom";

const Dishes = ({ recipes }) => {
  const location = useLocation();

  const country = location.state;
  const countrysRecipe = recipes.filter(
    (recipe) => recipe.fields.country === country
  );

  console.log(countrysRecipe);

  return (
    <div>
      <div>
        <div>
          <div>
            <div>
              <a href="#list-home">
                <img
                  src={countrysRecipe[0].fields.image.fields.file.url}
                  alt={countrysRecipe[0].fields.country}
                />
                <div>
                  <h3>{countrysRecipe[0].fields.nationality}</h3>
                  <h4>{countrysRecipe[0].fields.tags}</h4>
                </div>
              </a>
            </div>
          </div>
          <div>
            <div>
              <div>
                <img
                  src="https://mrclcyn.github.io/cook-book/images/german-breakfast-1536x1024.jpg"
                  alt="food"
                />
              </div>
              <div>
                <div>
                  <img
                    src="https://mrclcyn.github.io/cook-book/images/Germany.jpg"
                    alt="food"
                  />
                </div>
                <div>
                  <Link to={`/dishes/${countrysRecipe[0].fields.id}`}>
                    Read Recipe
                  </Link>
                </div>
              </div>
              <div>
                <p>
                  Rinderbraten is a dish that you will usually get served when
                  visiting the grand parents or on a special occasion.
                </p>
                <p>
                  To prepare a Rinderbraten you will need some high quality
                  piece of beef and a lot of time.
                </p>
                <p>
                  The meat is put in the oven and cooked slowly in its juices
                  for hours and hours.
                </p>
                <p>
                  But the slow cooking in low heat will make the meat incredibly
                  soft and tender.
                </p>
                <p>
                  Traditionally Spätzle are a great side dish for Rinderbraten
                  as the perfectly soak up all the juices and the sauce to add
                  for even more flavour.
                </p>{" "}
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dishes;
