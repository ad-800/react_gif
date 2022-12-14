import React, { Component } from 'react';
import giphyApi from 'giphy-api';
import SearchBar from './search-bar';
import Gif from './gif';
import GifList from './gif-list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGif: "SwIMZUJE3ZPpHAfTC4",
    };
  }

  changeGif = (id) => {
    this.setState({
      selectedGif: id
    });
  }

  search = (query) => {
    giphyApi('QjtJklp0LHcaFVD6ptl56nfXB94FXYxB').search({
      q: query,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      this.setState({
        gifs: res.data
      });
    });
  };

  render() {
    return (
      <div>
        <div className='left-scene'>
          <SearchBar searchFunction={this.search} />
          <Gif id={this.state.selectedGif} />
        </div>
        <div className='right-scene'>
          <GifList gifs={this.state.gifs} changeGif={this.changeGif} />
        </div>
      </div>
    );
  }
}

export default App;
