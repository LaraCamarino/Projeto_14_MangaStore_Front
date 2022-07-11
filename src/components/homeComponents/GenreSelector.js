import styled from 'styled-components';
import { Link } from "react-router-dom";

export default function MostPopular() {

	return (
        <>
        <Title>
            <h3>Shop by Category</h3>  
        </Title>
        <Container >
            
            <Genre to="/genre/Shounen">
                <Banner src={"https://pbs.twimg.com/profile_images/1412076605795704834/xAAu3BzR_400x400.jpg"}></Banner>
                <ShouenenLink to="/genre/Shounen">Shounen</ShouenenLink>
            </Genre>
            <Genre to="/genre/Isekai">
                <Banner src={"https://64.media.tumblr.com/7483a1408af4dfc8110a50b8feab4407/13470987156174de-97/s1280x1920/b8538be416a6332c5e6108ae1633f07643ca9656.png"}></Banner>
                <IsekaiLink to="/genre/Isekai">Isekai</IsekaiLink>
            </Genre>
            <Genre to="/genre/Romance">
                <Banner src={"https://i.redd.it/finyw56gjgp81.jpg"}></Banner>
                <RomanceLink to="/genre/Romance">Romance</RomanceLink>
            </Genre>
            <Genre to="/genre/Seinen">
                <Banner src={"https://designe.com.br/wp-content/uploads/2022/02/vagabond-manga-seinen-780x470.jpg.webp"}></Banner>
                <SeinenLink >Seinen</SeinenLink>
            </Genre>
        </Container>
        </>
	);
}

const Title = styled.div`
    width: 100%;
    padding: 40px 0 0 0;
    display: flex;
    align-items: center;
    justify-content: center;
    h3{
        font-size: 34px;
        color: black;  
    }
`;

const Container = styled.div`
    width: 100%;
    padding: 30px 0;
    gap: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    h3{
        color: black;  
    }
`;
const Genre = styled(Link)`
text-decoration: none;
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`;

const Banner = styled.img`
    width: 156px;
    height: 175px;
    border-radius: 15px;
    object-fit: cover;
`;


const ShouenenLink = styled.div`
    text-decoration: none;
	margin: 36px 0 30px 0;
	font-weight: 700;
	font-size: 15px;
	color: #5089a3;
`;

const IsekaiLink = styled.div`
text-decoration: none;
	margin: 30px 0 30px 0;
	font-weight: 700;
	font-size: 15px;
	color: #60a672;

`;

const RomanceLink = styled.div`
text-decoration: none;
	margin: 30px 0 30px 0;
	font-weight: 700;
	font-size: 15px;
	color: #eb596a;

`;

const SeinenLink = styled.div`
text-decoration: none;
	margin: 30px 0 30px 0;
	font-weight: 700;
	font-size: 15px;
	color: #b06464;

`;