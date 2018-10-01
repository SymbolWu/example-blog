import React, { Component } from 'react';
import PropTypes from 'prop-types'

class ArticleListForm extends Component {
    static propTypes = {
        articleList: PropTypes.array.isRequired,
        loading: PropTypes.bool.isRequired
    }
    render() {
        const { articleList } = this.props;
        return (
            <div>
                <table>
                    <tbody>
                        {
                            articleList.map((item, index) => {
                                return (
                                    <tr key={item.id}>
                                        <td>{item.name}</td>
                                        <td>{item.publishdate}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
export default ArticleListForm;
