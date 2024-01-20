function Card2({product}){
    return(
        <div>
            <div className="card" style={{width: "14.5rem"}}>    
            <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" className="card-img-top" alt="..."/>
            <button className="sale-btn">Sale</button>
            <div className="card-body">
            <h5 className="card-titles">{product.special}</h5>
            <p><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></p>
            <p className="discount-price"><span className="normal-price">{product.specialDiscount}</span> {product.specialNormal}</p>
            <button className="card-button-2">Add to cart</button>
            </div>
            </div>
        </div>
    );
}
export default Card2;