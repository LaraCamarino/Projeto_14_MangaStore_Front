import styled from 'styled-components';
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from  'react-loader-spinner';

export default function AllMangas() {
    const navigate = useNavigate();

    const [mangas, setMangas] = useState(null);

    useEffect(() => {
        const URL = "https://project-14-manga-store.herokuapp.com/allMangas";
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
            <Item key={index} onClick={() => navigate(`/product/${m._id}`)}>
                <Image src={m.cover}></Image>
                <h1>{m.title}</h1>
                <h2>{m.price}</h2>
            </Item>))
        }
    }


    const callShowMangas = showMangas()

	return (
		<Page>
            <Title>
                <h3>See All Mangas</h3>  
            </Title>
			<Container>
            {callShowMangas}
			</Container>
		</Page>
	);
}

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
`;

const Page = styled.div`
	min-height: 100vh;
	width: 100%;
	margin-top: 50px;
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
`

const Image = styled.img`
    width: 200px;
    height: 275px;
    border-radius: 6px;
    object-fit: cover;
`
