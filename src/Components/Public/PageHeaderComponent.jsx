import React, { Component } from 'react'
import PropTypes from 'prop-types'

class PageHeaderComponent extends Component {
    static propTypes = {
        pageName: PropTypes.string.isRequired,
        pageDescription: PropTypes.string.isRequired
    }
    render() {
        const { pageName, pageDescription } = this.props;
        return (
            <div className='pageHeader'>
                <header>{pageName}</header>
                <p>{pageDescription}</p>
            </div>
        )
    }
}
export default PageHeaderComponent