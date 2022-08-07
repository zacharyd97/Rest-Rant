const React = require('react')
const Def = require('../default')

function show (data) {
  let comments = (
    <h3 className='inactive'>
      No Comments yet!
    </h3>
  )
  let rating = (
    <h3 className='inactive'>Not yet rated</h3>
  )
    if (data.place.comments.length) {
      let sumRatings = data.place.comments.reduce((tot, c) => {
        return tot + c.stars
      }, 0 )
      let averageRating = Math.round(sumRatings / data.place.comments.length)
      let stars = ''
      for(let i = 0; i < averageRating; i++) {
        stars += '⭐'
        }
      rating = (
        <h3>
          {stars} stars
        </h3>
        )
      }
      comments = data.place.comments.map(c => {
        return (
          <div className="border">
            <h2 className="rant">{c.rant ? 'Rant! 👿' : 'Rave! 🙌'}</h2>
            <h4>{c.content}</h4>
            <h3>
              <stong>- {c.author}</stong>
            </h3>
            <h4>Rating: {c.stars}</h4>
            <form method='POST' action={`/places/${data.place.id}/comment/${c.id}?_method=DELETE`}>
              <input type="submit" className='btn btn-danger' value='Delete Comment'/>
            </form>
          </div>
        )
      })
    return (
        <Def>
          <main>
            <div className='row'>
            <div className='col-sm-6'>
            <img src={data.place.pic} alt="pic of place"/>
            <h3>
              Located in {data.place.city}, {data.place.state}
            </h3>
            </div>
            <div className='col-sm-6'>
            <h1>{data.place.name}</h1>
            <h2>Rating</h2>
            {rating}
            <h2>Not Rated</h2>
            <h2>Description</h2>
            <h4>
            {data.place.showEstablished()}
              serving {data.place.cuisines}
            </h4>
            <a href={`/places/${data.place.id}/edit`} className="btn btn-warning"> 
              Edit
            </a>     
            <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}> 
              <button type="submit" className="btn btn-danger">
                Delete
              </button>
            </form>
            </div>
            </div>   
            <h2>Comments</h2>
            {comments}  
            <form method="POST" action={`/places/${data.place.id}/comment`}>
            <div>
              <label htmlFor="author">Author</label>
              <input className="form-control" id="author" name="author" value={data.place.comments.author} required />
            </div>
            <select name='rant' id='rant' defaultValue={data.place.comments.rant}>
              <option value={data.place.comments.rant}>True</option>
              <option value={data.place.comments.rant}>False</option>
            </select>
            <div>
              <label htmlFor="stars">Stars</label>
              <input className="form-control" id="stars" name="stars" value={data.place.comments.stars} required />
            </div>
            <div>
              <label htmlFor="content">content</label>
              <input className="form-control" id="content" name="content" value={data.place.comments.content} required />
            </div>
            <input type="submit"/>
            </form>
          </main>
        </Def>
    )
}

module.exports = show
