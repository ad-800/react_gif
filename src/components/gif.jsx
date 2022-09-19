import React, { Component } from 'react';

class Gif extends Component {
  clicked = () => {
    this.props.changeGif(this.props.id);
  }

  render() {
    const src = `https://media3.giphy.com/media/${this.props.id}/200.gif`;
    return (
      <div className='selected-gif'>
        <img src={src} alt="gif" className='gif' onClick={this.clicked} />
      </div>
    );
  }
}

export default Gif;
