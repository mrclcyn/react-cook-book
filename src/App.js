import "./App.css";
import { Link } from "react-router-dom";

function App({ recipes, country, fields }) {
  // console.log(recipes);
  return (
    <div className="App">
      <h1 className="cook">Cook and Travel</h1>
      <h3 className="subTitle">Our recipes will surprise you!</h3>
      <div classNme="home">
        {recipes.map((recipe, id) => {
          return (

            <div className="homeItem" key={id}>
              <div className="homeItemContent">
                <Link to="/dishes" state={recipe.fields.country}>
                  <div>
                    <img
                      className="countryPic"
                      src={recipe.fields.imageSrc}
                      alt={recipe.fields.country}
                    />
                    <div className="countryName">
                      <div className="cntryNm">{recipe.fields.country}</div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
