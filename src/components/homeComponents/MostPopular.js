import styled from 'styled-components';
import { Link } from "react-router-dom";

export default function MostPopular() {

	return (
        <Container >
            <Banner src={"https://cdn.wallpapersafari.com/59/38/kFVOmR.jpg"}></Banner>
            <Button > 
                <BuyNow to={'/product/62cb27bfc262fb717a892ca8'}> 
                  <h2>TOP 1 NOW</h2>
                  <h2>BUY IT</h2>
                </BuyNow>
            </Button>
        </Container>
	);
}

const Container = styled.div`
    width: 100%;
    height: 450px;
    position: relative;
`;

const Banner = styled.img`
    width: 100%;
    height: 450px;
    object-fit: cover;
`;

const Button = styled.div`
    position: absolute;
    top: 75%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 100px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
`;

const BuyNow = styled(Link)`
    height: 50px;
    width: 300px;
    background-color: #fff;
	font-weight: 500;
	font-size: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    text-decoration: none;
    h2{
        
        color: #6a7175;
    }
`;
