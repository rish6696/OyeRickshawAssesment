import React, { Component } from 'react';
import XLSX from 'xlsx';
import Button from '../components/Button'
import FlexContainer from '../components/FlexContainer'
import { connect } from 'react-redux'
import { updateDataAction } from '../Actions/dataActions'

class ExcelReader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file: null,
            data: [],
            fileName:''
        }
      
    }

    handleChange =(e)=> {
        const files = e.target.files;
        console.log(files[0])
        if (files && files[0]) this.setState({ file: files[0],fileName:files[0].name });
    };

    handleFile =(e)=> {
        const reader = new FileReader();
        const rABS = !!reader.readAsBinaryString;

        reader.onload = (e) => {
            
            const bstr = e.target.result;
            const wb = XLSX.read(bstr, { type: rABS ? 'binary' : 'array', bookVBA: true });
          
            const wsname = wb.SheetNames[0];
            const ws = wb.Sheets[wsname];
            const data = XLSX.utils.sheet_to_json(ws);
            

            let entries   ={};

            for(const a of data ){
              entries[a.earning_id]={
                  remarks:"NA",
                  status:2,
                  mobile:a.mobile,
                  earning:a.earning,
                  check:0
              }
            }

            this.props.updateDataAction(entries)
            this.setState({file:null})
        };

        if (rABS) {
            reader.readAsBinaryString(this.state.file);
        } else {
            reader.readAsArrayBuffer(this.state.file);
        };
    }

    render() {


        let UploadButton = null;
        if(this.state.file) UploadButton=(
          <FlexContainer rowORcolumn='col' style={{margin:'20px'}} >
                 <div style={{margin:'10px'}} > {this.state.fileName } </div>
                 <Button onClick={this.handleFile} > Upload </Button>
          </FlexContainer>
        )
        return (
            <div>
        
                <div style={{width:'200px',margin:'20px'}} className="custom-file">
                    <input type="file" className="custom-file-input" accept={'.xlx,.xlsx'} onChange={this.handleChange} id="customFile" />
                    <label className="custom-file-label" >Choose file</label>
                </div>
                {UploadButton}
            </div>

        )
    }
}

const mapStateToProps=(state)=>{
  return {state}
}

const mapActionToProps={
    updateDataAction
}

export default connect(mapStateToProps,mapActionToProps)(ExcelReader);