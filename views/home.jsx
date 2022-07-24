const React = require('react')
const Def = require('./default')

function home () {
    return (
        <def>
            <main>
                <h1>HOME</h1>
                <div>
                <img src='places/images/brenda-godinez-MsTOg6rhRVk-unsplash.jpg' alt='stock image'/>
                </div>
                <div>
                    Photo by <a href="https://unsplash.com/@cravethebenefits?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Brenda Godinez</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                </div>
                <a href="/places">
                <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </def>
    )
}

module.exports = home