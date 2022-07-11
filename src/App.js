import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from "react";

import UserContext from "./contexts/UserContext";

import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import HomePage from './pages/HomePage';
import GenrePage from './pages/GenrePage';
import CartPage from './pages/CartPage';
import SearchPage from './pages/SearchPage';
import ProductPage from './pages/ProductPage';
import CheckOutPage from "./pages/CheckOutPage";

function App() {
	
	const cartLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");
	const [shoppingCart, setShoppingCart] = useState(cartLocalStorage);

	useEffect(() => {
		localStorage.setItem("cart", JSON.stringify(shoppingCart));
	}, [shoppingCart]);

	return (
		<UserContext.Provider value={{ shoppingCart, setShoppingCart }}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/sign-in" element={<SignInPage />} />
					<Route path="/sign-up" element={<SignUpPage />} />
					<Route path="/genre/:mangaGenre" element={<GenrePage />} />
					<Route path="/cart" element={<CartPage />} />
					<Route path="/search" element={<SearchPage />} />
					<Route path="/product/:mangaId" element={<ProductPage />} />
					<Route path="/checkout" element={<CheckOutPage />} />
				</Routes>
			</BrowserRouter>
		</UserContext.Provider>
	);
}

export default App;