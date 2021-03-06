import React from 'react'
import {Card} from '../card/card.component'
import './card-list.style.css'

export const CardList = (props) => {
    return (
        <div className='card-list'>
            {props.monster.map((monster, index) =>
                <Card key={index} monster={monster} mid={index}/>)}
        </div>
    )
}
