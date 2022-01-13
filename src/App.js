
function App({recipes}) {
  console.log(recipes);
  return (
    <div className="App">
      <h1>Cook and Travel</h1>
      <h3>Our recepies will surprise you!</h3>
      {recipes.map((recipe, id) => {
        return(
          <div className="homeCountryBlocks" key={id}>
            {recipe.fields.country}
            <img className="homeCountryDishes" src={recipe.fields.imageSrc} alt={recipe.fields.country} />
          </div>
        )
      })}





    </div>
  );
}

export default App;
