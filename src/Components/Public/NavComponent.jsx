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
    changeListOrder = (a, b) => {
        return b.code - a.code
    }
    render() {
        const { menuList, loading } = this.props;
        return loading
            ? <div>
                Loading...
            </div>
            : <div className='nav'>
                <div className='logo'>
                    <Link to={'/'}>S</Link>
                </div>
                <div className='thirdLink'>
                    <a href='https://www.linkedin.com/in/Xinbo-Wu-49b68a170'>IN</a>
                </div>
                <ul>
                    {
                        menuList.sort(this.changeListOrder).map((item, index) => {
                            return (
                                <li key={item.id}><Link to={item.id === '0' ? '/' : `/${item.name}`} replace>{item.label}</Link></li>
                            )
                        })
                    }
                </ul>

            </div>

    }
}
export default Nav;