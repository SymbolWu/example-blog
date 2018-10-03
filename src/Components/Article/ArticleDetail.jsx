import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ArticleDetail extends Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        authorAvatar: PropTypes.string.isRequired,
        publishdate: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        // articleBody:PropTypes.object.isRequired,
        loading: PropTypes.bool.isRequired,
        fetchSingleArticle: PropTypes.func.isRequired
    }
    componentDidMount() {
        let id = '123123123';
        const { fetchSingleArticle } = this.props;
        fetchSingleArticle(id);
    }
    render() {
        const { title, author, authorAvatar, publishdate, content, loading } = this.props;
        console.log('ArticleDetailLoading:',loading);
        return loading
            ? <div>
                Loading...
              </div>
            : <div>
                <article>
                    <header>
                        <h1>{title}</h1>
                        <img src={authorAvatar} alt={author}/>
                        <p>{author}</p>
                        <p>
                            <time>{publishdate}</time>
                        </p>
                    </header>
                    <p>{content}</p>
                </article>
            </div>


    }
}
export default ArticleDetail;