import React, { useState } from "react";
import styled from "styled-components";
import Logo from '../assets/restaurant-logo.png'
import { Link } from "react-router-dom";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <Header>
            <Link to="/">
                <img src={Logo} alt="restaurant logo" />
            </Link>
            
            <div onClick={() => setMenuOpen(!menuOpen)}>
                <span className={menuOpen ? "openedMenu" : ""}>
                </span>
            </div>

            <div className={menuOpen ? "openedMenu" : ""}>
                <Link to="/">Home</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </Header>
    )
}

const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #e50;
    padding: 0px 30px;

    a:first-of-type {
        display: flex;
    }

    img {
        width: 90px;
    }

    div:first-of-type {
        width: 65px;
        height: 60px;
        cursor: pointer;
        display: none;
    }

    & div:last-child {
        display: flex;
        gap: 30px;
        font-weight: 500;
        /* transition: opacity 0.3s ease; */
    }

    & div:last-child a {
        transition: 0.2s;
    }

    & div:last-child a:hover {
        color: #fff;
    }

    span {
        background-color: #000;
        position: relative;
        display: block;
        width: 30px;
        height: 2px;
        top: 29px;
        left: 35px;
        transition: 0.5s ease-in-out;
    }

    span::before, span::after {
        background-color: #000;
        position: absolute;
        display: block;
        width: 100%;
        height: 100%;
        content: "";
        transition: 0.5s ease-in-out;
    }

    span::before {
        top: -10px;
    }

    span::after {
        bottom: -10px;
    }

    span.openedMenu {
        transform: rotate(45deg);
    }

    span.openedMenu::before {
        transform: rotate(90deg);
        top: 0;
    }

    span.openedMenu::after {
        transform: rotate(90deg);
        bottom: 0;
    }

    @media (max-width: 600px) {
        div:first-of-type {
            display: block;
        }

        & div:last-child {
            flex-direction: column;
            align-items: center;
            background-color: #e50;
            position: absolute;
            right: 0;
            top: 0;
            margin-top: 90px;
            padding: 30px;
            display: none;
        }

        div.openedMenu {
            display: flex;
        }
    }
`

export default Navbar