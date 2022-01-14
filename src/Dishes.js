import {Link} from 'react-router-dom'

const Dishes = ({ recipes }) => {
     

  
    console.log(recipes)

    return (
        <>
            
            {recipes.map((items) => {
                return (
                        <>
            
                            <Link to={`/dishes/${items.fields.id}`}>
                                <h1>
                                    {items.fields.title} 
                                </h1>
                            </Link>
                        
                        </>
                )   
            })}
        </>
    )
}

export default Dishes;