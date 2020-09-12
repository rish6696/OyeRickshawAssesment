import React from 'react'

function FLexLayout({style,justifyContent,rowORcolumn,alignItem,children,customClass  }) {
    return(
        <div  style={{ ...style  }} className={`d-flex flex-${rowORcolumn} align-items-${alignItem}  justify-content-${justifyContent} ${customClass}`}>
           {children}
        </div>
    )      
}

export default FLexLayout