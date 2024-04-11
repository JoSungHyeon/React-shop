import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { Context1 } from './../App.js'
import { addItem } from "../store/cartSlice.js";
import { useDispatch } from "react-redux";

function Detail(props) {

    let {재고} = useContext(Context1)

    let {id} = useParams();
    let myId = props.shoes.find((item)=>{return item.id == id})
    let [alert, setAlert] = useState(true)
    let [tab, setTab] = useState(0)
    let [pageFade, setPageFade] = useState('');
    let dispatch = useDispatch();

    useEffect(()=>{
      console.log(myId.id)
      let outData = localStorage.getItem('watched');
      outData = JSON.parse(outData)
      outData.push(myId.id)
      outData = new Set(outData)
      outData = Array.from(outData)
      localStorage.setItem('watched', JSON.stringify(outData))
        // 누가 디테일 페이지 접속하면 그 페이지에 보이는 상품 ID가져와서
        // 로컬스토리지에 watched 항목에 추가할거임
    }, [])

    useEffect(()=>{
      // let a = setTimeout(()=>{setAlert(false)}, 2000);
      setTimeout(()=>{ setPageFade('detail_end') }, 10);
      return () => {
         // clearTimeout(a);
         setPageFade('');
      }
    }, []);

    // useEffect(()=>{  }) 재랜더링마다 코드실행
    // useEffect(()=>{  }, []) mount시 1회 코드실행
    // useEffect(()=>{return ()=>{  }}, []) unmount시 1회 코드실행

    return (
        <div className={`container detail_start ${pageFade}`}>
            {
              alert == true 
              ? <div className="alert alert-warning">2초이내 구매시 할인</div>
              : null
            }

            {재고}
            <div className="row">
              <div className="col-md-6">
                <img src={`https://codingapple1.github.io/shop/shoes${Number(id) + 1}.jpg`}width="100%" />
              </div>
              <div className="col-md-6">
                <h4 className="pt-5">{myId.title}</h4>
                <p>{myId.content}</p>
                <p>{myId.price}원</p>
                <button className="btn btn-danger" onClick={()=>{
                  dispatch(addItem( {id: id, name: myId.title, count: 1} ))
                }} >주문하기</button> 
              </div>
            </div>

            <Nav variant="tabs"  defaultActiveKey="link0">
              <Nav.Item>
                <Nav.Link onClick={()=>{setTab(0)}} eventKey="link0">버튼0</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link onClick={()=>{setTab(1)}} eventKey="link1">버튼1</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link onClick={()=>{setTab(2)}} eventKey="link2">버튼2</Nav.Link>
              </Nav.Item>
            </Nav>
            
            <TabContent tab={tab} shoes={props.shoes}/>

        </div> 
    )
}

function TabContent({tab, shoes}) {
  // if(tab == 0) {
  //   return <div>내용0</div>
  // }
  // if(tab == 1) {
  //   return <div>내용1</div>
  // }
  // if(tab == 2) {
  //   return <div>내용2</div>
  // }
  
  let [fade, setFade] = useState('');
  let {재고} = useContext(Context1);

  useEffect(()=>{
    setTimeout(()=>{ setFade('end') }, 10);
    return () => {
      setFade('')
    }
  }, [tab]);

  return (<div className={`start ${fade}`}>
    { [<div>{재고}</div>, <div>내용1</div>, <div>내용2</div>][tab] }
  </div>)
}



export default Detail;