function Navbar(props){
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid nav-container">
    <a className="navbar-brand" href="/">Start Bootstrap</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarScroll">
      <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">About</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="true">
            Shop
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdownMenuLink">
            <li><a className="dropdown-item" href="/">All Products</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Popular items</a></li>
            <li><a className="dropdown-item" href="/">New Arrivals</a></li>
          </ul>
        </li>
      </ul>
        <button className="button" type="submit"><i className="fa fa-shopping-cart"></i> Cart <span className="count">0</span></button>
    </div>
  </div>
</nav>
        </div>
    );
}
export default Navbar;