import styled from 'styled-components';
import { useState, useContext } from "react";

import UserContext from "../contexts/UserContext";

export default function CartPage() {
	const { shoppingCart, setShoppingCart } = useContext(UserContext);

	function ItemCart({ title, number }) {
		return (
			<h1 onClick={() => deleteItem(number)}>{title}</h1>
		)
	}

	function assembleCart() {
		return (
			<>
				{
					shoppingCart.map((item, index) => <ItemCart key={index} title={item.title} id={item._id} number={index} />)
				}
			</>
		)
	}

	function deleteItem(number) {
		setShoppingCart(shoppingCart.filter((manga, index) => index !== number));
	}

	function calculateTotalPrice() {
		let totalSum = 0;
		shoppingCart.forEach(manga => {
			totalSum = totalSum + parseFloat(manga.price);
		});
		return (
			<h1>{totalSum.toFixed(2)}</h1>
		)
	}

	return (
		<Page>
			{assembleCart()}
			{calculateTotalPrice()}
		</Page>
	);
}

const Page = styled.div`
	min-height: 100vh;
	width: 100%;
	padding: 25px 24px 16px 24px;
	box-sizing: border-box;
`;