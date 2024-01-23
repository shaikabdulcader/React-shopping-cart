import "./App.css";
import Card from "./Card.jsx";
import Navbar from "./Navbar.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { useState } from "react";

function App() {
  
  const [cartData, setCartData] = useState([]);
  const [btnText, setBtnText] = useState([]);

  for(let i=1;i <= 12;i++){
    let obj = { id : i, txt : "Add to Cart"};
    btnText.push(obj);
  }

  let cardDetails = [
    {
      id: 1,
      TopSale: true,
      cardImg:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1ebc46fd-5c6e-4725-b004-f8bee329e592/nikepremier-3-low-top-football-boot-5CPFpf.png",
      productName: "NikePremier 3",
      starRating: 4,
      mrp: 159.38,
      offer: 20,
      btnTxt: btnText[0].txt
    },
    {
      id: 2,
      TopSale: false,
      cardImg:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/36a7d256-5bf5-4eb8-a73a-26c483bd7329/superfly-9-elite-mercurial-dream-speed-fg-high-top-football-boot-1SKm9k.png",
      productName: "Nike Superfly 9 Elite Mercurial Dream Speed",
      starRating: 2,
      mrp: 70.62,
      offer: 25,
      btnTxt: btnText[1].txt
    },
    {
      id: 3,
      TopSale: true,
      cardImg:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0f1cce41-4f49-484a-bc5e-16f782c71b32/phantom-gx-club-multi-ground-low-top-football-boot-WDxFP9.png",
      productName: "Nike Phantom GX Club",
      starRating: 4,
      mrp: 184.75,
      offer: 10,
      btnTxt: btnText[2].txt
    },
    {
      id: 4,
      TopSale: false,
      cardImg:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4cdc966c-3c8c-469e-90b8-9373b5f59e04/phantom-luna-elite-se-fg-football-boot-dPSbdj.png",
      productName: "Nike Phantom Luna Elite SE",
      starRating: 2,
      mrp: 105.25,
      offer: 25,
      btnTxt: btnText[3].txt
    },
    {
      id: 5,
      TopSale: true,
      cardImg:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/51971fe1-512d-4cb5-8c2b-67c44c19de09/mercurial-vapor-15-elite-low-top-football-boot-9Mbrnv.png",
      productName: "Nike Mercurial Vapor 15 Elite",
      starRating: 4,
      mrp: 250.12,
      offer: 15,
      btnTxt: btnText[4].txt
    },
    {
      id: 6,
      TopSale: true,
      cardImg:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/af2cabb1-562b-4227-877b-ea07dc6f4a1f/mercurial-superfly-9-club-high-top-football-shoes-SMp9Bd.png",
      productName: "Nike Mercurial Superfly 9 Club",
      starRating: 5,
      mrp: 389.25,
      offer: 17,
      btnTxt: btnText[5].txt
    },
    {
      id: 7,
      TopSale: true,
      cardImg:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a82a3517-40a1-4532-8bd5-972a3c88d20e/zoom-mercurial-superfly-9-academy-km-mg-multi-ground-high-top-football-boot-jxdjk2.png",
      productName: "Nike Zoom Mercurial Superfly 9 Academy KM MG",
      starRating: 5,
      mrp: 352.55,
      offer: 27,
      btnTxt: btnText[6].txt
    },
    {
      id: 8,
      TopSale: false,
      cardImg:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/735fe693-ec6c-4465-b007-8a72547b52ef/phantom-gx-elite-low-top-football-boot-CRPX0r.png",
      productName: "Nike Phantom GX Elite",
      starRating: 3,
      mrp: 60.71,
      offer: 10,
      btnTxt: btnText[7].txt
    }
  ];
  
  let press = (product) => {
    let foundButton  = btnText.find((ele)=> product.id === ele.id)
    // console.log(btnElement);

    if (foundButton .txt === "Add to Cart") {

      setCartData([...cartData, product]);

      setBtnText((prevBtnText) => {
        return prevBtnText.map((btn) => {
          if (btn.id === product.id) {
            // console.log({ ...btn, txt: "Remove from Cart" });
            return { ...btn, txt: "Remove from Cart" };
          } else {
            return btn;
          }
        });
      });
    }else if(foundButton .txt === "Remove from Cart"){
      setCartData(cartData.filter(ele => ele.id != product.id));
      setBtnText((prevBtnText) => {
        return prevBtnText.map((btn) => {
          if (btn.id === product.id) {
            return { ...btn, txt: "Add to Cart" };
          } else {
            return btn;
          }
        });
      });
    }
    
    
  };

  return (
    <>
      <Navbar navDetails={cartData}/>
      <Header />
      <section className="content-section py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {
                cardDetails.map((card,index)=>{
                  return <Card key={index++} props={card} press={press}/>
                })
              }
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default App;
