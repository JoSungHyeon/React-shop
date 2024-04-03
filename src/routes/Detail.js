import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function Detail(props) {



    let [count, setCount] = useState(0)

    let [alert, setAlert] = useState(true)

    let {id} = useParams();

    let [amount, setAmount] = useState(true)
    let myId = props.shoes.find((item)=>{return item.id == id})

    useEffect(()=>{
      let a = setTimeout(()=>{setAlert(false)}, 2000);
      console.log(2)
      return () => {
        clearTimeout(a);
      }
    }, []);

    let chgInput = (e) => {
      let amount = e.target.value;
      if(isNaN(amount) === true) {
        setAmount(false);
      } else {
        setAmount(true);
      }
    }

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
            {
              !amount == true
              ? <div className="alert alert-warning">숫자 외에 쓰지 마세요.</div>
              : null
            }
            {count}
            <input placeholder="123" onChange={chgInput} />
            <button onClick={()=>{setCount(count+1)}}>버튼</button>
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
        </div> 
    )
}



export default Detail;