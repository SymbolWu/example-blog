import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ArticleDetailPageView extends Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        authorAvatar: PropTypes.string.isRequired,
        publishdate: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        loading: PropTypes.bool.isRequired,
        fetchSingleArticle: PropTypes.func.isRequired,
        description: PropTypes.string.isRequired
    }
    componentWillMount() {
        const { setSingleArticle } = this.props;
        setSingleArticle({
            id: '',
            title: '',
            author: '',
            authorAvatar: '',
            publishdate: '',
            content: '',
            description: ''
        }, true);
        console.log('this.props.location.pathname:',this.props.location.pathname);
    }
    componentDidMount() {
        const { fetchSingleArticle } = this.props;
        let articleId = this.props.match.params.id;
        fetchSingleArticle(articleId);
    }
    render() {
        const { title, author, authorAvatar, publishdate, content, loading, description } = this.props;
        console.log('authorAvatar:', authorAvatar, ' author:', author);
        return loading
            ? <div>
                Loading...
              </div>
            : <div className='articleDetail'>
                <article>

                    <div className='headerContainer'>
                        <header>
                            <section>
                                <h1>{title}</h1>
                                <aside>{description}</aside>
                                {/* <img src={authorAvatar} alt={author} />
                                <p>{author}</p> */}
                                <time>{publishdate}</time>
                            </section>
                        </header>
                    </div>
                    <div className='content'>
                        <p>{content}</p>
                    </div>
                    <div className='articleFooter'>
                        <h1>END</h1>
                    </div>

                </article>
            </div>

    }
}
export default ArticleDetailPageView;