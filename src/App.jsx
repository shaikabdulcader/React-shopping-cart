import './App.css';
import Card from './Card.jsx';
import Navbar from './Navbar.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { useState } from 'react';


function App() {
  let [initCart, setCart] = useState(0);
  let [initButtonText, setButtonText] = useState("Add to Cart");

  let press = () => {
    setCart((initCart+1));
    setButtonText(("Remove from cart"));
  };

  let cardDetails = [
    {
      TopSale : true,
      cardImg : "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1ebc46fd-5c6e-4725-b004-f8bee329e592/nikepremier-3-low-top-football-boot-5CPFpf.png",
      productName : "NikePremier 3",
      starRating : 4,
      mrp : 599,
      offer : 20,
      btnTxt : initButtonText
    },
    {
      TopSale : false,
      cardImg : "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/36a7d256-5bf5-4eb8-a73a-26c483bd7329/superfly-9-elite-mercurial-dream-speed-fg-high-top-football-boot-1SKm9k.png",
      productName : "Nike Superfly 9 Elite Mercurial Dream Speed",
      starRating : 3,
      mrp : 500,
      offer : 4,
      btnTxt : initButtonText
    },
    {
      TopSale : false,
      cardImg : "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0f1cce41-4f49-484a-bc5e-16f782c71b32/phantom-gx-club-multi-ground-low-top-football-boot-WDxFP9.png",
      productName : "Nike Phantom GX Club",
      starRating : 5,
      mrp : 800,
      offer : 5,
      btnTxt : initButtonText
    },
    {
      TopSale : true,
      cardImg : "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4cdc966c-3c8c-469e-90b8-9373b5f59e04/phantom-luna-elite-se-fg-football-boot-dPSbdj.png",
      productName : "Nike Phantom Luna Elite SE",
      starRating : 4,
      mrp : 2000,
      offer : 40,
      btnTxt : initButtonText
    },
    {
      TopSale : false,
      cardImg : "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/51971fe1-512d-4cb5-8c2b-67c44c19de09/mercurial-vapor-15-elite-low-top-football-boot-9Mbrnv.png",
      productName : "Nike Mercurial Vapor 15 Elite",
      starRating : 4,
      mrp : 1000,
      offer : 25,
      btnTxt : initButtonText
    },
    {
      TopSale : true,
      cardImg : "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/af2cabb1-562b-4227-877b-ea07dc6f4a1f/mercurial-superfly-9-club-high-top-football-shoes-SMp9Bd.png",
      productName : "Nike Mercurial Superfly 9 Club",
      starRating : 5,
      mrp : 3000,
      offer : 27,
      btnTxt : initButtonText
    },
    {
      TopSale : true,
      cardImg : "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a82a3517-40a1-4532-8bd5-972a3c88d20e/zoom-mercurial-superfly-9-academy-km-mg-multi-ground-high-top-football-boot-jxdjk2.png",
      productName : "Nike Zoom Mercurial Superfly 9 Academy KM MG",
      starRating : 5,
      mrp : 2500,
      offer : 30,
      btnTxt : initButtonText
    },
    {
      TopSale : false,
      cardImg : "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/735fe693-ec6c-4465-b007-8a72547b52ef/phantom-gx-elite-low-top-football-boot-CRPX0r.png",
      productName : "Nike Phantom GX Elite",
      starRating : 4,
      mrp : 400,
      offer : 4,
      btnTxt : initButtonText
    },
  ];

  return (
    <>
    <Navbar/>
    <Header/>
        <section className='py-5'>
          <div className='container px-4 px-lg-5 mt-5'>
            <div className='row gx-4 gx-lg-5 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 justify-content-center'>
              {
                cardDetails.map((card)=>{
                  return <Card props={card} press={press}/>
                })
              }
            </div>
          </div>
        </section>
        <Footer/>
    </>
  );
}

export default App;