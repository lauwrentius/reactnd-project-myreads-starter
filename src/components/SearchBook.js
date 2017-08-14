import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import PropTypes from 'prop-types'

class SearchBook extends Component {
  static propTypes = {
    onBookSearch:  PropTypes.func.isRequired
  }
  render() {
    return (
      <div className="search-books-bar">
        <Link to='/' className="close-search">Close</Link>
        <div className="search-books-input-wrapper">
          <input type="text" placeholder="Search by title or author"/>
        </div>
      </div>
    )
  }
}

export default SearchBook;
