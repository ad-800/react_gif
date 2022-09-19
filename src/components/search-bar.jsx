import React, { Component } from 'react';

class SearchBar extends Component {
  changeUpdate = (event) => {
    this.props.searchFunction(event.target.value);
  }

  render() {
    return (
      <input type="text" className="form-search form-control" onChange={this.changeUpdate} />
    );
  }
}

export default SearchBar;
