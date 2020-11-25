import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
//styles
import {MdFingerprint} from 'react-icons/md'
import {FaBars, FaTimes} from 'react-icons/fa'
import '../styles/Navbar.css'
//components
import Button from './Button'
//context api??!
import { IconContext } from 'react-icons/lib'

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true)

    const closeMobileMenu = () => {
        setClick(false)
    }

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton()
    }, [])

    window.addEventListener('resize', showButton);

    const onClick = () => {
        setClick(!click)
    }

    return (
        <>
        <IconContext.Provider value={{color: "#fff"}}>
        <div className="navbar">
            <div className="navbar-container container">
                <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                <MdFingerprint />
                SoftCard
                </Link>
                <div className="menu-icon" onClick={onClick}>
                    {click ? <FaTimes /> : <FaBars />}
                </div>
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className="nav-item">
                    <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/services" className="nav-links" onClick={closeMobileMenu}>
                        Services
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/products" className="nav-links" onClick={closeMobileMenu}>
                        Products
                    </Link>
                </li>
                <li className="nav-btn">
                    {button ? (
                        <Link to="/sign-up" className="btn-link">
                            <Button buttonStyle="btn--outline">Sign Up
                            </Button>
                        </Link>
                    ) : (
                        <Link to="/sign-up" className="btn-link" onClick={closeMobileMenu}>
                            <Button buttonStyle='btn--outline'
                                    buttonSize='btn--mobile'>Sign Up
                            </Button>
                        </Link>
                    )
                    }
                </li>
            </ul>
        </div>
        </IconContext.Provider>
        </>
    )
}
export default Navbar;