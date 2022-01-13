import { Routes, Route } from 'react-router-dom';
import Dishes from './Dishes';
import Dish from './Dish';
import NavBar from './NavBar';
import Footer from './Footer';
import App from './App';
import { useState, useEffect } from 'react';
import { client } from './client';



const AppRouter = () => {

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetchContentful()
    }, [])

    const fetchContentful = () => {
        client.getEntries()
        .then(response => setRecipes(response.items))
    }
    // console.log(recipes);

    return(
        <>
        <NavBar recipes={recipes} />
        <Routes>
            <Route path="/" element={<App recipes={recipes} />} />
            <Route path="/dishes" element={<Dishes recipes={recipes} />} />
            <Route path="/dishes/:dish" element={<Dish recipes={recipes} />} />
        </Routes>
        <Footer />
        </>
    )
}

export default AppRouter;