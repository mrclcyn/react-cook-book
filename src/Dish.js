import { useParams, useNavigate } from "react-router-dom";


const Dish = ({ recipes }) => {

    let navigate = useNavigate()

    const { recipesId } = useParams()
    // console.log(recipesId)
// console.log(recipes)
    const recipe = recipes.find((element) => element.fields.id === parseInt(recipesId));

    console.log(recipe)

    return (
    
        <div>
            
            <h1>{recipe.fields.title}</h1>
                 
        </div>
    )
}

export default Dish;