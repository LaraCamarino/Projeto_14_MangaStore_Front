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
				<>
					<Input type="text" placeholder="Nome" value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} ></Input>
					<Input type="email" placeholder="E-mail" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} ></Input>
					<Input type="password" placeholder="Senha" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} ></Input>
					<Input type="password" placeholder="Confirme a senha" value={user.confirmPassword} onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })} ></Input>
					<Button onClick={signUp}>Cadastrar</Button>
				</>
			)
		}
		else {
			return (
				<>
					<Input type="text" placeholder="Nome" value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} disabled={true}></Input>
					<Input type="email" placeholder="E-mail" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} disabled={true}></Input>
					<Input type="password" placeholder="Senha" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} disabled={true}></Input>
					<Input type="password" placeholder="Confirme a senha" value={user.confirmPassword} onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })} ></Input>
					<Button onClick={signUp} disabled={true}><ThreeDots width={51} height={13} color="#FFFFFF" /></Button>
				</>
			)
		}
	}

	function signUp() {
		console.log(user);
		setLoading(true);
	}


	return (
		<Page>
			<Navbar />
			{assembleForm()}
			<SignInLink to="/sign-in">
				Já tem uma conta? Entre agora!
			</SignInLink>
		</Page>
	);
}

const Page = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	width: 100%;
`;

const Input = styled.input`
	width: 75%;
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
`
const Button = styled.button`
	width: 75%;
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
`

const SignInLink = styled(Link)`
    margin-top: 30px;
	font-size: 15px;
    font-weight: 700;
    color: #2F2F2F;
    text-decoration: none;
`