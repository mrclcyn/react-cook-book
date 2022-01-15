import {DishesCardMain} from './components/DishesCardMain';
import {DishesDescMain} from './components/DishesDescMain';



import { Link, useLocation } from 'react-router-dom'




const Dishes = ({recipes}) => {

   const location = useLocation();
   const country = location.state;


    console.log(country)

    
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <>                
                            <DishesCardMain recipes={recipes} country={country}  />
                            

                        </>
                            
                       

                    </div>
                    <div className="col-8" >

                    <DishesDescMain recipes={recipes}  />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dishes;