let Shoes = ({ id, title, price }) => {
    return (
        <div className='col-md-4'>
        <img src={`https://codingapple1.github.io/shop/shoes${id+1}.jpg`}width='80%' />
        <h4>{title}</h4>
        <p>{price}</p>
      </div>
    )
};

export default Shoes;