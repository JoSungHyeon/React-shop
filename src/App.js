import { createContext, useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import './App.css';
import bg from './img/bg.png'
import data from './data'
import Detail from './routes/Detail';
import Cart from './routes/Cart';
import axios from 'axios';
import { useQuery } from 'react-query'

export let Context1 = createContext()

function App() {

  useEffect(()=>{
    
    if(localStorage.getItem('watched') === "") {
      localStorage.setItem('watched', JSON.stringify( [] ))
    }

  }, [])

  let [shoes, setShoes] = useState(data);
  let [count, setCount] = useState(2);
  let [재고] = useState([10, 11, 12]);

  let result = useQuery('작명', ()=>
    axios.get('https://codingapple1.github.io/userdata123.json').then((a)=>{
      console.log("요청됨")
      return a.data
    })
  )

  // result.data
  // result.isLoading
  // result.error


  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand onClick={()=>{ navigate("/") }}>Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{ navigate("/") }}>홈</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/cart') }}>장바구니</Nav.Link>
          </Nav>
          <Nav className='me-auto'>
            {result.isLoading && '로딩중'}
            {result.error && '에러남'}
            {result.data && result.data.name}
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={
          <>
            <div className='main-bg' style={{ backgroundImage: 'url(' + bg + ')' }}></div>
            {/* <div className='recent'>
              <h5>최근 본 상품</h5>
              {
                localStorage.getItem('watched') !== ""
                ? JSON.parse(localStorage.getItem('watched')).map((a, i)=>{
                  return(
                    <div onClick={()=>{ navigate('/detail/'+shoes[JSON.parse(localStorage.getItem('watched'))[i]].id) }}>{shoes[JSON.parse(localStorage.getItem('watched'))[i]].title}</div>
                    )
                  })
                : null 
              }
            </div> */}
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
            {
              count != 4
              ? <button onClick={()=>{
                setCount(count + 1);
                axios.get(`https://codingapple1.github.io/shop/data${count}.json`).then((result)=>{
                  // setShoes(shoes.concat(result.data));
                  let copy = [...shoes, ...result.data];
                  setShoes(copy);
                });
                
              }}>더보기</button>
              : null
            }
            {/* <button onClick={()=>{
              setCount(count + 1);
              console.log(count)
              axios.get(`https://codingapple1.github.io/shop/data${count}.json`).then((result)=>{
                // setShoes(shoes.concat(result.data));
                let copy = [...shoes, ...result.data];
                setShoes(copy);
              });
              
            }}>{count == 4 ? "더이상 상품이 없습니다" : "더보기"}</button> */}
          </>
        } />
        <Route path='/detail/:id' element={
          <Context1.Provider value={{ 재고 }}>
            <Detail shoes={shoes} />
          </Context1.Provider>
        } />

        <Route path='/cart' element={<Cart />}/>
      </Routes>


    </div>
  );
}

function Card(props){
  let navigate = useNavigate();
 
  return (
    <div className='col-md-4' onClick={()=>{
      navigate(`/detail/${props.i}`)
      }}>
        <img src={`https://codingapple1.github.io/shop/shoes${props.i+1}.jpg`}width='80%' />
        <h4>{props.shoes.title}</h4>
        <p>{props.shoes.price}</p>
    </div>
  )
}

export default App;
