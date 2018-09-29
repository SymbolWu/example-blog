import React ,{Component} from 'react'
import PropTypes from 'prop-types'

class Nav extends Component {
    static propTypoes = {
        loading:PropTypes.bool.isRequired,
        menuList:PropTypes.array.isRequired,
        fetchMenusRequest:PropTypes.func.isRequired 
    }
    componentDidMount(){
        this.props.fetchMenusRequest();
    }
    render(){
        const {menuList,loading} = this.props;
        console.log('menuList:',menuList);
        if(loading){
            return(
                <div>
                    Loading...
                </div>
            )
        }else{
            return(
                <div>
                    <ul>
                        {
                            menuList.map((item,index)=>{
                                return(
                                    <li key={item.id}>{item.name}</li> 
                                )
                            })
                        }
                    </ul>
                </div>
            )
        }
        
    }
}
export default Nav;