import styled from 'styled-components';
import { useState, useContext } from "react";

import Navbar from "../components/sharedComponents/Navbar";
import UserContext from "../contexts/UserContext";

export default function CartPage() {
	const { shoppingCart, setShoppingCart } = useContext(UserContext);

	function ItemCart({ cover, title, price, number }) {
		return (
			<Item>
				<img src={cover} alt=" "></img>
				<h1 >{title}</h1>
				<h2>${price}</h2>
				<h3 onClick={() => deleteItem(number)}>X</h3>
			</Item >
		)
	}

	function assembleCart() {
		return (
			<div>
				{
					shoppingCart.map((item, index) => <ItemCart key={index} cover={item.cover} title={item.title} price={item.price} number={index} />)
				}
			</div>
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
			<TotalPrice>{totalSum.toFixed(2)}</TotalPrice>
		)
	}

	return (
		<Page>
			<Navbar />
			<Title>Your Cart</Title>
			{assembleCart()}
			{calculateTotalPrice()}
		</Page>
	);
}

const Page = styled.div`
	min-height: 100vh;
	width: 100%;
	margin-top: 90px;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Title = styled.h1`
	font-size: 34px;
	display: flex;
	justify-content: center;
	margin-bottom: 20px;
`

const Item = styled.div`
	margin-bottom: 10px;
	padding: 10px 0px;
	display: flex;
	align-items: center;
	border-bottom: 1px solid #787878;

	img {
		width: 60px;
		height: 85px;
		margin-right: 15px;
	}
	h1 {
		font-size: 20px;
		font-weight: 700;
		margin-right: 25px;
	}
	h2 {
		font-size: 17px;
		color: #787878;
		margin-right: 15px;
	}
	h3 {
		font-size: 15px;
		font-weight: 700;
	}
`

const TotalPrice = styled.div`
	right: 10px;

`