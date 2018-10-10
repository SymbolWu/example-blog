import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import PubSub from 'pubsub-js'
import { LINKEDIN } from '../../Constants/ThirdLink'
class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navStyle: 'nav',
            isHome: false
        }
    }
    static propTypoes = {
        loading: PropTypes.bool.isRequired,
        menuList: PropTypes.array.isRequired,
        fetchMenusRequest: PropTypes.func.isRequired
    }
    /**
     * LifeCycle
     */
    componentDidMount() {
        //请求菜单数据
        this.props.fetchMenusRequest();
        //给页面绑定滑轮滚动事件 
        if (document.addEventListener) {  //给页面绑定滑轮滚动事件 -firefox 
            document.addEventListener('DOMMouseScroll', this.scrollFunc, false);
        }
        window.onmousewheel = document.onmousewheel = this.scrollFunc;//滚动滑轮触发scrollFunc方法 -ie 谷歌 
        //订阅消息
        this.pubSub_token = PubSub.subscribe('sendPathName', (title, message) => {
            message === '/'
                ? this.setState({
                    isHome: true
                })
                : this.setState({
                    isHome: false
                });
        })
    }
    componentWillUnmount() {
        PubSub.unsubscribe(this.pubSub_token);
    }
    changeListOrder = (a, b) => {
        return b.code - a.code
    }

    /**
     * Customer Function
     */
    setNavStyle = (scrollNumber, scrollTop, isHome) => {
        scrollNumber > 0
            ? isHome && scrollTop === 0
                ? this.setState({ navStyle: 'nav clear' })
                : this.setState({ navStyle: 'nav' })
            : this.setState({ navStyle: 'nav hidden' });
    }
    scrollFunc = (e) => {
        e = e || window.event;
        let scrollTop = document.documentElement.scrollTop;
        const { isHome } = this.state;
        if (e.wheelDelta) { //第一步：先判断浏览器IE，谷歌滑轮事件    
            this.setNavStyle(e.wheelDelta, scrollTop, isHome);
        } else if (e.detail) { //Firefox滑轮事件 
            this.setNavStyle(e.detail, scrollTop, isHome);
        }
    }

    /**
     * render UI
     */
    render() {
        const { menuList, loading } = this.props;
        const { navStyle } = this.state;
        //console.log('isHome:',isHome);
        return loading
            ? <div>
                Loading...
            </div>
            : <div className={navStyle}>
                <div className='logo'>
                    <Link to={'/'}>S</Link>
                </div>
                <div className='thirdLink'>
                    <a href={LINKEDIN}>IN</a>
                </div>
                <ul>
                    {
                        menuList.sort(this.changeListOrder).map((item, index) => {
                            return (
                                <li key={item.id} ><Link to={item.id === '0' ? '/' : `/${item.name}`} replace>{item.label}</Link></li>
                            )
                        })
                    }
                </ul>

            </div>

    }
}
export default Nav;