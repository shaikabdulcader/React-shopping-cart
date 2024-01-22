import React from 'react'
import '../node_modules/font-awesome/css/font-awesome.css'
function Card({props, press}) {
  return (
    <>
    <div class="col mb-5">
        <div class="card h-100 pt-1 px-1">
        <div class={`${props.TopSale === false ? 'd-none': ''} badge bg-dark text-white position-absolute saleBadge`}>Sale</div>
            <img class="card-img-top" src={`${props.cardImg}`} alt="Product-Img"/>
            <div class="card-body p-4">
                <div class="text-center">
                    <h4 class="fw-bolder">{props.productName}</h4>
                    <div class="ratings mb-2">
                        {(() => {
                            const stars = [];
                            for (let starIndex = 0; starIndex < 5; starIndex++) {
                            stars.push(
                                <i className={`${starIndex < props.starRating ? 'fa fa-star text-warning' : 'fa fa-star-o text-warning'}`}></i>
                            );
                            }
                            return stars;
                        })()}
                    </div>
                    <h4> $&nbsp;
                    { props.offer === undefined ? props.mrp : (props.mrp * (props.offer/100)).toFixed(1) }
                    </h4>
                    <p className={`priceDecrease ${props.offer === undefined ? 'd-none' : ''}`}><span>OFFER: </span><s>{props.mrp}</s> (<b>{props.offer}% off</b>)</p>
                </div>
            </div>
            <div class="card-footer pb-4 border-top-0 bg-transparent">
                <div class="text-center"><a 
                class="btn text-white btn-outline-dark mt-auto py-2 px-3 btn-dark" 
                href="/" type='button' onClick={press}>Add to Cart</a></div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Card;