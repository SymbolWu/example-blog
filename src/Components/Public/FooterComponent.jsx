import React, { Component } from 'react'

class FooterComponent extends Component {
    render() {
        return (
            <div className='footer'>
                <section>
                    <header>About</header>
                    <p>I am Wu Xinbo,a Front-end developer from Changchun & working in Shanghai</p>
                </section>
                <section>
                    <header>Contact</header>
                    <p>If you wish to contact me and say hello or give me feedback you can reach me at 
                        <a href="mailto:wuxinbowing@live.com"> wuxinbowing@live.com</a>
                    </p>
                </section>
                <span>
                    <p>Code by Wu Xinbo,Page Design by Jeremy Sallee</p>
                </span>
            </div>
        )
    }
}
export default FooterComponent