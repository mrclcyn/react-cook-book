import { Routes, Route } from 'react-router-dom';
import Dish from './Dish';
import Dishes from './Dishes';
import Home from './Home';



const AppRouter = () => {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dishes" element={<Dishes />} />
            <Route path="/dishes/:dish" element={<Dish />} />
        </Routes>
    )
}

export default AppRouter;