import { approveEntrySingle ,rejectEntry,
    toggleEnterRemarkModal,toggleShowRemarkModal,
    updateData,
    addToCheckedEntry,
    removeFromCheckedEntry,
    approveMultipleSelectedEntry
    
 } from './Types'

export  function approveEntrySingleAction(id){
  return {
      type:approveEntrySingle,
      payload:{ id }
  }
}

export function updateDataAction( data ){
   return {
       type:updateData,
       payload:data
   }
}

export function toggleEnterRemarkModalAction( currState,id ){

    return  {
        type:toggleEnterRemarkModal,
        payload : { state :  ( currState+1 ) %2 ,id }
    }
    
}

export function toggleShowRemarkModalAction( currState,id ){
    return {
        type:toggleShowRemarkModal,
        payload: {state: (currState+1)%2,id  }
    }
}

export  function rejectEntryAction(id,remarks){
    return {
        type:rejectEntry,
        payload:{ id,remarks }
    }
  }


export function addToCheckEntryAction(id){
    return {
        type:addToCheckedEntry,
        payload:id
    }
}

export function removeFromCheckEntryAction(id){
    return {
        type:removeFromCheckedEntry,
        payload:id
    }
}

export function approveMultipleEntries(){
    return {
        type:approveMultipleSelectedEntry,
        payload:[]
    }
}

