const React = require('react')
//const def = require('./default')

function index (data) {
    let placesFormatted = data.places.map((places) => {
        return (
            <div>
                <h2>{places.name}</h2>
                <img src={places.pic} alt={places.name}/>
            </div>
        )
    })
    return (
        <def>
            <main>
                <h1> PLACES INDEX PAGE</h1>
                {placesFormatted}
            </main>
        </def>
    )
}

module.exports = index