import React, { Component } from 'react';
import giphy from 'giphy-api';
import Gif from './gif';
import GifList from './gif-list';
import SearchBar from './search-bar';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: 'yoJC2GnSClbPOkV0eA'
    };
    this.search = this.search.bind(this);
    this.changeSelected = this.changeSelected.bind(this);
  }

  search = (query) => {
    giphy('APIKEY').search({
      q: query,
      rating: 'g'
    }, (err, res) => {
      this.setState({
        gifs: res.data
      });
    });
  }

  changeSelected = (newId) => {
    this.setState({
      selectedGifId: newId
    });
  }

  render () {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} changeSelected={this.changeSelected} />
        </div>
      </div>
    );
  }
}

export default App;
