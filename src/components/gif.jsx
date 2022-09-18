import React, { Component } from 'react';

class Gif extends Component {
  handleClick = () => {
    if (this.props.changeSelected) {
      this.props.changeSelected(this.props.id);
    }
  }

  render() {
    const src = `https://media1.giphy.com/media/${this.props.id}/200.gif`;
    return (
      <img className="gif" src={src} alt="gif" onClick={this.handleClick} />
    );
  }
}

export default Gif;
