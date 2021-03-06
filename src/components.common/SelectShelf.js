import React, { Component } from 'react'

import PropTypes from 'prop-types'

class SelectShelf extends Component {
  static propTypes = {
      val: PropTypes.string.isRequired,
      onShelfChange: PropTypes.func.isRequired
  }

  shelfOptions = [
    {value: "", label: "Move to...", isDisabled: true },
    {value: "currentlyReading", label: "Currently Reading", isDisabled: false },
    {value: "wantToRead", label: "Want to Read", isDisabled: false },
    {value: "read", label: "Read", isDisabled: false },
    {value: "none", label: "None", isDisabled: false },
  ]

  render(){
    const { val, onShelfChange } = this.props
    return (
      <div className="book-shelf-changer">
        <select value={val}
          onChange={ evt => onShelfChange(evt.target.value) }>
          {this.shelfOptions.map((option,i) =>
            <option key={i}
              value={option.value}
              disabled={option.isDisabled}>
              {option.label}
            </option>
          )}
        </select>
      </div>
    )
  }
}
export default SelectShelf;
