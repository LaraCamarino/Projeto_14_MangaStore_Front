import styled from 'styled-components';
import axios from "axios";
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect, useContext } from "react";
import { ThreeDots } from 'react-loader-spinner';

import Navbar from "../components/sharedComponents/Navbar";
import UserContext from "../contexts/UserContext";

export default function ProductPage() {
    const navigate = useNavigate();
    const { shoppingCart, setShoppingCart } = useContext(UserContext);
        
    const { mangaId } = useParams();
    const [manga, setManga] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    useEffect(() => {
        const URL = `https://project-14-manga-store.herokuapp.com/product/${mangaId}`;
        const promise = axios.get(URL);
        promise.then((res) => {
            setManga(res.data);
        });
    }, [])

    function showManga() {
        if (manga === null) {
            return <ThreeDots width={51} height={13} color="#FFFFFF" />
        }
        else if (manga === "") {
            return <></>
        }
        else {
            return (
                <Container>
                    <MainInfo>
                        <Image src={manga.cover}></Image>
                        <Text>
                            <h1>{manga.title}</h1>
                            <h2>${manga.price}</h2>
                            <Buttons>
                                <button onClick={() => {
                                    buyProduct();
                                    navigate("/cart")
                                    }}>Comprar agora</button>
                                <button onClick={() => buyProduct()}>Adicionar ao carrinho</button>
                            </Buttons>
                        </Text>
                    </MainInfo>
                    <AdicionalInfo>
                        <h1>Informações adicionais</h1>
                        <h2>{manga.synopsis}</h2>
                    </AdicionalInfo>
                </Container>
            )
        }
    }

    function buyProduct() {
        setShoppingCart([... shoppingCart, manga]);
    }

    return (
        <Page>
            <Navbar />
            {showManga()}
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
    flex-direction: column;
    align-items: center;
`

const MainInfo = styled.div`
    margin-bottom: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const Image = styled.img`
    width: 375px;
    height: 450px;
    object-fit: contain;
    margin-right: 30px;

    @media (max-width: 941px) {
        margin: 0px 0px 20px 0px;
    }
`

const Text = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 520px;

    h1 {
        font-size: 40px;
        font-weight: 700;
    }
    h2 {
        font-size: 30px;
        color: #787878;
    }

    @media (max-width: 941px) {
        padding: 15px;
        h2 {
            margin: 30px 0px;
        }
    }

`

const Buttons = styled.div`
    button {
        padding: 12px 15px;
        margin-right: 25px;
        background-color: #2F2F2F;
        border-radius: 5px;
        border: 1px solid #888888;
        box-shadow: 0px 2px 2px #888888;
        font-size: 14px;
        font-weight: 700;
        color: #FFFF;

        :active, :focus, :hover {
		outline: none;
		border-color: black;
        cursor: pointer;
	    }
    }
    
    @media (max-width: 941px) {
        display: flex;
        justify-content: space-between;

        button {
            margin-right: 0px;
        }
    }
`

const AdicionalInfo = styled.div`
    background-color: lightgray;
    padding: 20px 75px;
    text-align: justify;
    
    h1 {
        font-size: 16px;
        font-weight: 700;
        margin-bottom: 15px;
    }
    h2 {
        font-size: 13px;
        line-height: 15px;
    }

    @media (max-width: 941px) {
        padding: 20px 15px;
    }
`