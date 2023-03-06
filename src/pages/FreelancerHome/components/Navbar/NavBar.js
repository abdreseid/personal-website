import React from "react";
// Import Logo
import Logo from "../../../../assets/alogo.png";



import './navbar.css'

const Navbar = () => {
  const data = [
    {id: 1, link: '#', title: 'Home'},
    {id: 2, link: '#about', title: 'About'},
    {id: 3, link: '#portfolio', title: 'Portfolio'},
    {id: 4, link: '#blog', title: 'Blog'},
    {id: 5, link: '#contact', title: 'Contact'}
    ]

  return (
    
    <nav>
		<a href="/" className="logo"><span><img src={Logo} alt="Logo" /></span></a>

		<ul className="navbar">
   
    { // eslint-disable-next-line
            data.map(item => <li key={item.id}><a href={item.link}>{item.title}</a></li>)
          }
		</ul>

		<div className="main">
   
			<a href="#contact" className="button">Hire Me  </a>
			
			<div className="bx bx-menu" id="menu-icon"></div>
		</div>
	</nav>
  )
}

export default Navbar