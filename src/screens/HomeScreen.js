import React from 'react'
import BackGround from '../components/BackGround'
import HeaderComponent from '../components/Header'
import ButtonCustomized from '../components/Button'
import ListContainer from '../components/ListContainer'
import TableComponent from '../components/Table'
import { approveButtonText } from '../constants'
import EnterRemarkModal from '../Modals/enterRemarkModal'
import ViewRemarkModal from '../Modals/viewRemarksModal'
import ExcelReader from '../components/ExcelReader'
import { connect } from 'react-redux'
import { approveMultipleEntries } from '../Actions/dataActions'


function HomeScreen( {approveMultipleEntries, checkedEntries} ){

  return(
     <div>
         <BackGround></BackGround>
         <HeaderComponent></HeaderComponent>
         <ExcelReader></ExcelReader>
         <ListContainer>
            {Object.keys(checkedEntries).length >0 && <ButtonCustomized onClick={()=>approveMultipleEntries()} customStyle={{marginBottom:'10px'}} customClass='approve-button' > {approveButtonText} </ButtonCustomized>}
           <TableComponent/>
         </ListContainer>
         <EnterRemarkModal show={true} ></EnterRemarkModal>
         <ViewRemarkModal></ViewRemarkModal>
        
     </div>
  )
}

const mapStateToProps=(state)=>{
 return {
    checkedEntries:state.dataReducer.checkedEntries
 }
  
}

const mapActionToProps={
   approveMultipleEntries
}

export default connect( mapStateToProps,mapActionToProps )( HomeScreen )