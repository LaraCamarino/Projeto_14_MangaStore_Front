import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";

import Navbar from "../components/sharedComponents/Navbar";
import { ThreeDots } from 'react-loader-spinner';

export default function SignInPage() {
	const navigate = useNavigate();

	const [loading, setLoading] = useState(false);
	const [login, setLogin] = useState({
		email: "",
		password: ""
	});

	function assembleForm() {
		if (!loading) {
			return (
				<form onSubmit={signIn}>
					<Input required type="email" placeholder="E-mail" value={login.email} onChange={(e) => setLogin({ ...login, email: e.target.value })} ></Input>
					<Input required type="password" placeholder="Senha" value={login.password} onChange={(e) => setLogin({ ...login, password: e.target.value })} minLength={8}></Input>
					<Button type="submit">Entrar</Button>
				</form>
			)
		}
		else {
			return (
				<form onSubmit={signIn}>
					<Input required type="email" placeholder="E-mail" value={login.email} onChange={(e) => setLogin({ ...login, email: e.target.value })} disabled={true} ></Input>
					<Input required type="password" placeholder="Senha" value={login.password} onChange={(e) => setLogin({ ...login, password: e.target.value })} disabled={true} ></Input>
					<Button type="submit" disabled={true}><ThreeDots width={51} height={13} color="#FFFFFF" /></Button>
				</form>
			)
		}
	}

	function signIn(event) {
		event.preventDefault();

		const URL = "https://project-14-manga-store.herokuapp.com/sign-in";

        setLoading(true);
        const promise = axios.post(URL, {
            email: login.email,
            password: login.password
        });
        promise.then(res => {
			localStorage.setItem("userId", (res.data.userId));
            localStorage.setItem("token", (res.data.token));
            navigate("/");
        });
        promise.catch(err => {
            alert(err.response.data);
            setLogin({
                email: "",
                password: ""
            });
            setLoading(false);
        });
	}

	return (
		<Page>
			<Navbar />
			<Title>SignIn</Title>
			{assembleForm()}
			<SignUpLink to="/sign-up">
				Ainda não tem uma conta? Cadastre-se aqui!
			</SignUpLink>
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
	margin-bottom: 150px;
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

const SignUpLink = styled(Link)`
    margin-top: 30px;
	font-size: 15px;
    font-weight: 700;
    color: #2F2F2F;
    text-decoration: none;
	text-align: center;
`