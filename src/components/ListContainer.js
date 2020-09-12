import React from 'react'

function ListContainer({children}){
    return (
        <div className='shadow-lg p-3 mb-5 bg-white rounded' style={
            {
                margin:'20px'
            }} >
           {children}
        </div>
    )

}

export default ListContainer
