import styled from 'styled-components';

import Navbar from "../components/sharedComponents/Navbar";

export default function DepositPage() {
	return (
		<Page>
			<Navbar />
			<Container>
				<Item>
					<Image src={"https://legendofthegoldenwind.files.wordpress.com/2019/01/yellowcover.jpg"}></Image>
					<h1>Title</h1>
					<h2>Price</h2>
				</Item>
				<Item>
					<Image src={"https://legendofthegoldenwind.files.wordpress.com/2019/01/yellowcover.jpg"}></Image>
					<h1>Title</h1>
					<h2>Price</h2>
				</Item>
				<Item>
					<Image src={"https://legendofthegoldenwind.files.wordpress.com/2019/01/yellowcover.jpg"}></Image>
					<h1>Title</h1>
					<h2>Price</h2>
				</Item>
				<Item>
					<Image src={"https://legendofthegoldenwind.files.wordpress.com/2019/01/yellowcover.jpg"}></Image>
					<h1>Title</h1>
					<h2>Price</h2>
				</Item>
				<Item>
					<Image src={"https://legendofthegoldenwind.files.wordpress.com/2019/01/yellowcover.jpg"}></Image>
					<h1>Title</h1>
					<h2>Price</h2>
				</Item>
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