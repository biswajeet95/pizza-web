import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar__text">
                <div className="logo">
                <img className="log-brand"src="https://is4-ssl.mzstatic.com/image/thumb/Purple113/v4/4d/98/a5/4d98a5fb-95c2-626e-7553-6488cbb82381/source/512x512bb.jpg" alt="logo"/>
                </div>
                <ul className="navbar__ul">
                    <li><a href="">Home</a></li>
                    <li><a href="">Menu</a></li>
                    <li><a href="">Shop</a></li>
                    <li><a href="">News</a></li>
                    <li><a href="">Contact</a></li>


                </ul>

            </div>

        </nav>
    )
}
export default Navbar;