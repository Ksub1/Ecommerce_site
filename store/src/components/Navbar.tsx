import {Button, Container,Nav, Navbar as NavbarBs}  from "react-bootstrap"
import { NavLink } from "react-router-dom"
import reactLogo from "../assets/icon.svg"; 
import { useShoppingCart } from "../context/ShoppingCart";

export function Navbar() {

    const { openCart,cartQuantity} = useShoppingCart()
    return (
    <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
         <Container className="d-flex justify-content-between align-items-center">
         <NavbarBs.Brand href="/" className="me-3 fw-bold">
      Pathivara Suppliers
    </NavbarBs.Brand>



    <Nav className="mx-auto gap-1">
  <Nav.Link to="/" as={NavLink} >
    HOME
  </Nav.Link>
  <Nav.Link to="/Store" as={NavLink} >
    STORE
  </Nav.Link>
  <Nav.Link to="/Blog" as={NavLink}>
    BLOG
  </Nav.Link>
  <Nav.Link to="/About" as={NavLink} >
    ABOUT US
  </Nav.Link>
  <Nav.Link to="/Contact" as={NavLink} >
    CONTACT US
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