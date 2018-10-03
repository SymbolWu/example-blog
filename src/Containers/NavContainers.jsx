// import React from 'react'
import {connect} from 'react-redux'
import {fetchMenusRequest} from '../Redux/Actions/NavActions'
import NavComponent from '../Components/Public/NavComponent'
import {getMenuList,getLoading} from '../Selectors/NavSelector'
const mapStateToProps = (state)=>{
    return{
        menuList:getMenuList(state),
        loading:getLoading(state)
    }
}
export default connect(mapStateToProps,{
    fetchMenusRequest
})(NavComponent)