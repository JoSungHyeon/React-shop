import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Nav } from "react-bootstrap";


function Detail(props) {

    let {id} = useParams();
    let myId = props.shoes.find((item)=>{return item.id == id})
    let [alert, setAlert] = useState(true)
    let [tab, setTab] = useState(0)

    useEffect(()=>{
      // let a = setTimeout(()=>{setAlert(false)}, 2000);
      return () => {
         // clearTimeout(a);
      }
    }, []);

    // useEffect(()=>{  }) 재랜더링마다 코드실행
    // useEffect(()=>{  }, []) mount시 1회 코드실행
    // useEffect(()=>{return ()=>{  }}, []) unmount시 1회 코드실행

    return (
        <div className="container">
            {
              alert == true 
              ? <div className="alert alert-warning">2초이내 구매시 할인</div>
              : null
            }
            <div className="row">
              <div className="col-md-6">
                <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
              </div>
              <div className="col-md-6">
                <h4 className="pt-5">{myId.title}</h4>
                <p>{myId.content}</p>
                <p>{myId.price}원</p>
                <button className="btn btn-danger">주문하기</button> 
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
            
            <TabContent tab={tab}/>

        </div> 
    )
}

function TabContent({tab}) {
  // if(tab == 0) {
  //   return <div>내용0</div>
  // }
  // if(tab == 1) {
  //   return <div>내용1</div>
  // }
  // if(tab == 2) {
  //   return <div>내용2</div>
  // }
  return [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab] // 이러면 if문 필요없음
}


export default Detail;