import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Dishes from './Dishes';
import Dish from './Dish';



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