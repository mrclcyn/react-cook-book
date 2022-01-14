import { useParams, useNavigate } from "react-router-dom";


const Dish = ({ recipes }) => {

    let navigate = useNavigate()

    const { recipesId } = useParams()

    //const recipesId = recipes.find((element) => element.items.fields.id === recipesId);//

    //console.log(recipesId)//

    return (
    
        <div>
            {recipesId ? (
                    <>
                        <h1>{recipes.fields.title}</h1>
                    </>
                
            ) : (
            navigate("/dishes")
            )}
        </div>
    )
}

export default Dish;