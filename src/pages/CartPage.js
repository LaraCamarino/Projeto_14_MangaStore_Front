import styled from 'styled-components';
import { useState, useContext } from "react";
import axios from "axios";

import Navbar from "../components/sharedComponents/Navbar";
import UserContext from "../contexts/UserContext";
import SadCart from "../assets/empty-cart.png"

export default function CartPage() {
	const { shoppingCart, setShoppingCart } = useContext(UserContext);

	function ItemCart({ cover, title, price, number }) {
		return (
			<Item>
				<div>
					<img src={cover} alt=" "></img>
					<h1 >{title}</h1>
				</div>
				<div>
					<h2>${price}</h2>
					<h3 onClick={() => deleteItem(number)}>X</h3>
				</div>
			</Item >
		)
	}

	function assembleCart() {
		return (
			<Items>
				{
					shoppingCart.map((item, index) => <ItemCart key={index} cover={item.cover} title={item.title} price={item.price} number={index} />)
				}
			</Items>
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
			<TotalPrice>
				<h1>Total</h1>
				<p>${totalSum.toFixed(2)}</p>
			</TotalPrice>

		)
	}

	function EmptyCart() {
		return (
			<Cart>
				<img src={SadCart} alt=" "></img>
				<h1>Your cart is empty.</h1>
			</Cart>
		)
	}

	function checkOut() {
		const token = localStorage.getItem("token");
		//const id = localStorage.getItem("userId");
				
		const URL = "https://project-14-manga-store.herokuapp.com/purchase";
		const config = {
			headers: {
				"Authorization": `Bearer ${token}`
			}
		};
		const promise = axios.post(URL, shoppingCart, config); 
		promise.then(res => {
			console.log("aprovada.")
            //navigate("/");
        });
		promise.catch(err => {
            console.log("nao foi.");
        });


	}

	return (
		<Page>
			<Navbar />
			<Title>Your Cart</Title>
			{
				shoppingCart.length === 0 ?
					<EmptyCart />
					:
					<>
						<Container>
							{assembleCart()}
							{calculateTotalPrice()}
						</Container>
						<Button onClick={() => checkOut()}>CheckOut</Button>
					</>
			}
		</Page>
	);
}

const Page = styled.div`
	min-height: 100vh;
	width: 100%;
	margin-top: 90px;
	box-sizing: border-box;
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
	align-items: center;
`;

const Title = styled.h1`
	font-size: 34px;
	display: flex;
	justify-content: center;
	margin-bottom: 20px;
`

const Container = styled.div`
	width: 870px;

	@media (max-width: 870px) {
		width: 100vw;
	}
`

const Items = styled.div`

`

const Item = styled.div`
	margin-bottom: 10px;
	padding: 10px 15px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid #787878;

	div {
		display: flex;
		align-items: center;
	}
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
		text-align: end;
	}
	h3 {
		font-size: 15px;
		font-weight: 700;
		text-align: end;
	}
`

const TotalPrice = styled.div`
	display: flex;
	justify-content: end;
	align-items: center;
	margin-top: 15px;
	padding-right: 30px;

	h1 {
		font-size: 20px;
		font-weight: 700;
		margin-right: 25px;
	}
	p {
		font-size: 20px;
		color: #03AC00;
	}
`

const Cart = styled.div`
	margin-top: 100px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	
	img {
		width: 325px;
		height: 175px;
	}
	h1 {
		color: #787878;
	}
`

const Button = styled.button`
	width: 25%;
    background-color: #2F2F2F;
	padding: 16px 20px;
	margin-top: 70px;
	border-radius: 5px;
	border: 1px solid #888888;
	box-shadow: 0px 2px 2px #888888;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 14px;
	font-weight: 700;
	color: #FFFF;
	text-transform: uppercase;
	cursor: pointer;
	transition: .2s;

	:active, :focus, :hover {
		outline: none;
		border-color: black;
	}

	@media (max-width: 768px) {
		width: 50%;
	}
`