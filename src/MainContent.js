import './MainContent.css';

function Navbar(){

  let navbar = (
  <header className='header'>
    <nav className='nav'>
      <div className='left-nav'>
        <img src = "./logo512.png" alt = "react_logo" className='header-logo'/>
        <h1>My React website</h1>
      </div>
      <ul className="nav-items">
        <li> Pricing </li>
        <li> About </li>
        <li> Contact </li>
      </ul>
    </nav>
  </header>
  );
  return navbar;
}

function Footer(){
  let footer = (
  <span className='footer'>
    <p> This is a footer @All footer rights deserved and reserved</p>
  </span>);
  return footer;
}

function Content(){
  return(
  <div className='content'>
    <div>
      <h2>Reasons why I want to learn React</h2>
      <ol>
        <li> It's a sought after skill</li>
        <li> Understanding a framework is a gateway to learn others</li>
        <li> I want to get better at JavaScript in general</li>
      </ol>
    </div>
  </div>
  );
}

function Page(){
  return(
    <div className='main-content'>
      <Navbar/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default Page;
