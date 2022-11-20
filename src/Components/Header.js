import React from 'react'
import { 
    Container, 
    Dropdown, 
    FormControl,
    Nav, 
    Navbar,
    Badge, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {FaShoppingCart} from 'react-icons/fa'

const Header = () => {
  return (
    <Navbar bg='dark' variant='dark' style={{height: 80}}>
      <Container>
      <Navbar.Brand>
        < Link to="/">Shopping Cart</Link>
      </Navbar.Brand>
      <Navbar.Text className='search'>
        <FormControl style={{width: 500}}
        placeholder="search product"
        className='m-auto'/>
        </Navbar.Text>
          <Nav>
            <Dropdown alignRight>
              <Dropdown.Toggle variant='success'>
                <FaShoppingCart color='white' fontSize="25px"/>
                <Badge>{10}</Badge>
              </Dropdown.Toggle>
              <Dropdown.Menu style={{ minWidth: 370 }}>
                <span style={{ padding: 10 }}> cart is empty!</span>
              </Dropdown.Menu>

            </Dropdown>
          </Nav>
      </Container>
    </Navbar>
  )
}
export default Header