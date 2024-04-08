import { Table } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux";
import { changeName, increase } from "./../store/userSlice";
import { addCount } from "./../store/cartSlice";

function Cart() {

    let state = useSelector((state)=>{ return state })
    let dispatch = useDispatch()

    console.log(state.cart[1].id)

    return (
        <div>

            <h6>{state.user.name} {state.user.age}의 장바구니</h6>
            <button onClick={()=>{ dispatch(increase(1)) }}>버튼</button>

            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th> 
                    </tr>
                 </thead>
                 <tbody>
                    {
                        state.cart.map((a, i)=>
                            <tr key={i}>
                                <td>{state.cart[i].id}</td>
                                <td>{state.cart[i].name}</td>
                                <td>{state.cart[i].count}</td>
                                <td>
                                    <button onClick={()=>{
                                        dispatch(addCount(i))
                                    }}>+</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>     
        </div>
    )
}


// 버튼누르면 수량 +되게
// 디테일 페이지에서 주문하기 버튼 누르면 장바구니에 상품 추가하기
export default Cart;