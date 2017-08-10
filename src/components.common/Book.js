import React, { Component } from 'react';
import PropTypes from 'prop-types'

import SelectShelf from './SelectShelf'

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    onShelfChange: PropTypes.func
  }

  state = {
    selected: false
  }
  onShelfChange(evt){
    //const { book, onShelfChange } = this.props

    console.log("BOOK", evt)
    this.prop.onShelfChange(this.prop.book, evt)
    //onShelfChange(book, evt)
  }

  render() {
    const { book } = this.props

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{
              width: 128, height: 193,
              backgroundImage: `url(${book.imageLinks.smallThumbnail})`
            }}>
          </div>
          <SelectShelf
            onShelfChange={this.onShelfChange}
            val={book.shelf}>
            </SelectShelf>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">
          {book.authors.map((author, i)=>
            <span key={i} className="book-author">{author}</span>
          )}
        </div>
      </div>
    )
  }
}
export default Book;
/*
<!option value="none" disabled>Move to...</option>
<option value="currentlyReading">Currently Reading</option>
<option value="wantToRead">Want to Read</option>
<option value="read">Read</option>
<option value="none">None</option>*/
