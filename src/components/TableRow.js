import React from 'react'
import ButtonCustomized from '../components/Button'
import { approveStatusCode, defaultStatusCode } from '../constants'
import StatusImage from '../components/StatusImage'
import { connect } from 'react-redux'
import {  approveEntrySingleAction,rejectEntryAction,
    toggleEnterRemarkModalAction,
    toggleShowRemarkModalAction,
    addToCheckEntryAction,
    removeFromCheckEntryAction
 } 

from '../Actions/dataActions'

function TableRow({ data, id,tableHeadings,approveEntrySingleAction,
    rejectEntryAction,showEnterModal,toggleEnterRemarkModalAction,
    toggleShowRemarkModalAction,addToCheckEntryAction,removeFromCheckEntryAction }) {


        const onChangeCheck=()=>{
            if(data[id].check===0){
                addToCheckEntryAction(id)
            }else{
                removeFromCheckEntryAction(id)
            }
           
        }

     const checkBox=(
         <td>
            <input key={-1} checked={  data[id].check===0 ? false:true  } onChange={onChangeCheck} style={{margin:'10px'}} type="checkbox" />
         </td>
     )
    let colArray = tableHeadings.map((x, i) => {

    if (i === 0) return (<td key={i} > {id} </td>)

    if (x.localeCompare("action") === 0) {
        let statusColumn
        switch (data[id]['status']) {
            case defaultStatusCode:
                statusColumn = (
                    <>
                        <ButtonCustomized onClick={()=>approveEntrySingleAction(id)} customClass='approve-button' customStyle={{ margin: '5px' }} >Approve</ButtonCustomized>
                        <ButtonCustomized onClick={ ()=>toggleEnterRemarkModalAction(showEnterModal,id) } customClass='reject-button' customStyle={{ margin: '5px' }} > Reject </ButtonCustomized>
                    </>
                )
                break;

            case approveStatusCode:
                statusColumn = (
                    <>
                        <StatusImage imageName='correct.svg' />
                        <div style={{ fontSize: '8pt', border: '2px solid green', textAlign: 'center', width: '94px', borderRadius: '20px', margin: '5px', display: 'inline-block' }} > Approved </div>
                    </>
                )
                break;

            default:
                statusColumn = (
                    <>
                        <StatusImage imageName='cross.svg' />
                        <ButtonCustomized  onClick={()=>toggleShowRemarkModalAction(0,id)}  customStyle={{ fontSize: '8pt', margin: '5px' }} >View Remarks</ButtonCustomized>
                    </>
                )
        }

        return (<td key={i}> {statusColumn} </td>)
    }
    return (<td key={i}>{data[id][x]}</td>);
} )

colArray.unshift(checkBox)
return (<tr>{colArray}</tr>)

}

const mapStateToProps=(state)=>{
    
    return {
        tableHeadings:state.dataReducer.tableHeadings,
        showEnterModal:state.modalReducer.enterModal,
        
    }
}

const mapActionToProps={
  approveEntrySingleAction ,rejectEntryAction, 
  toggleEnterRemarkModalAction,
  toggleShowRemarkModalAction,
  addToCheckEntryAction,
  removeFromCheckEntryAction
}

export default connect(mapStateToProps,mapActionToProps)(TableRow)

