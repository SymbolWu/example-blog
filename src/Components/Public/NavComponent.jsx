import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navStyle: 'nav'
        }
    }
    static propTypoes = {
        loading: PropTypes.bool.isRequired,
        menuList: PropTypes.array.isRequired,
        fetchMenusRequest: PropTypes.func.isRequired
    }
    componentDidMount() {
        this.props.fetchMenusRequest();
        //给页面绑定滑轮滚动事件 
        if (document.addEventListener) {//firefox 
            document.addEventListener('DOMMouseScroll', this.scrollFunc, false);
        }
        //滚动滑轮触发scrollFunc方法 //ie 谷歌 
        window.onmousewheel = document.onmousewheel = this.scrollFunc;
    }
    changeListOrder = (a, b) => {
        return b.code - a.code
    }
    scrollFunc = (e) => {
        e = e || window.event;
        if (e.wheelDelta) { //第一步：先判断浏览器IE，谷歌滑轮事件    
            if (e.wheelDelta > 0) { //当滑轮向上滚动时 
                this.setState({ navStyle: 'nav' });
            }
            if (e.wheelDelta < 0) { //当滑轮向下滚动时 
                this.setState({ navStyle: 'nav hidden' });
            }
        } else if (e.detail) { //Firefox滑轮事件 
            if (e.detail > 0) { //当滑轮向上滚动时 
                this.setState({ navStyle: 'nav' });
            }
            if (e.detail < 0) { //当滑轮向下滚动时 
                this.setState({ navStyle: 'nav hidden' });
            }
        }
    }

    render() {
        const { menuList, loading } = this.props;
        const { navStyle } = this.state;
        return loading
            ? <div>
                Loading...
            </div>
            : <div className={navStyle}>
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