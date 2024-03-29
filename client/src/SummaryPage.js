import React, {useEffect, useState} from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import TopArtists from './TopArtists';
import TopSongs from './TopSongs';
import TopGenres from './TopGenres';
import CanvasGraphic from './CanvasGraphic';
import {sortGenres, arrToList, propToArr} from './analyzeData';
import Div100vh from 'react-div-100vh';
import Loading from './Loading';

function SummaryPage(props) {
  const [appState, setAppState] = useState({
    chosen: false,
    timeframe: 2,
    tracks: [{}]
  });

  const [artists, setArtists] = useState([{}]);

  const [loaded, setLoaded] = useState(0);

  const [genres, setGenres] = useState([{}]);

  const [location, setLocation] = useState(1);

  const [error, setError] = useState(0);

  const spotifyApi = new SpotifyWebApi();
  spotifyApi.setAccessToken(props.token);

  const ranges = {
    1: 'short_term',
    2: 'medium_term',
    3: 'long_term'
  };

  const colors = {
    green: '#d1ff6a',
    seagreen: '#48937e',
    pink: '#e21ca4',
    black: '#191414'
  }

  useEffect(() => {
    //setAppState({timeframe:2});
  }, [setAppState]);

  const updateTimeframe = (time) => {
    setAppState({...appState, timeframe: time, chosen: true});
  }

  const updateTracks = (newTracks) => {
    setAppState({...appState, tracks: newTracks});
    setLoaded(loaded => loaded + 1);
  }

  const updateArtists = (newArtists) => {
    setArtists(newArtists);
    setLoaded(loaded => loaded + 1);
  }

  const updateGenres = (newGenres) => {
    let g = sortGenres(newGenres);
    setGenres(g);
    setLoaded(loaded => loaded + 1);
  }

  const handleScroll = () => {
    var container = document.querySelector(".full-height");
    let topSongs = document.querySelector('.top-songs-wrapper');
    let topGenres = document.querySelector('.genres-wrapper');
    let graphic = document.querySelector('.canvas-graphic-wrapper');
    let bg = document.querySelector('.summary-bg');
    if(container.scrollTop < topSongs.offsetTop - 500) {
      bg.style.backgroundColor = colors.pink;
      setLocation(1);
    } else if(container.scrollTop >= topSongs.offsetTop - 500 && container.scrollTop < topGenres.offsetTop - 500) {
      bg.style.backgroundColor = colors.black;
      setLocation(2);
    } else if(container.scrollTop >= topGenres.offsetTop - 500 && container.scrollTop < graphic.offsetTop - 500) {
      bg.style.backgroundColor = colors.green;
      setLocation(3);
    } else if(container.scrollTop >= graphic.offsetTop - 500) {
      bg.style.backgroundColor = colors.seagreen;
      setLocation(4);
    }
  }

  return (
    <div className="summary">
    {
      appState.chosen ?
        <div>
          {loaded < 3 ? 
            <Div100vh>
              <Loading state={error} /> 
            </Div100vh>
            : 
            <></>
          }
          <div className="credit">Made with ♥ by <a href="https://clawang.github.io/" id="credit-link">Claire Wang</a>.</div>
          <div className="navigation"><p>{location} / 4</p></div>
          <div className="summary-content">
            <Div100vh className="full-height" onScroll={handleScroll}>
              <TopArtists token={props.token} timeframe={ranges[appState.timeframe]} updateArtists={updateArtists} setError={setError} />
              <TopSongs token={props.token} timeframe={ranges[appState.timeframe]} updateTracks={updateTracks}  />
              <TopGenres token={props.token} timeframe={ranges[appState.timeframe]} updateGenres={updateGenres} />
              <CanvasGraphic artists={artists} tracks={appState.tracks} genres={genres} finished={loaded} />
            </Div100vh>
          </div>
          <div className="summary-bg"></div>
        </div>
        :
        <Div100vh>
          <div className="time-selection">
            <h1>See data from the past:</h1>
            <div className="time-selection-buttons">
              <button onClick={() => updateTimeframe(1)}>4 Weeks</button>
              <button onClick={() => updateTimeframe(2)}>6 Months</button>
              <button onClick={() => updateTimeframe(3)}>2 Years</button>
            </div>
          </div>
        </Div100vh>
      }
    </div>
      
  )
}

export default SummaryPage;
