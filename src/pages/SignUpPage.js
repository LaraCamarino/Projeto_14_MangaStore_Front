import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";

import Navbar from "../components/sharedComponents/Navbar";
import { ThreeDots } from 'react-loader-spinner';

export default function SignUpPage() {
	const navigate = useNavigate();

	const [loading, setLoading] = useState(false);
	const [user, setUser] = useState({
		name: "",
		email: "",
		password: "",
		confirmPassword: ""
	});

	function assembleForm() {
		if (!loading) {
			return (
				<form onSubmit={signUp}>
					<Input required type="text" placeholder="Name" value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} minLength={2} maxLength={25}></Input>
					<Input required type="email" placeholder="E-mail" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} ></Input>
					<Input required type="password" placeholder="Password" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} minLength={8}></Input>
					<Input required type="password" placeholder="Confirm Password" value={user.confirmPassword} onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })} minLength={8}></Input>
					<Button type="submit">Create Account</Button>
				</form>
			)
		}
		else {
			return (
				<form onSubmit={signUp}>
					<Input type="text" placeholder="Name" value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} disabled={true}></Input>
					<Input type="email" placeholder="E-mail" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} disabled={true}></Input>
					<Input type="password" placeholder="Password" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} disabled={true}></Input>
					<Input type="password" placeholder="Confirm Password" value={user.confirmPassword} onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })} ></Input>
					<Button type="submit" disabled={true}><ThreeDots width={51} height={13} color="#FFFFFF" /></Button>
				</form>
			)
		}
	}

	function signUp(event) {
		event.preventDefault();

		const URL = "https://project-14-manga-store.herokuapp.com/sign-up";

		setLoading(true);
		const promise = axios.post(URL, {
			name: user.name,
			email: user.email,
			password: user.password,
			confirmPassword: user.confirmPassword
		});
		promise.then(res => {
			navigate("/sign-in");
		});
		promise.catch(err => {
			alert(err.response.data);
			setUser({
				name: "",
				email: "",
				password: "",
				confirmPassword: ""
			});
			setLoading(false);
		});
	}


	return (
		<Page>
			<Navbar />
			<Title>SignUp</Title>
			{assembleForm()}
			<SignInLink to="/sign-in">
				Already have an account? Login now!
			</SignInLink>
		</Page>
	);
}

const Page = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	min-height: 100vh;
	width: 100%;
	margin-top: 90px;

	form {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
`

const Title = styled.h1`
	font-size: 34px;
	display: flex;
	justify-content: center;
	margin-bottom: 100px;
`

const Input = styled.input`
	width: 30%;
	padding: 10px 10px 3px 24px;
	margin-bottom: 35px;
    border: none;
	border-bottom: 2px solid #D1D1D4;
	background: none;
	transition: .2s;

    ::placeholder {
        color: #A4A4A4;
        font-size: 15px;
    }
	:active, :focus, :hover {
		outline: none;
		border-bottom-color: black;
	}
	:valid {
        border-color: #03AC00;
    }

	@media (max-width: 768px) {
		width: 55%;
	}
`

const Button = styled.button`
	width: 25%;
    background-color: #2F2F2F;
	padding: 16px 20px;
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

const SignInLink = styled(Link)`
    margin-top: 30px;
	font-size: 15px;
    font-weight: 700;
    color: #2F2F2F;
    text-decoration: none;
`