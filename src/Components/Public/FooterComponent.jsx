import React, { Component } from 'react'

class FooterComponent extends Component {
    render() {
        return (
            <div className='footer'>
                <div className='footTop'>
                    <section>
                        <header>About</header>
                        <p>I am Wu Xinbo,a Front-end developer from Changchun & working in Shanghai</p>
                    </section>
                    <section>
                        <header>Contact</header>
                        <p>If you wish to contact me and say hello or give me feedback you can reach me at <a href="mailto:wuxinbowing@live.com"> wuxinbowing@live.com</a>
                        </p>
                    </section>
                </div>

                <div className='footBottom'>
                    Code by Wu Xinbo,Page Design by Jeremy Sallee
                </div>

            </div>
        )
    }
}
export default FooterComponent