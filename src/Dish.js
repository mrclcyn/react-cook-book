import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { client } from './client';

const Dish = () => {
    let navigate = useNavigate()

    const { recipesId } = useParams()

    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const fetchContentful = async () => {
        try {
            await client.getEntries()
                .then(response => {
                    setRecipes(response.items)
                    setLoading(false);

                })
        }
        catch (error) {
            console.log(error);
            setError(true)
        }

    }


    useEffect(() => {
        fetchContentful()

    }, [])

    console.log(recipes)


    if (loading) return <h1>Loading......</h1>
    if (error) return <h1>{error}</h1>
    const recipe = recipes.find((element) => element.fields.id === parseInt(recipesId));

    console.log(recipe.fields.title)
    return (

        <div>
            {recipe ? (
                <>
                    <h1>{recipe.fields.title}</h1>
                </>

            ) : (
                navigate("/dishes")
            )}
        </div>
    )
}

export default Dish;