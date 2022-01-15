import { AboutDish } from './AboutDish';
import {Link, useParams} from 'react-router-dom';

export const DishesDescMain = ({recipes}) => {
    const {recipesId} = useParams();
    console.log(recipesId)
    return(
        <div  style={{height: '500px'}}>
            <div>
                <img src="https://mrclcyn.github.io/cook-book/images/german-breakfast-1536x1024.jpg" />
            </div>
            <div>
                <div>
                    <img src="https://mrclcyn.github.io/cook-book/images/Germany.jpg" />
                </div>
                <div>
                    <Link to={`/dishes/${recipesId}`}>Read Recipe</Link>
                </div>
            </div>
            <div>
                    <AboutDish />
            </div>

        </div>

       
    )
}