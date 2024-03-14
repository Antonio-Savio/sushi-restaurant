import React from "react";
import Shiawase from '../assets/shiawase.jpg'
import styled from "styled-components";

const Contact = () => {
    return (
        <Main>
            <div className="left-side">

            </div>
            
            <div className="right-side">
                <h1>Contact Us</h1>
                
                <form method="POST">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" />

                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" />

                    <label htmlFor="message">Message</label>
                    <textarea
                        rows="6"
                        name="message"
                        id="message"
                    ></textarea>

                    <button type="submit">Submit</button>
                </form>
            </div>
        </Main>
    )
}

const Main = styled.main`
    display: flex;
    
    .left-side {
        width: 50vw;
        background: url(${Shiawase}) no-repeat center;
        background-size: cover;
    }

    .right-side {
        width: 50vw;
        padding: 50px;
        min-height: 80vh;
        background-color: var(--background-color);
    }

    h1 {
        margin-bottom: 50px;
        font-style: oblique;
        text-align: center;
    }

    label {
        display: block;
        margin-bottom: 5px;
    }

    input, textarea, button {
        margin-bottom: 10px;
        width: 100%;
        outline: none;
        padding: 10px;
        border: none;
        border-radius: 8px;
        box-shadow: 2px 2px 3px 3px rgba(0, 0, 0, 0.2);
    }

    input:hover, textarea:hover, button:hover {
        box-shadow: 2px 2px 4px 4px rgba(0, 0, 0, 0.2);
    }

    textarea {
        width: 100%;
    }

    button {
        background-color: var(--main-color);
        margin-top: 10px;
        cursor: pointer;
    }

    @media (max-width: 600px) {
        .left-side {
            display: none;
        }

        .right-side {
            width: 100vw;
        }
    }
`

export default Contact