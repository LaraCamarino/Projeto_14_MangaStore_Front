import styled from 'styled-components';
import axios from "axios";
import { useState } from "react";
import { ThreeDots } from 'react-loader-spinner';
import { useNavigate } from "react-router-dom";

import Navbar from '../components/sharedComponents/Navbar'

export default function SignInPage() {

	const navigate = useNavigate();

	const [loading, setLoading] = useState(false);
	const [search, setSearch] = useState("");
	const [mangas, setMangas] = useState("");

	function getSearch() {
		const URL = `https://project-14-manga-store.herokuapp.com/search/${search}`;

        setLoading(true);
        const promise = axios.get(URL);
        promise.then(res => {
			setMangas(res.data);
			setLoading(false);
        });
        promise.catch(err => {
            alert(err.response.data);
            setLoading(false);
        });
	}

	function showMangas() {
        if (loading) {
            return <ThreeDots width={51} height={13} color="#D1D1D4" />
        } 
		else if(mangas === ""){
			return <h2>Start Your Search</h2>
		}
        else if (!mangas) {
            return <h2>No Manga Found</h2>
        }
        else {
            return (mangas.map((m, index) => 
            <Item key={index} onClick={() => navigate(`/product/${m._id}`)}>
                <Image src={m.cover}></Image>
                <h1>{m.title}</h1>
                <h2>${m.price}</h2>
            </Item>))
        }
    }

	const callShowMangas = showMangas()

	return (
		<Page>
			<Navbar/>
			<Title>
				<ion-icon name="search-outline" onClick={getSearch}/>
				<Input type="text" placeholder="Find your manga" 
				value={search} onChange={(e) => setSearch( e.target.value )} ></Input>
            </Title>
			<Container>
			{callShowMangas}
			</Container>
		</Page>
	);
}

const Page = styled.div`
	min-height: 100vh;
	width: 100%;
	padding: 90px 0 0 0;
`;

const Title = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    h3{
        font-size: 34px;
        color: black; 
    }
	ion-icon{
		font-size: 34px;
		border-radius: 5px;
		color: #A4A4A4;
	}
	ion-icon:hover {
        background-color: #ddd;
        color: black;
        cursor: pointer;
    }
`;

const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
`;

const Input = styled.input`
	width: 30%;
	padding: 40px 10px 3px 24px;
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

	@media (max-width: 768px) {
		width: 55%;
	}
`
const Item = styled.div`
	padding: 10px;
	margin: 20px;
	border-radius: 15px;
	border: 1px solid #888888;
	box-shadow: 0px 2px 2px #888888;
	transition: .2s;
	width: 200px;
    flex-wrap: wrap;

	:hover {
		outline: none;
		border: 3px solid lightgray;
	}

	h1 {
        height: 75px;
		font-size: 25px;
		font-weight: 700;
		margin-top: 7px;
		margin-bottom: 15px;
	}
	h2 {
		font-size: 20px;
        text-align: end;
	}
`;

const Image = styled.img`
    width: 200px;
    height: 275px;
    border-radius: 6px;
    object-fit: cover;
`;