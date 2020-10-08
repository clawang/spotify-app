import React, {useEffect, useState} from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import TopArtists from './TopArtists';
import TopSongs from './TopSongs';
import TopGenres from './TopGenres';
import CanvasGraphic from './CanvasGraphic';
import {sortGenres, arrToList, propToArr} from './analyzeData';
import Div100vh from 'react-div-100vh';

function SummaryPage(props) {
  const [appState, setAppState] = useState({
    timeframe: 0,
    tracks: [{}]
  });

  const [artists, setArtists] = useState([{}]);

  const [loaded, setLoaded] = useState(0);

  const [genres, setGenres] = useState([{}]);

  const [location, setLocation] = useState(1);

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
    setAppState({timeframe:2});
    //let vh = window.innerHeight * 0.01;
    //document.documentElement.style.setProperty('--vh', `${vh}px`);
  }, [setAppState]);

  // window.addEventListener('load', () => {
  //   updateHeight();
  // });

  // window.addEventListener('resize', () => {
  //   let vh = window.innerHeight * 0.01;
  //   document.documentElement.style.setProperty('--vh', `${vh}px`);
  //   updateHeight();
  // });

  const updateHeight = () => {
    // let h = window.innerHeight;
    // document.querySelector('.top-songs-wrapper').height = h;
    // document.querySelector('.top-artists-wrapper').height = h;
    // document.querySelector('.genres-wrapper').height = h;
    // document.querySelector('.canvas-graphic-wrapper').height = h;
  }

  const updateTracks = (newTracks) => {
    setAppState({timeframe: appState.timeframe, tracks: newTracks});
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
    var container = document.querySelector(".summary-content");
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
    <div>
      {(appState.timeframe === 0) ?
        <div className="options">
          <div onClick={() => setAppState({timeframe:1})}><h2>4 Weeks</h2></div>
          <div onClick={() => setAppState({timeframe:2})}><h2>6 months</h2></div>
          <div onClick={() => setAppState({timeframe:3})}><h2>All Time</h2></div>
        </div>
        :
        <div className="summary">
          <Div100vh>
            <div className="credit">Made with ♥ by <a href="https://clawang.github.io/" id="credit-link">Claire Wang</a>.</div>
            <div className="navigation"><p>{location} / 4</p></div>
            <div className="summary-content" onScroll={handleScroll}>
              <TopArtists token={props.token} timeframe={ranges[appState.timeframe]} updateArtists={updateArtists}  />
              <TopSongs token={props.token} timeframe={ranges[appState.timeframe]} updateTracks={updateTracks}  />
              <TopGenres token={props.token} timeframe={ranges[appState.timeframe]} updateGenres={updateGenres} />
              <CanvasGraphic artists={artists} tracks={appState.tracks} genres={genres} finished={loaded} />
            </div>
            <div className="summary-bg"></div>
          </Div100vh>
        </div>
      }
    </div>
  )
}

export default SummaryPage;
