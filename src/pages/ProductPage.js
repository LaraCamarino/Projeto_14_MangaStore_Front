import styled from 'styled-components';
import axios from "axios";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import { ThreeDots } from 'react-loader-spinner';

import Navbar from "../components/sharedComponents/Navbar";

export default function ProductPage() {
    const { mangaId } = useParams();

    const [manga, setManga] = useState(null);

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
                                <button>Comprar agora</button>
                                <button>Adicionar ao carrinho</button>
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
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 50px;
`

const Image = styled.img`
    width: 300px;
    height: 375px;
    border-radius: 6px;
    object-fit: cover;
    margin-right: 50px;
`

const Text = styled.div`
    height: 375px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h1 {
        font-size: 40px;
        font-weight: 700;
    }

`

const Buttons = styled.div`
    button {
        padding: 12px 15px;
        margin-right: 15px;
        background-color: #2F2F2F;
        border-radius: 5px;
        border: 1px solid #888888;
        box-shadow: 0px 2px 2px #888888;
        font-size: 14px;
        font-weight: 700;
        color: #FFFF;
    }
    :active, :focus, :hover {
		outline: none;
		border-color: black;
	}
`

const AdicionalInfo = styled.div`
    background-color: lightgray;
    padding: 12px 15px;

    h1 {
        font-size: 16px;
        font-weight: 700;
        margin-bottom: 15px;
    }
`

