import styled from 'styled-components';
import { Link } from "react-router-dom";

export default function Menu({isMenuHidden, setIsMenuHidden}) {

	return (
        <>
            <Container status={isMenuHidden}>
                <DivTitle>
                    <MenuTitle>Genres:</MenuTitle>
                </DivTitle>
                <ShouenenLink to="/genre/Shounen">Shounen</ShouenenLink>
                <Line></Line>
                <IsekaiLink to="/genre/Isekai">Isekai</IsekaiLink>
                <Line></Line>
                <RomanceLink to="/genre/Romance">Romance</RomanceLink>
                <Line></Line>
                <SeinenLink to="/genre/Seinen">Seinen</SeinenLink>
                <Line></Line>
                <Botton>
                    <LoginLink to="/sign-in">Login</LoginLink>
                    <SignUpLink to="/sign-up">SingUp</SignUpLink>
                </Botton>
            </Container>
            <Blur status={isMenuHidden} 
            onClick={()=>{setIsMenuHidden(!isMenuHidden) }}>

            </Blur>
        </>
	);
}


const Blur = styled.div`
    display: ${props =>  props.status ? "none" : ""};
    width: 100%;
	min-height: 100vh;
    height: 100%;
    background-color: #000;
    opacity: 0.5;
    position:fixed;
    top:0px;
    z-index: 1;
`;


const Container = styled.div`
display: ${props =>  props.status ? "none" : "flex"};
flex-direction: column;
width: 70%;
min-height: 100vh;
height: 100%;
padding: 40px  20px;
background-color: #fff;
position:fixed;
top:0px;
left:0;
z-index: 2;
box-sizing: border-box;
box-shadow: 5px 5px 8px #888888;
`;

const DivTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #000;
    width: 100px;
    height: 40px;
    border-radius: 5px;
`;

const MenuTitle = styled.h3`
	font-family: 'Montserrat', sans-serif;
	font-size: 20px;
    font-weight: 500;
	color: #fff;
`;

const Line = styled.div`
    background-color: #6a7175;
    width: 100%;
    height: 1px;
    border-radius: 5px;
`;

const ShouenenLink = styled(Link)`
	margin: 36px 0 30px 0;
	font-weight: 700;
	font-size: 15px;
	color: #5089a3;
`;

const IsekaiLink = styled(Link)`
	margin: 30px 0 30px 0;
	font-weight: 700;
	font-size: 15px;
	color: #60a672;

`;

const RomanceLink = styled(Link)`
	margin: 30px 0 30px 0;
	font-weight: 700;
	font-size: 15px;
	color: #eb596a;

`;

const SeinenLink = styled(Link)`
	margin: 30px 0 30px 0;
	font-weight: 700;
	font-size: 15px;
	color: #b06464;

`;

const Botton = styled.div`
    width: 100%;
    height: 60px;
    position: absolute;
    bottom: 20px;
    left: 0px;
    display: flex;
    align-items: center;
    padding: 0 20px;
    justify-content: space-between;
    box-sizing: border-box;
`;

const LoginLink = styled(Link)`
	font-weight: 700;
	font-size: 15px;
	color: #000;
`;
const SignUpLink = styled(Link)`
	font-weight: 700;
	font-size: 15px;
	color: #000;
`;