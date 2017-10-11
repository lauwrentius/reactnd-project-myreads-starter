import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'


class SearchBook extends Component {
  static propTypes = {
    searchVal: PropTypes.string.isRequired,
    onBookSearch: PropTypes.func.isRequired
  }
  state = {
    inputVal: ""
  }
  
  componentWillMount(){
      this.setState({inputVal: this.props.searchVal})
  }
  componentWillReceiveProps(nextProps){
    if(this.state.inputVal !== nextProps.searchVal)
      this.setState({inputVal: nextProps.searchVal})
  }

  handleChange = (evt) => {
    this.setState({inputVal: evt.target.value});
  }
  onSubmit = (evt) => {
    evt.preventDefault();
    this.props.onBookSearch(this.state.inputVal)
  }

  render() {
    return (
      <div className="search-books-bar">
        <Link to='/' className="close-search">Close</Link>
        <form onSubmit={this.onSubmit} className="search-books-input-wrapper">
          <input type="text"
            value={this.state.inputVal}
            onChange={this.handleChange}
            placeholder="Search by title or author"/>
        </form>
        <div>{JSON.stringify(this.state)}</div>
        <div>{JSON.stringify(this.props)}</div>
      </div>
    )
  }
}

export default SearchBook;
