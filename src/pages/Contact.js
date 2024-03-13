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
                </form>'
            </div>
        </Main>
    )
}

const Main = styled.main`
    display: flex;
    align-items: center;
    
    .left-side {
        width: 50vw;
        background: url(${Shiawase}) no-repeat center;
        background-size: cover;
        height: 90vh;
    }

    .right-side {
        width: 50vw;
        padding: 50px;
    }

    h1 {
        margin-bottom: 50px;
        font-style: oblique;
    }

    label {
        display: block;
        margin-bottom: 5px;
    }

    input {
        margin-bottom: 5px;
        width: 100%;
    }

    textarea {
        width: 100%;
    }
`

export default Contact