import React,{ Component } from 'react';

class NotFoundPageView extends Component{
    render(){
        return(
            <div className='notFound'>

                <div className='headerContainer'>
                    <header>
                        <section>
                            <h1>Page Not Found</h1>
                            <aside>
                                We couldn't find what you were looking for.<br/>
                                Please contact the owner of the site that linked you to the original URL and let them know their link is broken.
                            </aside>
                        </section>
                    </header>
                </div>
            </div>
        )
    }
}
export default NotFoundPageView
