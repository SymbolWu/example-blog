import React ,{Component} from 'react'
import PropTypes from 'prop-types'

class Nav extends Component {
    static propTypoes = {
       menuList:PropTypes.array.isRequired 
    }
    render(){
        const {menuList} = this.props;
        return(
            <div>
                <ul>
                    {
                        menuList.map((item,index)=>{
                            return(
                                {/* <li key={item}></li> */}
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default Nav;