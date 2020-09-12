import React from 'react'
import { Button, Modal, Form } from 'react-bootstrap'
import { connect } from 'react-redux'
import { rejectEntryAction,toggleEnterRemarkModalAction  }  from '../Actions/dataActions'


class EnterRemarkModal extends React.Component {


    state={ remarkInput:'' }

    onInputChanged=( event )=>{
      this.setState({remarkInput:event.target.value})
    }

    onSubmitClicked=()=>{

        const { rejectEntryAction ,activeModalId }= this.props

        this.setState({remarkInput:''})
        rejectEntryAction(activeModalId,this.state.remarkInput)
    }

    onHideModal =()=>{
        const {  showEnterModal,activeModalId,toggleEnterRemarkModalAction }= this.props;
        this.setState({remarkInput:''})
        toggleEnterRemarkModalAction(showEnterModal,activeModalId)
    }
    
    render(){
        const { showEnterModal }= this.props;
         return (
        <Modal
            show={ showEnterModal===1 ? true :false }
            onHide={ this.onHideModal }
        >
            <Modal.Body  >

                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Enter Remark</Form.Label>
                    <Form.Control value={this.state.remarkInput} onChange={this.onInputChanged} type="text"  />
                </Form.Group>

                <Button onClick={ this.onSubmitClicked  }   > Submit </Button>

            </Modal.Body>
        </Modal>
    )

    }
   
}


const mapStateToProps = (state) => {
    return {
        activeModalId:state.modalReducer.activeModalId,
        showEnterModal:state.modalReducer.enterModal
    }
}

const mapActionToProps = {
  rejectEntryAction,toggleEnterRemarkModalAction
}
export default connect(mapStateToProps, mapActionToProps)(EnterRemarkModal)




