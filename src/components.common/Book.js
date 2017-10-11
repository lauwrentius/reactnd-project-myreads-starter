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

  render() {
    const { book, onShelfChange } = this.props

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{
              width: 128, height: 193,
              backgroundImage: `url(${book.imageLinks.smallThumbnail})`
            }}>
          </div>
          <SelectShelf
            onShelfChange={onShelfChange}
            val={(book.shelf!=undefined)?book.shelf:"none"}>
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
