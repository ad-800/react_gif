import React, { Component } from 'react';
import Gif from './gif';
import GifList from './gif-list';
import SearchBar from './search-bar';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }


  render () {
    const gifs = [
      { id: "yoJC2GnSClbPOkV0eA" },
      { id: "f6zPcCvDhvwze3lIAR" }
    ];
    return (
      <div>
        <div className="left-scene">
           < SearchBar />
           <div className="selected-gif">
              < Gif id="yoJC2GnSClbPOkV0eA" />
           </div>
        </div>
        <div className="right-scene">
          < GifList gifs={gifs} />
        </div>
      </div>
    );
  }
}

export default App;
