import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class Nav extends Component {
    static propTypoes = {
        loading: PropTypes.bool.isRequired,
        menuList: PropTypes.array.isRequired,
        fetchMenusRequest: PropTypes.func.isRequired
    }
    componentDidMount() {
        this.props.fetchMenusRequest();
    }
    render() {
        const { menuList, loading } = this.props;
        return loading
            ? <div>
                Loading...
            </div>
            : <div>
                <ul>
                    {
                        menuList.map((item, index) => {
                            return (
                                <li key={item.id}><Link to={item.id === '0' ? '/' : `/${item.name}`} replace>{item.name}</Link></li>
                            )
                        })
                    }
                </ul>
            </div>

    }
}
export default Nav;