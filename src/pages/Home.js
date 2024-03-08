import React from "react";
import { Link } from 'react-router-dom'
import styled from "styled-components";
import Banner from '../assets/sushi-background.jpg'

function Home() {
    return (
        <Main>
            <h1>Shiawase Sushi</h1>
            <p>Feel the taste at every bite</p>
            <Link to='/menu'>
                <button>ORDER RIGHT AWAY</button>
            </Link>
        </Main>
    )
}

const Main = styled.main`
    background: url(${Banner}) no-repeat center;
    background-size: cover;
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    padding-left: 30px;
    /* align-items: center; */

    h1 {
        letter-spacing: 1px;
        font-size: 50px;
    }

    p {
        font-size: 26px;
    }

    button {
        border: none;
        padding: 10px 20px;
        font-family: inherit;
        font-weight: 500;
        font-size: 18px;
        letter-spacing: 1px;
        background-color: #e50;
        border-radius: 8px;
        cursor: pointer;
        transition: 0.2s;
    }

    button:hover{
        color: #fff;
        filter: brightness(90%);
    }

    a {
        width: fit-content;
    }
`

export default Home