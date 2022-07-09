import styled from 'styled-components';
import axios from "axios";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import { ThreeDots } from  'react-loader-spinner';

import Navbar from "../components/sharedComponents/Navbar";

export default function DepositPage() {

	const {mangaGenre} = useParams();
    const [mangas, setMangas] = useState(null);


    useEffect(() => {
        const URL = `https://project-14-manga-store.herokuapp.com/genreMangas/${mangaGenre}`;
        const promise = axios.get(URL);
        promise.then((res)=> {
            setMangas(res.data);
        });
    }, [])

    function showMangas() {
        if (mangas === null) {
            return <ThreeDots width={51} height={13} color="#FFFFFF" />
        } 
        else if (mangas === "") {
            return <></>
        }
        else {
            return (mangas.map((m, index) => 
            <Item key={index}>
                <Image src={m.cover}></Image>
                <h1>{m.title}</h1>
                <h2>{m.price}</h2>
            </Item>))
        }
    }


    const callShowMangas = showMangas()

	return (
		<Page>
			<Navbar />

			<Container>
            {callShowMangas}
			</Container>
		</Page>
	);
}

const Page = styled.div`
	min-height: 100vh;
	width: 100%;
	margin-top: 90px;
`;

const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
`

const Item = styled.div`
	padding: 10px;
	margin: 20px;
	border-radius: 15px;
	border: 1px solid #888888;
	box-shadow: 0px 2px 2px #888888;
	transition: .2s;

	:hover {
		outline: none;
		border: 3px solid lightgray;
	}

	h1 {
		font-size: 25px;
		font-weight: 700;
		margin-top: 7px;
		margin-bottom: 15px;
	}
	h2 {
		font-size: 15px;

	}
`

const Image = styled.img`
    width: 200px;
    height: 275px;
    border-radius: 6px;
    object-fit: cover;
`