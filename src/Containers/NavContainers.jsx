// import React from 'react'
import {connect} from 'react-redux'
import {fetchMenusRequest} from '../Redux/Actions/NavActions'
import Nav from '../Components/Public/Nav'
import {getMenuList,getLoading} from '../Selectors/NavSelector'
const mapStateToProps = (state)=>{
    return{
        menuList:getMenuList(state),
        loading:getLoading(state)
    }
}
export default connect(mapStateToProps,{
    fetchMenusRequest
})(Nav)