import {Button, Container,Nav, Navbar as NavbarBs}  from "react-bootstrap"
import { NavLink } from "react-router-dom"
import reactLogo from "../assets/icon.svg"; 
import { useShoppingCart } from "../context/ShoppingCart";

export function Navbar() {

    const { openCart,cartQuantity} = useShoppingCart()
    return (
    <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
        <Container>
         <Nav className="me-auto">
            <Nav.Link to="/" as={NavLink}>
            Home
            </Nav.Link>

            <Nav.Link to="/Store" as={NavLink}>
            Store
            </Nav.Link>
            <Nav.Link to="/About" as={NavLink}>
            About
            </Nav.Link>
         </Nav>
         {cartQuantity > 0 && (
        <Button 
        
        onClick={openCart}
        style={{width: "4rem" , height: "3rem", position:"relative"}} variant="outline-primary"
        className="rounded-circle">      
        <img src={reactLogo} alt="cart" />

        <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
        style={{
            color: "white" ,
            width:"1.5rem", 
            height:"1.5rem",
            position:"absolute",
            bottom:0,
            right: 0,
            transform: "translate(25%, 25%)",
        }}>
             {cartQuantity}
              </div>
      
        </Button>
   )}
        </Container>
        </NavbarBs>
    )
}