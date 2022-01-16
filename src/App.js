import './App.css';
import { Link } from 'react-router-dom';

function App({recipes, country, fields}) {
  // console.log(recipes);
  return (
    <div className="App">
      <h1>Cook and Travel</h1>
      <h3>Our recipes will surprise you!</h3>
      <div >
        { recipes.map((recipe, id) => {
          return(
            
            
            <div className="homeItem" key={id}>
            <Link to="/dishes" state={recipe.fields.country}>
              <div className="countryName">
                {recipe.fields.country}
              </div>
              <div>
                <img className="countryPic" src={recipe.fields.imageSrc} alt={recipe.fields.country} />
              </div>
              </Link>
            </div>

        )})}
          
      </div>

    </div>

  );
}

export default App;
