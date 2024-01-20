import logo from './logo.svg';
import './App.css';
import './Nav'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import Header from './Header';
import Nav from './Nav';
import Card1 from './Card1';
import Card2 from './Card2';
import Card3 from './Card3';
import Card4 from './Card4';
import Footer from './Footer';
function App() {

  let product = [
    {
      fancy: "Fancy Product",
      fancyNormal: "$40.00 - $80.00",

      special: "Special Item",
      specialNormal: "$18.00",
      specialDiscount: "$20.00",

      sale: "Sale Item",
      saleNormal: "25.00",
      saleDiscount: "$50.00",

      popular: "Popular Item",
      popularNormal: "$40.00"
    }
  ]
  
  return (
    <div>
      <Nav/>
      <Header/>
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-xl-3 col-sm-6 col-6">
          {
            product.map((product) =>{
              return <Card1 product={product} />
            })
          }
          </div>
          <div className="col-md-4 col-xl-3 col-sm-6 col-6">
          {
            product.map((product) =>{
              return <Card2 product={product} />
            })
          }
          </div>
          <div className="col-md-4 col-xl-3 col-sm-6 col-6">
          {
            product.map((product) =>{
              return <Card3 product={product} />
            })
          }
          </div>
          <div className="col-md-4 col-xl-3 col-sm-6 col-6">
          {
            product.map((product) =>{
              return <Card4 product={product} />
            })
          }
          </div>
          <div className="col-md-4 col-xl-3 col-sm-6 col-6">
          {
            product.map((product) =>{
              return <Card3 product={product} />
            })
          }
          </div>
          <div className="col-md-4 col-xl-3 col-sm-6 col-6">
          {
            product.map((product) =>{
              return <Card1 product={product} />
            })
          }
          </div>
          <div className="col-md-4 col-xl-3 col-sm-6 col-6">
          {
            product.map((product) =>{
              return <Card2 product={product} />
            })
          }
          </div>
          <div className="col-md-4 col-xl-3 col-sm-6 col-6">
          {
            product.map((product) =>{
              return <Card4 product={product} />
            })
          }
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
