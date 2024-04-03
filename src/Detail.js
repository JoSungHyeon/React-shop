let Detail = ({ data }) => {
    return (
        <div className="container" style={{marginTop : "100px"}}>
            <div className="row">
              <div className="col-md-6">
                <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
              </div>
              <div className="col-md-6">
                <h4 className="pt-5">{data[0].title}</h4>
                <p>{data[0].content}</p>
                <p>{data[0].price}원</p>
                <button className="btn btn-danger">주문하기</button> 
              </div>
            </div>
        </div> 
    )
}

export default Detail;