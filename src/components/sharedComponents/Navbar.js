import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Menu from '../sharedComponents/Menu';

export default function Logo() {
    const navigate = useNavigate();
    const [isMenuHidden, setIsMenuHidden] = useState(true);

	return (
		<Container>
            <LeftSide>
                <ion-icon name="menu-outline" 
                onClick={()=>{setIsMenuHidden(!isMenuHidden) }}/>
                <Menu isMenuHidden={isMenuHidden} setIsMenuHidden={setIsMenuHidden}></Menu>
            </LeftSide>
			    <BrandLogo onClick={()=>{navigate("/")}}>
                    <img src="https://pt.ffonts.net/index.php?p=refresh&id=38427&text=MangaStore" alt=" "></img>
                </BrandLogo>
            <RightSide>
                <ion-icon name="search-outline" onClick={()=>{navigate("/search") }}/>
                <ion-icon name="cart-outline" onClick={()=>{navigate("/cart") }}/>
            </RightSide>
		</Container>
	);
}



const Container = styled.div`
	display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
	height: 60px;
    padding: 0  20px;
    background-color: #fff;
    position:fixed;
    top:0px;
    z-index: 3;
    box-sizing: border-box;
    box-shadow: 0px 5px 8px #888888;

    h1:hover {
        color: black;
        cursor: pointer;
    }

    ion-icon {
		font-size: 22px;
        border-radius: 5px;
	}
    ion-icon:hover {
        background-color: #ddd;
        color: black;
        cursor: pointer;
    }
`;

const BrandLogo = styled.h1`
	font-family: 'Montserrat', sans-serif;
	font-size: 20px;
    font-weight: 600;
	color: #000;

    img {
        width: 250px;
        height: 60px;
    }
`;

const RightSide = styled.div`
	display: flex;
    align-items: center;
    width:52px;
	height: 60px;
    gap: 8px;
`;

const LeftSide = styled.div`
	display: flex;
    align-items: center;
    width:52px;
	height: 60px;
`;
