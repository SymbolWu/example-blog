import React, { Component } from 'react'
class BackTopComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            backStyle: 'backTop'
        }
    }

    componentDidMount() {
        window.onscroll = () => {
            let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            let clientHeight = document.documentElement.clientHeight;
            let style = scrollTop > clientHeight ? 'backTop show' : 'backTop';
            this.setState({ backStyle: style });
        }
    }
    backToTop = () => {
        //document.documentElement.scrollTop = 0;
        window.scrollTo(0, 0);
    }
    render() {
        const { backStyle } = this.state;
        return (
            <a className={backStyle} onClick={this.backToTop}>
                /|\
            </a>
        )
    }
}
export default BackTopComponent