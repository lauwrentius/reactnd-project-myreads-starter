import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SelectShelf from './SelectShelf'
import Book from './Book'

class Shelf extends Component {
  static propTypes = {
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      books: PropTypes.array.isRequired
  }

  onBookShelfChange(evt, book){
    console.log("SHELF", evt, book)
  }
  render(){
    //console.log( this.props)
    /*
    <option value="none" disabled></option>
    <option selected={} value="currentlyReading"></option>
    <option value="wantToRead"></option>
    <option value="read">Read</option>
    <option defaultValue value="none">None</option>*/

    let bookFilter
    const { id, title, books } = this.props
    bookFilter = books.filter(book => book.shelf === id)

    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">
          {title}
          <span className="bookshelf-select">
          /*  <SelectShelf val={id}>
            </SelectShelf>*/
          </span>
        </h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {bookFilter.map( book =>(
              <li key={book.id}>
                <label>
                  <input
                    className="shelf-checkbox"
                    type="checkbox"
                    name="chk_group"
                    value="value1" />
                  <Book onShelfChange={this.onBookShelfChange}
                    book={book}></Book>
                </label>
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}
export default Shelf;
