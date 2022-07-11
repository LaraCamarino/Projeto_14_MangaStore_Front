import styled from 'styled-components';
import { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";

import Navbar from "../components/sharedComponents/Navbar";
import UserContext from "../contexts/UserContext";
import { ThreeDots } from 'react-loader-spinner';
import { errorAlert } from "../components/sharedComponents/Alerts";

export default function CheckOutPage() {
    const navigate = useNavigate();

    const { shoppingCart, setShoppingCart } = useContext(UserContext);
    const [loading, setLoading] = useState(false);
    const [purchaseDetails, setPurchaseDetails] = useState({
        firstName: "",
        lastName: "",
        email: "",
        cardNumber: "",
        expirationDate: "",
        cvc: ""
    });

    function finalizeOrder(event) {
        event.preventDefault();

        const token = localStorage.getItem("token");
        const purchase = {
            purchaseDetails: purchaseDetails,
            productsDetails: shoppingCart
        };

        setLoading(true);
        const URL = "https://project-14-manga-store.herokuapp.com/purchase";
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        };
        const promise = axios.post(URL, purchase, config);
        promise.then(res => {
            localStorage.removeItem("cart");
            setShoppingCart([]);
            Swal.fire({
                title: "Thank You!",
                text: "Your purchase was successful.",
                icon: "success",
                confirmButtonText: "OK",
				confirmButtonColor: "#2F2F2F"
              }).then(() => navigate("/"));
        });
        promise.catch(err => {
            errorAlert();
            console.log(err.response.data);
            setLoading(false);
        });
    }

    function assembleForm() {
        if (!loading) {
            return (
                <form onSubmit={finalizeOrder}>
                    <Inputs>
                        <h1>Personal inFormation</h1>
                        <input required type="text" placeholder="First Name" value={purchaseDetails.firstName} onChange={(e) => setPurchaseDetails({ ...purchaseDetails, firstName: e.target.value })} minLength={2} maxLength={25}></input>
                        <input required type="text" placeholder="Last Name" value={purchaseDetails.lastName} onChange={(e) => setPurchaseDetails({ ...purchaseDetails, lastName: e.target.value })} minLength={2} maxLength={25}></input>
                        <input required type="email" placeholder="E-mail" value={purchaseDetails.email} onChange={(e) => setPurchaseDetails({ ...purchaseDetails, email: e.target.value })}></input>
                    </Inputs>
                    <Inputs>
                        <h1>Payment Method</h1>
                        <input required type="number" id="card-number" placeholder="Card Number" value={purchaseDetails.cardNumber} onChange={(e) => setPurchaseDetails({ ...purchaseDetails, cardNumber: e.target.value })} min={10}></input>
                        <input required type="month" placeholder="Expiration Date" value={purchaseDetails.expirationDate} onChange={(e) => setPurchaseDetails({ ...purchaseDetails, expirationDate: e.target.value })}></input>
                        <input required type="number" id="cvc" placeholder="CVC" value={purchaseDetails.cvc} onChange={(e) => setPurchaseDetails({ ...purchaseDetails, cvc: e.target.value })}></input>
                    </Inputs>
                    <Button type="submit">Finalize Order</Button>
                </form>
            )
        }
        else {
            return (
                <form onSubmit={finalizeOrder}>
                    <Inputs>
                        <h1>Personal inFormation</h1>
                        <input disabled={true} required type="text" placeholder="First Name" value={purchaseDetails.firstName} onChange={(e) => setPurchaseDetails({ ...purchaseDetails, firstName: e.target.value })} minLength={2} maxLength={25}></input>
                        <input disabled={true} required type="text" placeholder="Last Name" value={purchaseDetails.lastName} onChange={(e) => setPurchaseDetails({ ...purchaseDetails, lastName: e.target.value })} minLength={2} maxLength={25}></input>
                        <input disabled={true} required type="email" placeholder="E-mail" value={purchaseDetails.email} onChange={(e) => setPurchaseDetails({ ...purchaseDetails, email: e.target.value })}></input>
                    </Inputs>
                    <Inputs>
                        <h1>Payment Method</h1>
                        <input disabled={true} required type="number" id="card-number" placeholder="Card Number" value={purchaseDetails.cardNumber} onChange={(e) => setPurchaseDetails({ ...purchaseDetails, cardNumber: e.target.value })} min={10}></input>
                        <input disabled={true} required type="month" placeholder="Expiration Date" value={purchaseDetails.expirationDate} onChange={(e) => setPurchaseDetails({ ...purchaseDetails, expirationDate: e.target.value })}></input>
                        <input disabled={true} required type="number" id="cvc" placeholder="CVC" value={purchaseDetails.cvc} onChange={(e) => setPurchaseDetails({ ...purchaseDetails, cvc: e.target.value })}></input>
                    </Inputs>
                    <Button disabled={true} type="submit"><ThreeDots width={51} height={13} color="#FFFFFF" /></Button>
                </form>
            )
        }
    }

    return (
        <Page>
            <Navbar />
            <Title>CheckOut</Title>
            <Container>
                {assembleForm()}
            </Container>
        </Page>
    );
}

const Page = styled.div`
	min-height: 100vh;
	width: 100%;
	margin-top: 90px;
	box-sizing: border-box;
	display: flex;
    flex-direction: column;
    align-items: center;
`

const Title = styled.h1`
	font-size: 34px;
	display: flex;
	justify-content: center;
	margin-bottom: 20px;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

const Inputs = styled.div`
    padding: 25px;
    margin-bottom: 15px;
    margin-left: 35px;
    
    h1 {
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 20px;
    }

    input {
        padding: 10px 10px 3px 5px;
        margin-right: 35px;
        margin-bottom: 35px;
        border: none;
        border-bottom: 2px solid #D1D1D4;
        background: none;
        transition: .2s;

        ::placeholder {
            color: #A4A4A4;
            font-size: 15px;
        }
        :active, :focus, :hover {
            outline: none;
            border-bottom-color: black;
        }
        :valid {
            border-color: #03AC00;
        }
    }

    input[type="text"], input[type="month"], input[id="cvc"] {
        width: 40%;
    }
    input[type="email"], input[id="card-number"] {
        width: 88%;
    }    

    @media (max-width: 552px) {
        input {
            margin-right: 10px;
        }
    }
`

const Button = styled.button`
	width: 45%;
    background-color: #2F2F2F;
	padding: 16px 20px;
	margin-top: 20px;
    margin-bottom: 40px;
	border-radius: 5px;
	border: 1px solid #888888;
	box-shadow: 0px 2px 2px #888888;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 14px;
	font-weight: 700;
	color: #FFFF;
	text-transform: uppercase;
	cursor: pointer;
	transition: .2s;

	:active, :focus, :hover {
		outline: none;
		border-color: black;
	}

	@media (max-width: 768px) {
		width: 50%;
	}
`