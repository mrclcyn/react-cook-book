import { Routes, Route, Navigate } from 'react-router-dom';
import Dishes from './Dishes';
import Dish from './Dish';
import Header from './Header';
import Footer from './Footer';
import TermsAndCon from './Tac';
import App from './App';
import { useState, useEffect } from 'react';
import { client } from './client';



const AppRouter = () => {

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetchContentful()
    }, [])

    const fetchContentful = async () => {
        await client.getEntries()
            .then(response => setRecipes(response.items))
    }
    // console.log(recipe);

    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<App recipes={recipes} />} />
                <Route path="/dishes/" element={<Dishes recipes={recipes} />} />
                <Route path="/dishe/:recipesId" element={<Dish recipes={recipes} />} />
                <Route path="/Tac" element={<TermsAndCon />} />
            </Routes>
            <Footer />
        </>
    )
}

export default AppRouter;