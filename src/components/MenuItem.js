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

    div {
        background: center;
        background-size: cover;
        width: 250px;
        height: 200px;
    }
`

export default MenuItem