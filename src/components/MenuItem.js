import React from "react";
import styled from "styled-components";

const MenuItem = ({name, image, price}) => {
    return (
        <Card>
            <div style={{ backgroundImage: `url(${image})` }}> </div>
            <h3>{name}</h3>
            <p>${price} per unit</p>
        </Card>
    )
}

const Card = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    box-shadow: 2px 2px 3px 3px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    overflow: hidden;
    transition: 0.3s ease;

    &:hover {
        box-shadow: 2px 2px 5px 5px rgba(0, 0, 0, 0.2);
    }

    div {
        background-position: center;
        background-size: cover;
        width: 250px;
        height: 200px;
        border-top-right-radius: 20px;
        border-top-left-radius: 20px;
        margin-bottom: 20px;
    }

    h3, p {
        padding-inline: 20px;
    }

    p {
        padding-top: 10px;
        padding-bottom: 20px;
    }
`

export default MenuItem