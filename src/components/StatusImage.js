import React from 'react'
import { Image } from 'react-bootstrap'

export default function statusImageComponent({imageName}){
   return(
    <Image height='20px' width='20px' style={{ margin: '5px' }} src={require(`../images/${imageName}`)} ></Image>
   )
}

