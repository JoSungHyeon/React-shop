import { memo, useMemo, useState } from "react";
import { Table } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux";
import { changeName, increase } from "./../store/userSlice";
import { addCount } from "./../store/cartSlice";

function Cart() {

    let state = useSelector((state)=>{ return state })
    let dispatch = useDispatch();
    let [count, setCount] = useState(0)

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
                                        dispatch(addCount(state.cart[i].id))
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

export default Cart;