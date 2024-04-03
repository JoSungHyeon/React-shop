import { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import './App.css';
import bg from './img/bg.png'
import data from './data'
import Detail from './routes/Detail';

function App() {

  let [shoes] = useState(data);

  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand onClick={()=>{ navigate("/") }}>Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{ navigate("/") }}>홈</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/detail') }}>Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={
          <>
            <div className='main-bg' style={{ backgroundImage: 'url(' + bg + ')' }}></div>
            <div className='container'>
              <div className='row'>
                {/* <Card shoes={shoes[0]}></Card>
                <Card shoes={shoes[1]}></Card>
                <Card shoes={shoes[2]}></Card> */}
                {shoes.map((a, i)=>{
                  return (
                    <Card shoes={shoes[i]} i={i} key={a.id}></Card>
                  )
                })}
              </div>
            </div>
          </>
        } />
        <Route path='/detail/:id' element={<Detail shoes={shoes}/>} />
      </Routes>


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
