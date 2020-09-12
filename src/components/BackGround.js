import React from 'react'
import { Image } from 'react-bootstrap'

function BackGround() {
    return (
        <Image style={
        { width: '100%',
         position: 'fixed', 
         margin: 'auto', 
         zIndex: '-1', 
         top: '0px',
         left:'-50px'
        } }  
        src={require('../images/backGround.svg')}>
        </Image>
    )
}

export default BackGround