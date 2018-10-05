import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { ARTICLE_DETAIL_PATH } from '../../Constants/RouterConstants'
class ArticleListComponent extends Component {
    static propTypes = {
        articleList: PropTypes.array.isRequired,
        loading: PropTypes.bool.isRequired
    }
    render() {
        const { articleList, loading } = this.props;
        return loading
            ? <div>
                Loading...
            </div>
            : <div className='articleList'>
                <ul>
                    {
                        articleList.map((item, index) => {
                            return (
                                <li className='item' key={item.id}>
                                    <ul >
                                        {/* <Link to={ARTICLE_DETAIL_PATH.replace(":id", item.id)}>{item.name}</Link> */}
                                        {/* <li><a>{item.name}</a></li> */}
                                        <li className='itemName'><Link to={ARTICLE_DETAIL_PATH.replace(":id", item.id)}>{item.name}</Link></li>
                                        <li className='description'>{item.description}</li>
                                        <li className='date'>{item.publishdate}</li>
                                    </ul>
                                </li>
                            )
                        })
                    }
                </ul>
                {/* <table>
                    <tbody>
                        {
                            articleList.map((item, index) => {
                                return (
                                    <tr key={item.id}>
                                        <td><Link to={ARTICLE_DETAIL_PATH.replace(":id", item.id)}>{item.name}</Link></td>
                                        <td>{item.publishdate}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table> */}
            </div>

    }
}
export default ArticleListComponent;

