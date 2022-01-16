import './App.css';

function App({recipes}) {
  return (
    <div className="App">
      <h1>Cook and Travel</h1>
      <h3>Our recipes will surprise you!</h3>
      {recipes.map((recipe, id) => {
        return(
          <div className="countryBlocks">
            <div className="countryName" key={id}>
              {recipe.fields.country}
            </div>
            <div>
              <img className="countryPic" src={recipe.fields.imageSrc} alt={recipe.fields.country} />
            </div>
          </div>
        )
      })}





    </div>
  );
}

export default App;
