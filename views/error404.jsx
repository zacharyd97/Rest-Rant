const React = require('react')
const def = require('./default')

function error404 () {
    return (
        <def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find this page!</p>
            </main>
        </def>
    )
}

module.exports = error404