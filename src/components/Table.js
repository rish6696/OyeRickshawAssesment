import React from 'react'
import { Table } from 'react-bootstrap'
import TableRow from '../components/TableRow'
import { connect } from 'react-redux'



function tableComponent({data}){

    return(
        <Table striped bordered hover responsive="sm" >
        <thead>
          <tr>
            <th> Select </th>
            <th> id </th>
            <th> Mobile </th>
            <th> Earning  </th>
            <th> Action </th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(data).map( (x,i) => (<TableRow key={i} id={x} data = { data } ></TableRow>) )}
        </tbody>
      </Table>
    )
}


const mapStateToProps=(state)=>{
    return {
        data: state.dataReducer.data,
        tableHeadings:state.dataReducer.tableHeadings
    }
}

const mapActionToProps={

}

export default connect(mapStateToProps,mapActionToProps)(tableComponent)