import React from 'react'

//----------------------------------------------//

const SubmitItemForm = props => {
  const { url, title, text } = props

  return (
    <div>
      <form className="submit-item" onSubmit={props.handleSubmit}>
        <div className="row">
          <div className="six columns">
            <label htmlFor="title">title</label>
            <input
              className="u-full-width"
              type="text"
              id="title"
              onChange={props.handleChange}
              value={title}
            />
          </div>
        </div>
        <div className="row">
          <div className="six columns">
            <label htmlFor="url">url</label>
            <input
              className="u-full-width"
              type="url"
              id="url"
              onChange={props.handleChange}
              value={url}
            />
          </div>
        </div>

        <div className="row">
          <div className="six columns">
            <label htmlFor="text">text</label>
            <textarea
              className="u-full-width"
              id="text"
              rows="10"
              onChange={props.handleChange}
              value={text}
            />
          </div>
        </div>

        <input className="button-primary" type="submit" value="Submit" />
      </form>
    </div>
  )
}

//----------------------------------------------//

export default SubmitItemForm
