import './App.css';
import HomeCard from './components/HomeCard';

function App({recipes}) {
  // console.log(recipes);
  return (
    <div className="App">
      <h1>Cook and Travel</h1>
      <h3>Our recipes will surprise you!</h3>
      <div className="container">
        { recipes.map((recipe, id) => {
          return(
          <HomeCard country={recipe.fields.country} fields={recipe.fields} key={id} />

        )})}
          
      </div>

    </div>

  );
}

export default App;
