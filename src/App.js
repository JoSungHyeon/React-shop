import { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './App.css';
import bg from './img/bg.png'
import data from './data'

function App() {

  let [shoes, setShoes] = useState(data)

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">홈</Nav.Link>
            <Nav.Link href="#pricing">장바구니</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className='main-bg' style={{ backgroundImage: 'url(' + bg + ')' }}></div>
      <div className='container'>
        <div className='row'>
          {/* <Card shoes={shoes[0]}></Card>
          <Card shoes={shoes[1]}></Card>
          <Card shoes={shoes[2]}></Card> */}
          {shoes.map((a, i)=>{
            return (
              <Card shoes={shoes[i]} i={i}></Card>
            )
          })}
        </div>
      </div>
    </div>
  );
}

function Card(props){
  return (
    <div className='col-md-4'>
        <img src={`https://codingapple1.github.io/shop/shoes${props.i+1}.jpg`}width='80%' />
        <h4>{props.shoes.title}</h4>
        <p>{props.shoes.price}</p>
    </div>
  )
}

export default App;
