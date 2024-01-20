function Card3({product}){
    return(
        <div>
            <div className="card" style={{width: "14.5rem"}}>    
            <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" className="card-img-top" alt="..."/>
            <button className="sale-btn">Sale</button>
            <div className="card-body">
            <h5 className="card-titles">{product.sale}</h5>
            <p className="discount-price"><span className="normal-price">{product.saleDiscount}</span> {product.saleNormal}</p>
            <button className="card-button">Add to cart</button>
            </div>
            </div>
        </div>
    );
}
export default Card3;