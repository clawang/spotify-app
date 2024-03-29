import React, {useEffect, useState} from 'react';
import Vibrant from 'node-vibrant';

function CanvasGraphic(props) {
  const [appState, setAppState] = useState({
    palette: {}
  });

  const shortenString = (text, remove) => {
  	let index = text.indexOf('(');
  	if(index > 0) return text.substring(0, index);
		return text.substring(0, text.length-remove).concat('..');
	}

  const getColor = () => {
  	let src = '';
  	if(props.tracks) {
		src = props.artists[0].images[0].url || '';
	}
  	Vibrant.from(src).getPalette(function(err, palette) {
		if(palette) {
			setAppState({palette: palette});
			drawCanvas(palette);
		}
	});
  }

  const drawCanvas = (palette) => {
  	let c = document.getElementById("downloadable");
  	c.width = c.clientWidth * 2
	c.height = c.clientHeight * 2
  	let ctx = c.getContext("2d");
  	if(window.innerWidth < 600) {
  		ctx.scale(1.4, 1.4);
  	} else {
  		ctx.scale(2, 2);
  	}

  	if(palette.DarkMuted) {
  		const bgColor = palette.DarkMuted.getRgb();
		ctx.fillStyle = 'rgb(' + bgColor[0] + ',' + bgColor[1] + ',' + bgColor[2] + ')';
	} else {
		ctx.fillStyle = 'rgb(0,0,0)';
	}
	ctx.fillRect(0, 0, c.width, c.height);

	ctx.fillStyle = 'rgb(255,255,255)';
	ctx.font = "16px 'Circular Spotify'";

  	if(palette.Vibrant) {
  		const bgColor = palette.Vibrant.getRgb();
		ctx.fillStyle = 'rgb(' + bgColor[0] + ',' + bgColor[1] + ',' + bgColor[2] + ')';
	} else {
		ctx.fillStyle = 'rgb(226,28,164)';
	}
	ctx.fillText('QUARANTINE WRAPPED', 270, 50);
  	ctx.fillRect(30, 43, 230, 3);

  	const image = new Image();
  	image.crossOrigin = 'Anonymous';
  	if(props.tracks) {
		image.src = props.artists[0].images[0].url || '';
	}

	image.onload = () => {
		if(image.naturalWidth < image.naturalHeight) {
			const diff = (image.naturalHeight - image.naturalWidth) / 2;
			ctx.drawImage(image, 0, diff, image.naturalWidth, image.naturalWidth, 290, 90, 140, 140);
			ctx.drawImage(image, 0, diff, image.naturalWidth, image.naturalWidth, 280, 105, 160, 160);
			ctx.drawImage(image, 0, diff, image.naturalWidth, image.naturalWidth, 265, 125, 190, 190);
			ctx.drawImage(image, 0, diff, image.naturalWidth, image.naturalWidth, 250, 150, 220, 220);
		} else if(image.naturalWidth > image.naturalHeight) {
			const diff = (image.naturalWidth - image.naturalHeight) / 2;
			ctx.drawImage(image, diff, 0, image.naturalHeight, image.naturalHeight, 290, 90, 140, 140);
			ctx.drawImage(image, diff, 0, image.naturalHeight, image.naturalHeight, 280, 105, 160, 160);
			ctx.drawImage(image, diff, 0, image.naturalHeight, image.naturalHeight, 265, 125, 190, 190);
			ctx.drawImage(image, diff, 0, image.naturalHeight, image.naturalHeight, 250, 150, 220, 220);
		} else {
			ctx.drawImage(image, 290, 90, 140, 140);
			ctx.drawImage(image, 280, 105, 160, 160);
			ctx.drawImage(image, 265, 125, 190, 190);
			ctx.drawImage(image, 250, 150, 220, 220);
		}
	};

	if(palette.LightVibrant) {
  		const bgColor = palette.LightVibrant.getRgb();
		ctx.fillStyle = 'rgb(' + bgColor[0] + ',' + bgColor[1] + ',' + bgColor[2] + ')';
	} else {
		ctx.fillStyle = 'rgb(209,255,106)';
	}

	ctx.font = "18px 'Circular Spotify'";
	ctx.fillText('TOP ARTISTS', 30, 106);
	ctx.fillStyle = 'rgb(255,255,255)';
	ctx.font = "20px 'Circular Spotify'";

	for(let i = 0; i < 5; i++) {
		if(props.artists[i] && Object.keys(props.artists[i]).length != 0) {
			let name = props.artists[i].name;
			let metrics = ctx.measureText(name);
			let width = metrics.width;
			if(width > 200) {
				let ratio = width/name.length;
				let toRemove = Math.ceil((width-200)/ratio);
				name = shortenString(name, toRemove+1);
			}
			writeText(ctx, name, 30, 133 + i * 28);
		}
	}

	if(palette.LightVibrant) {
  		const bgColor = palette.LightVibrant.getRgb();
		ctx.fillStyle = 'rgb(' + bgColor[0] + ',' + bgColor[1] + ',' + bgColor[2] + ')';
	} else {
		ctx.fillStyle = 'rgb(209,255,106)';
	}

	ctx.font = "18px 'Circular Spotify'";
	writeText(ctx, 'TOP SONGS', 30, 320);
	ctx.fillStyle = 'rgb(255,255,255)';
	ctx.font = "20px 'Circular Spotify'";

	for(let i = 0; i < 5; i++) {
		if(props.tracks[i]) {
			let name = props.tracks[i].name;
			let metrics = ctx.measureText(name);
			let width = metrics.width;
			if(width > 200) {
				let ratio = width/name.length;
				let toRemove = Math.ceil((width-200)/ratio);
				name = shortenString(name, toRemove+1);
			}
			writeText(ctx, name, 30, 348 + i * 28);
		}
	}

	if(palette.LightVibrant) {
  		const bgColor = palette.LightVibrant.getRgb();
		ctx.fillStyle = 'rgb(' + bgColor[0] + ',' + bgColor[1] + ',' + bgColor[2] + ')';
	} else {
		ctx.fillStyle = 'rgb(209,255,106)';
	}
	ctx.font = "18px 'Circular Spotify'";
	writeText(ctx, 'TOP GENRE', 250, 430);
	ctx.fillStyle = 'rgb(255,255,255)';
	ctx.font = "24px 'Circular Spotify'";
	if(props.genres && props.genres[0][0]) {
		let g = props.genres[0][0];
		let topGenre = g.charAt(0).toUpperCase() + g.slice(1);
		writeText(ctx, topGenre, 250, 460);
	}

	if(palette.DarkVibrant) {
  		const bgColor = palette.DarkVibrant.getRgb();
		ctx.fillStyle = 'rgba(' + bgColor[0] + ',' + bgColor[1] + ',' + bgColor[2] + ', 50)';
	} else {
		ctx.fillStyle = 'rgb(255,255,255,50)';
	}
	ctx.font = "12px 'Circular Spotify'";
	writeText(ctx, 'bit.ly/quarantine-wrapped', 305, 66);
  }

  const writeText = (ctx, words, x, y) => {
  	ctx.fillText(words, x, y);
  }

  const dlCanvas = () => {
  	let canvas = document.getElementById("downloadable");
	let dt = canvas.toDataURL('image/png');
	/* Change MIME type to trick the browser to downlaod the file instead of displaying it */
	dt = dt.replace(/^data:image\/[^;]*/, 'data:application/octet-stream');

	/* In addition to <a>'s "download" attribute, you can define HTTP-style headers */
	dt = dt.replace(/^data:application\/octet-stream/, 'data:application/octet-stream;headers=Content-Disposition%3A%20attachment%3B%20filename=Canvas.png');
	var link = document.createElement('a');
  	link.download = 'quarantine-wrapped.png';
  	link.href = dt;
  	link.click();
  }

  useEffect(() => {
    if(props.finished >= 3) {
    	getColor();
    }
  }, [props.finished]);

  return (
    <div className='canvas-graphic-wrapper'>
	    <div className='canvas-graphic'>
	    	<div className='canvas-title'>
	    		<h1>Share with the world.</h1>
	    		<h3>Or hide it away forever.</h3>
	    		<h3>Your choice, really.</h3>
	    		<button onClick={dlCanvas} className='download-btn'>Download</button>
	    	</div>
	      <canvas id='downloadable' width='500' height='500'></canvas>
	      <div className="canvas-credit">Made with ♥ by <a href="https://clawang.github.io/" id="credit-link">Claire Wang</a>.</div>
      </div>
    </div>
  )
}

export default CanvasGraphic;
