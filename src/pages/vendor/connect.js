import {VendorIndexAsyncAction} from "@actions/vendor/vendorActions"

export const mapStateToProps=(state)=>({
    vendorList:state.getIn(["vendor","vendorList"]),
    vendorDetail:state.getIn(["vendor","vendorDetail"])
    
})

export const mapDispatchToProps=(dispatch)=>({
    handleGetVendorIndex(query){
        dispatch(VendorIndexAsyncAction(query))
    } 
})

