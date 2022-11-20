const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <head>
                <link rel="stylesheet" href="/css/home.css"/>
            </head>
            <main>
                <div id='home'>
                    <h1>Home Page</h1>
                    <div>
                        <img className='pic' src="/images/chia.jpg" alt="Chia Fruit Shake" />
                    </div>
                    <a href="/places">
                        <button className="btn-primary">Places Page</button>
                    </a>
                </div>
            </main>
        </Def>
    )
}

module.exports = home
