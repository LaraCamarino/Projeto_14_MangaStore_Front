import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import HomePage from './pages/HomePage';
import GenrePage from './pages/GenrePage';
import CartPage from './pages/CartPage';
import SearchPage from './pages/SearchPage';
import ProductPage from './pages/ProductPage';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/sign-in" element={<SignInPage />} />
				<Route path="/sign-up" element={<SignUpPage />} />
				<Route path="/genre/:mangaGenre" element={<GenrePage />} />
				<Route path="/cart" element={<CartPage />} />
				<Route path="/search" element={<SearchPage />} />
				<Route path="/product/:mangaId" element={<ProductPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;