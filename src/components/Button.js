import React from 'react'
import { Button } from 'react-bootstrap'

function ButtonCustomized({children,customClass,customStyle,onClick}) {
    return (
        <Button onClick={onClick} className={customClass} style={{ borderRadius:'20px',...customStyle }} > {children} </Button>
    )
}

export default ButtonCustomized