import React from 'react'
import { Modal } from 'react-bootstrap'
import { connect } from 'react-redux'
import { rejectEntryAction,toggleShowRemarkModalAction  }  from '../Actions/dataActions'


function ViewRemarkModal ( {activeModalId,data,toggleShowRemarkModalAction,showModal}  ) {

   const  onHideModal =()=>{
        toggleShowRemarkModalAction(showModal,activeModalId)
    }
     const remark = data[activeModalId] ? data[activeModalId].remarks : ''
         return (
        <Modal
            show={ showModal===1 ? true :false } 
            onHide={ onHideModal }
        >
            <Modal.Body  >
                <div> {   remark }  </div>
            </Modal.Body>
        </Modal>
    )
}


const mapStateToProps = (state) => {
    return {
        activeModalId:state.modalReducer.activeModalId,
        data:state.dataReducer.data,
        showModal:state.modalReducer.showModal
    }
}

const mapActionToProps = {
  rejectEntryAction,toggleShowRemarkModalAction
}
export default connect(mapStateToProps, mapActionToProps)(ViewRemarkModal)




