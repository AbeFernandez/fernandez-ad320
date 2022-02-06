import React from 'react'
import './CardNavegation.css'

const cardLink = ['Card A', 'Card B', 'Card C','Card D', 'Card E', 'Card F','Card G', 'Card H']
function CardNavegation(){
    return (
        <div className='card-nav'>
            <ul>
                {cardLink.map((link) => {
                    return (<li>{link}</li>)
                })}
            </ul>
        </div>
    )
}
export default CardNavegation