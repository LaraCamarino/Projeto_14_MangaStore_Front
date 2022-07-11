import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import Menu from '../sharedComponents/Menu';
import UserContext from "../../contexts/UserContext.js";

export default function Navbar() {
    const navigate = useNavigate();
    const [isMenuHidden, setIsMenuHidden] = useState(true);
    const { shoppingCart, setShoppingCart } = useContext(UserContext);

    function inCartNumber () {
        if(shoppingCart.length === 0){
            return (<></>)
        }
        else{
            return (<Boll><p>{shoppingCart.length}</p></Boll>)
        }
    }

    const callInCartNumber = inCartNumber();

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
                <Incart>{callInCartNumber}</Incart>
                
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
    position: relative;
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

const Incart = styled.div`
    position: absolute;
    bottom: 12px;
    right:  -4px;
    z-index: 1;
	display: flex;
    align-items: center;
    width:16px;
	height: 16px;
`;

const Boll = styled.div`
	display: flex;
    align-items: center;
    justify-content: center;

    width:16px;
	height: 16px;
    border-radius: 20px;
    background-color: orange;
    p{
        font-size: 12px;
        font-weight: 500;
        color: white;
    }
`;