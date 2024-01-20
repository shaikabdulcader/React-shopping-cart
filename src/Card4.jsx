function Card4({product}){
    return(
        <div>
            <div className="card" style={{width: "14.5rem"}}>    
            <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-titles">{product.popular}</h5>
            <p><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></p>
            <p>{product.popularNormal}</p>
            <button className="card-button-2">Add to cart</button>
            </div>
            </div>
        </div>
    );
}
export default Card4;