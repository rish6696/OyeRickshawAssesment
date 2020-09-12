import {
    rejectEntry, approveEntrySingle,
    toggleEnterRemarkModal,
    toggleShowRemarkModal,
    updateData,
    addToCheckedEntry,
    removeFromCheckedEntry,
    approveMultipleSelectedEntry
}
    from '../Actions/Types'
import { combineReducers } from 'redux'

const tableHeadings = ["id", "mobile", "earning", "action"];


const data = {
    1: {
        mobile: '7838389193',
        earning: '7589',
        status: 2,
        remarks: 'NA',
        check:0
    },
    2: {
        mobile: '7838986696',
        earning: '12589',
        status: 1,
        remarks: 'NA',
        check:0
    },
    3: {
        mobile: '981118857',
        earning: '6543',
        status: 0,
        remarks: 'This is an example remark',
        check:0
    }
}


function dataReducer(state = { data, tableHeadings,checkedEntries:{} }, action) {

   
    let upDatedData, updatedCheckedEntries

    switch (action.type) {

        case rejectEntry:

            upDatedData = { ...state.data }
            upDatedData[action.payload.id].status = 0
            upDatedData[action.payload.id].remarks = action.payload.remarks

            console.log({
                mobile:data[action.payload.id].mobile,
                earning:data[action.payload.id].earning,
                id:action.payload.id,
                action:'reject',
                remark:data[action.payload.id].remarks
            })

            return {
                ...state,
                data: upDatedData
            }
        case approveEntrySingle:
            upDatedData = { ...state.data }
            upDatedData[action.payload.id].status = 1;

            console.log({
                mobile:data[action.payload.id].mobile,
                earning:data[action.payload.id].earning,
                id:action.payload.id,
                action:'approve',
            })

            return {
                ...state,
                data: upDatedData
            }

        case approveMultipleSelectedEntry:
            upDatedData = { ...state.data }
            updatedCheckedEntries = {...state.checkedEntries}

            const arrayToprint =[];

            Object.keys(state.checkedEntries).forEach(x=>{
                upDatedData[x].status=1;
                upDatedData[x].check=0
                arrayToprint.push({
                    
                        mobile:data[x].mobile,
                        earning:data[x].earning,
                        id:x,
                        action:'approve',
                })
                delete updatedCheckedEntries[x]
            })
            console.log(arrayToprint)
            return {
                ...state,
                data :upDatedData,
                checkedEntries:updatedCheckedEntries
            }
            

        case updateData:
            return{
                ...state,
                data:action.payload
            }

        case addToCheckedEntry:
            upDatedData = { ...state.data }
            upDatedData[action.payload].check=1
            updatedCheckedEntries = {...state.checkedEntries}
            updatedCheckedEntries[action.payload]=1
            return {
                ...state,
                data:upDatedData,
                checkedEntries:updatedCheckedEntries
            }

        case removeFromCheckedEntry:

            upDatedData = { ...state.data }
            upDatedData[action.payload].check=0

          updatedCheckedEntries={...state.checkedEntries}
          delete updatedCheckedEntries[action.payload]
          return {
              ...state,
              data:upDatedData,
              checkedEntries:updatedCheckedEntries
          }

        default:
            return state
    }
}

function modalReducer (state = { enterModal:0, showModal:0,activeModalId:-1 }, action ) {


    switch (action.type) {

        case rejectEntry:

            return {
                ...state,
                enterModal:0,
                activeModalId:action.payload.id
            }

        
        case toggleEnterRemarkModal:
            return {
                ...state,
                enterModal:action.payload.state,
                activeModalId:action.payload.id
            }

        case toggleShowRemarkModal:
            return {
                ...state,
                showModal:action.payload.state,
                activeModalId:action.payload.id
            }
        default:
            return state
    }
}

export default combineReducers({
    dataReducer,modalReducer
})