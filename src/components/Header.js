import React from 'react'
import FlexContainer from '../components/FlexContainer'
import { BRAND_COLOR,BRAND_LOGO_URL } from '../constants'
import { Image } from 'react-bootstrap'

function Header( props ){
  return(
     <FlexContainer customClass='fixed-top' style={{backgroundColor:BRAND_COLOR,height:'72px',zIndex: '10'}} rowORcolumn='row' alignItem='center' justifyContent='center' >
        <FlexContainer rowORcolumn='col'   >
            <Image src={BRAND_LOGO_URL} ></Image>
            <div style={{fontFamily:'poppinsSemiBold',fontSize:'20pt',marginLeft:'15px',fontWeight:'bold'}} > REACT ASSIGNMENT </div>
        </FlexContainer>
     </FlexContainer>     
  )
}

export default Header