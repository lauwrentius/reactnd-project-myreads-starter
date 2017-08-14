import React, { Component } from 'react'
import { Link, Route, Router } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import PropTypes from 'prop-types'


class SearchBook extends Component {
  static propTypes = {
    onBookSearch: PropTypes.func.isRequired
  }
  state = {
    searchVal: ""
  }
  handleChange = (evt) => {
    this.setState({searchVal: evt.target.value});
  }
  onSubmit = (evt) => {
    evt.preventDefault();
    console.log("SUBMIT")
    this.props.onBookSearch(this.state.searchVal)
  }
  history = createBrowserHistory()
  render() {
    return (
      <div className="search-books-bar">
        <Link to='/' className="close-search">Close</Link>
        <form onSubmit={this.onSubmit}>
          <div className="search-books-input-wrapper">
            <input type="text"
              value={this.state.searchVal}
              onChange={this.handleChange}
              placeholder="Search by title or author"/>
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBook;
