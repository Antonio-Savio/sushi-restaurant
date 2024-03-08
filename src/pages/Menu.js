import React from 'react'
import { MenuList } from '../helpers/MenuList'
import MenuItem from '../components/MenuItem'
import styled from 'styled-components'

const Menu = () => {
    return (
        <div>
            <h1>Menu</h1>
            <CardWrap>
                {MenuList.map((item, index) => {
                    return (
                        <MenuItem 
                            key={index}
                            name={item.name}
                            image={item.image}
                            price={item.price}
                        />)
                })}
            </CardWrap>
        </div>
    )
}

const CardWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`

export default Menu