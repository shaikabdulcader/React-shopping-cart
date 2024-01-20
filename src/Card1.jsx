function Card1({ product }){
    return(
        <div>
            <div className="card" style={{width: "14.5rem"}}>
            <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-titles">{product.fancy}</h5>
            <p classNames="card-text">{product.fancyNormal}</p>
            <button className="card-button">View options</button>
            </div>
            </div>
        </div>
    );
}
export default Card1;