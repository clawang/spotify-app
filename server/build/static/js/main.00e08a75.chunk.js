(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{199:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(68),i=a.n(l),s=(a(75),a(1)),c=(a(76),a(2)),o=a.n(c);function m(e){var t=[];for(var a in e)"pop"!==a&&"edm"!==a&&"rap"!==a&&t.push([a,e[a]]);return t.sort((function(e,t){return t[1]-e[1]})),t}function u(e,t){e.hasOwnProperty(t)?e[t]++:e[t]=1}function d(e,t){for(var a=0,n=0,r=[],l=e.length-1;a<t&&a<l;){if(e[n]){var i=e[n][0];"pop"!==i&&"edm"!==i&&"rap"!==i?(r.push(i),a++):l-=1}n++}return r}function g(e,t){var a="";return e.forEach((function(n,r){a+=n[t],r<e.length-1&&(a+=", ")})),a}var f=a(13);function h(e){Object(n.useEffect)((function(){t()}),[]);var t=function(){document.querySelectorAll(".img3, .img2, .img1").forEach((function(e){var t=e.clientWidth;e.style.height=t+"px"}))};return window.addEventListener("resize",(function(){t()})),r.a.createElement("div",{className:"artist-images"},r.a.createElement("img",{src:e.artist.images[0].url,className:"img1",alt:e.artist.name}),r.a.createElement("img",{src:e.artist.images[0].url,className:"img2",alt:e.artist.name}),r.a.createElement("img",{src:e.artist.images[0].url,className:"img3",alt:e.artist.name}))}var p=function(e){var t=Object(n.useState)({topArtists:[{}]}),a=Object(s.a)(t,2),l=a[0],i=a[1],c=new o.a;return c.setAccessToken(e.token),Object(n.useEffect)((function(){!function(){var t={time_range:e.timeframe};c.getMyTopArtists(t,(function(t,a){t?e.setError(1):(i({topSongs:l.topSongs,topArtists:a.items}),e.updateArtists(a.items))}))}()}),[i]),r.a.createElement("div",{className:"top-artists-wrapper"},l.topArtists[0].name?r.a.createElement("div",{className:"top-artists"},r.a.createElement("h1",null,"Top Artists"),r.a.createElement("div",{className:"artists-wrapper"},l.topArtists.slice(0,3).map((function(e,t){return r.a.createElement("div",{className:"artist-wrapper",key:t},r.a.createElement(h,{artist:e}),r.a.createElement("div",{className:"artist-desc"},r.a.createElement("h3",{className:"black"},"#",t+1),r.a.createElement("h3",{className:"green"},e.name)))})))):r.a.createElement("p",null,"Loading..."))};function v(e){return r.a.createElement("div",{className:"song-cover song-"+e.index,onMouseOver:e.handleHover,onMouseLeave:e.handleMouseLeave},r.a.createElement("img",{src:e.src,alt:e.name}))}var E=function(e){var t=Object(n.useState)({topSongs:[{}]}),a=Object(s.a)(t,2),l=a[0],i=a[1],c=Object(n.useState)({name:"",artists:[{}],number:0}),m=Object(s.a)(c,2),u=m[0],d=m[1],f=Object(n.useState)(!1),h=Object(s.a)(f,2),p=h[0],E=h[1],b=new o.a;b.setAccessToken(e.token);var w=function(e,t,a){d({name:e,artists:t,number:a})};return Object(n.useEffect)((function(){!function(){var t={time_range:e.timeframe};b.getMyTopTracks(t).then((function(t){i({topSongs:t.items}),e.updateTracks(t.items)}))}(),window.innerWidth<800&&E(!0)}),[i]),window.addEventListener("resize",(function(){window.innerWidth<800?E(!0):E(!1)})),r.a.createElement("div",{className:"top-songs-wrapper"},l.topSongs[0].name?r.a.createElement("div",{className:"top-songs"},r.a.createElement("div",{className:"songs-header"},r.a.createElement("div",{className:"songs-header-wrapper"},r.a.createElement("h2",null,"You loved these songs the most."))),r.a.createElement("div",{className:"songs-text-wrapper"},p?l.topSongs.slice(0,5).map((function(e,t){return r.a.createElement("div",{className:"song-wrapper",key:t},r.a.createElement("div",{className:"song-number"},r.a.createElement("h3",null,t+1)),r.a.createElement("div",{className:"song-details"},r.a.createElement("h3",{className:"song-details-title"},e.name),r.a.createElement("p",{className:"song-details-artists"},g(e.artists,"name"))))})):r.a.createElement("p",null)),r.a.createElement("div",{className:"songs-wrapper"},r.a.createElement("div",{className:"songs-3d"},l.topSongs.slice(0,p?5:10).map((function(e,t){return r.a.createElement(v,{src:e.album.images[0].url,name:e.name,index:t,key:t,handleHover:function(){return w(e.name,e.artists,t)},handleMouseLeave:function(){return w("",[{}],0)}})})))),r.a.createElement("div",{className:"featured-song-container"},u.name?r.a.createElement("div",{className:"featured-song"},r.a.createElement("h3",{className:"featured-song-number"},u.number+1),r.a.createElement("h3",{className:"featured-song-title"},u.name),r.a.createElement("p",{className:"featured-song-artist"},g(u.artists,"name"))):r.a.createElement("p",null))):r.a.createElement("p",null,"Loading..."))};var b=function(e){var t=Object(n.useState)({genres:{}}),a=Object(s.a)(t,2),l=a[0],i=a[1],c=[{}],g=new o.a;g.setAccessToken(e.token),Object(n.useEffect)((function(){!function(){var t={time_range:e.timeframe};g.getMyTopArtists(t).then((function(e){c=e.items,i({genres:l.genres}),f()}))}()}),[i]);var f=function(){c.forEach((function(e){e.genres&&e.genres.forEach((function(e){var t=l.genres;u(t,e),i({genres:t})}))})),e.updateGenres(l.genres)};return r.a.createElement("div",{className:"genres-wrapper"},r.a.createElement("div",{className:"genres"},r.a.createElement("h2",null,"Your Top Niche Genres"),r.a.createElement("p",null,"Ever wondered what subgenres of music you listen to most often?"),r.a.createElement("div",{className:"genre-level-wrapper"},function(e){if(Object.keys(e).length>0){var t=[],a=d(m(e),5).map((function(e,t){return r.a.createElement("div",{className:"genre-level",key:t},r.a.createElement("div",{className:"genre-level-front"},r.a.createElement("h3",null,e)),r.a.createElement("div",{className:"genre-level-side"}))}));return t[0]=a[4],t[1]=a[3],t[2]=a[1],t[3]=a[0],t[4]=a[2],t}return r.a.createElement("p",null,"N/A")}(l.genres))))},w=a(69),y=a.n(w);var N=function(e){var t=Object(n.useState)({palette:{}}),a=Object(s.a)(t,2),l=(a[0],a[1]),i=function(e,t){var a=e.indexOf("(");return a>0?e.substring(0,a):e.substring(0,e.length-t).concat("..")},c=function(t){var a=document.getElementById("downloadable");a.width=2*a.clientWidth,a.height=2*a.clientHeight;var n=a.getContext("2d");if(window.innerWidth<600?n.scale(1.4,1.4):n.scale(2,2),t.DarkMuted){var r=t.DarkMuted.getRgb();n.fillStyle="rgb("+r[0]+","+r[1]+","+r[2]+")"}else n.fillStyle="rgb(0,0,0)";if(n.fillRect(0,0,a.width,a.height),n.fillStyle="rgb(255,255,255)",n.font="16px 'Circular Spotify'",t.Vibrant){var l=t.Vibrant.getRgb();n.fillStyle="rgb("+l[0]+","+l[1]+","+l[2]+")"}else n.fillStyle="rgb(226,28,164)";n.fillText("QUARANTINE WRAPPED",270,50),n.fillRect(30,43,230,3);var s=new Image;if(s.crossOrigin="Anonymous",e.tracks&&(s.src=e.artists[0].images[0].url||""),s.onload=function(){if(s.naturalWidth<s.naturalHeight){var e=(s.naturalHeight-s.naturalWidth)/2;n.drawImage(s,0,e,s.naturalWidth,s.naturalWidth,290,90,140,140),n.drawImage(s,0,e,s.naturalWidth,s.naturalWidth,280,105,160,160),n.drawImage(s,0,e,s.naturalWidth,s.naturalWidth,265,125,190,190),n.drawImage(s,0,e,s.naturalWidth,s.naturalWidth,250,150,220,220)}else if(s.naturalWidth>s.naturalHeight){var t=(s.naturalWidth-s.naturalHeight)/2;n.drawImage(s,t,0,s.naturalHeight,s.naturalHeight,290,90,140,140),n.drawImage(s,t,0,s.naturalHeight,s.naturalHeight,280,105,160,160),n.drawImage(s,t,0,s.naturalHeight,s.naturalHeight,265,125,190,190),n.drawImage(s,t,0,s.naturalHeight,s.naturalHeight,250,150,220,220)}else n.drawImage(s,290,90,140,140),n.drawImage(s,280,105,160,160),n.drawImage(s,265,125,190,190),n.drawImage(s,250,150,220,220)},t.LightVibrant){var c=t.LightVibrant.getRgb();n.fillStyle="rgb("+c[0]+","+c[1]+","+c[2]+")"}else n.fillStyle="rgb(209,255,106)";n.font="18px 'Circular Spotify'",n.fillText("TOP ARTISTS",30,106),n.fillStyle="rgb(255,255,255)",n.font="20px 'Circular Spotify'";for(var m=0;m<5;m++)if(e.artists[m]&&0!=Object.keys(e.artists[m]).length){var u=e.artists[m].name,d=n.measureText(u).width;if(d>200){var g=d/u.length,f=Math.ceil((d-200)/g);u=i(u,f+1)}o(n,u,30,133+28*m)}if(t.LightVibrant){var h=t.LightVibrant.getRgb();n.fillStyle="rgb("+h[0]+","+h[1]+","+h[2]+")"}else n.fillStyle="rgb(209,255,106)";n.font="18px 'Circular Spotify'",o(n,"TOP SONGS",30,320),n.fillStyle="rgb(255,255,255)",n.font="20px 'Circular Spotify'";for(var p=0;p<5;p++)if(e.tracks[p]){var v=e.tracks[p].name,E=n.measureText(v).width;if(E>200){var b=E/v.length,w=Math.ceil((E-200)/b);v=i(v,w+1)}o(n,v,30,348+28*p)}if(t.LightVibrant){var y=t.LightVibrant.getRgb();n.fillStyle="rgb("+y[0]+","+y[1]+","+y[2]+")"}else n.fillStyle="rgb(209,255,106)";if(n.font="18px 'Circular Spotify'",o(n,"TOP GENRE",250,430),n.fillStyle="rgb(255,255,255)",n.font="24px 'Circular Spotify'",e.genres&&e.genres[0][0]){var N=e.genres[0][0],S=N.charAt(0).toUpperCase()+N.slice(1);o(n,S,250,460)}if(t.DarkVibrant){var k=t.DarkVibrant.getRgb();n.fillStyle="rgba("+k[0]+","+k[1]+","+k[2]+", 50)"}else n.fillStyle="rgb(255,255,255,50)";n.font="12px 'Circular Spotify'",o(n,"bit.ly/quarantine-wrapped",305,66)},o=function(e,t,a,n){e.fillText(t,a,n)};return Object(n.useEffect)((function(){e.finished>=3&&function(){var t="";e.tracks&&(t=e.artists[0].images[0].url||""),y.a.from(t).getPalette((function(e,t){t&&(l({palette:t}),c(t))}))}()}),[e.finished]),r.a.createElement("div",{className:"canvas-graphic-wrapper"},r.a.createElement("div",{className:"canvas-graphic"},r.a.createElement("div",{className:"canvas-title"},r.a.createElement("h1",null,"Share with the world."),r.a.createElement("h3",null,"Or hide it away forever."),r.a.createElement("h3",null,"Your choice, really."),r.a.createElement("button",{onClick:function(){var e=document.getElementById("downloadable").toDataURL("image/png");e=(e=e.replace(/^data:image\/[^;]*/,"data:application/octet-stream")).replace(/^data:application\/octet-stream/,"data:application/octet-stream;headers=Content-Disposition%3A%20attachment%3B%20filename=Canvas.png");var t=document.createElement("a");t.download="quarantine-wrapped.png",t.href=e,t.click()},className:"download-btn"},"Download")),r.a.createElement("canvas",{id:"downloadable",width:"500",height:"500"})))},S=a(8);var k=function(e){return r.a.createElement("div",{className:"loading"},0===e.state?r.a.createElement("h2",null,"Gathering your Spotify data..."):r.a.createElement("div",null,r.a.createElement("h2",null,"Looks like your authorization token has expired."),r.a.createElement("button",null,r.a.createElement("a",{href:"/"},"Try Again"))))};var O=function(e){var t=Object(n.useState)({chosen:!1,timeframe:2,tracks:[{}]}),a=Object(s.a)(t,2),l=a[0],i=a[1],c=Object(n.useState)([{}]),u=Object(s.a)(c,2),d=u[0],g=u[1],h=Object(n.useState)(0),v=Object(s.a)(h,2),w=v[0],y=v[1],O=Object(n.useState)([{}]),j=Object(s.a)(O,2),T=j[0],A=j[1],x=Object(n.useState)(1),W=Object(s.a)(x,2),C=W[0],I=W[1],L=Object(n.useState)(0),R=Object(s.a)(L,2),H=R[0],M=R[1];(new o.a).setAccessToken(e.token);var V={1:"short_term",2:"medium_term",3:"long_term"},q="#d1ff6a",D="#48937e",P="#e21ca4",_="#191414";Object(n.useEffect)((function(){}),[i]);var G=function(e){i(Object(f.a)(Object(f.a)({},l),{},{timeframe:e,chosen:!0}))};return r.a.createElement("div",{className:"summary"},l.chosen?r.a.createElement("div",null,w<3?r.a.createElement(S.a,null,r.a.createElement(k,{state:H})):r.a.createElement(r.a.Fragment,null),r.a.createElement("div",{className:"credit"},"Made with \u2665 by ",r.a.createElement("a",{href:"https://clawang.github.io/",id:"credit-link"},"Claire Wang"),"."),r.a.createElement("div",{className:"navigation"},r.a.createElement("p",null,C," / 4")),r.a.createElement("div",{className:"summary-content"},r.a.createElement(S.a,{className:"full-height",onScroll:function(){var e=document.querySelector(".full-height"),t=document.querySelector(".top-songs-wrapper"),a=document.querySelector(".genres-wrapper"),n=document.querySelector(".canvas-graphic-wrapper"),r=document.querySelector(".summary-bg");e.scrollTop<t.offsetTop-500?(r.style.backgroundColor=P,I(1)):e.scrollTop>=t.offsetTop-500&&e.scrollTop<a.offsetTop-500?(r.style.backgroundColor=_,I(2)):e.scrollTop>=a.offsetTop-500&&e.scrollTop<n.offsetTop-500?(r.style.backgroundColor=q,I(3)):e.scrollTop>=n.offsetTop-500&&(r.style.backgroundColor=D,I(4))}},r.a.createElement(p,{token:e.token,timeframe:V[l.timeframe],updateArtists:function(e){g(e),y((function(e){return e+1}))},setError:M}),r.a.createElement(E,{token:e.token,timeframe:V[l.timeframe],updateTracks:function(e){i(Object(f.a)(Object(f.a)({},l),{},{tracks:e})),y((function(e){return e+1}))}}),r.a.createElement(b,{token:e.token,timeframe:V[l.timeframe],updateGenres:function(e){var t=m(e);A(t),y((function(e){return e+1}))}}),r.a.createElement(N,{artists:d,tracks:l.tracks,genres:T,finished:w}))),r.a.createElement("div",{className:"summary-bg"})):r.a.createElement(S.a,null,r.a.createElement("div",{className:"time-selection"},r.a.createElement("h1",null,"See data from the past:"),r.a.createElement("div",{className:"time-selection-buttons"},r.a.createElement("button",{onClick:function(){return G(1)}},"4 Weeks"),r.a.createElement("button",{onClick:function(){return G(2)}},"6 Months"),r.a.createElement("button",{onClick:function(){return G(3)}},"2 Years")))))};var j=function(){var e=Object(n.useState)({loggedIn:!1,token:""}),t=Object(s.a)(e,2),a=t[0],l=t[1],i=new o.a;return Object(n.useEffect)((function(){var e=function(){var e,t={},a=/([^&;=]+)=?([^&;]*)/g,n=window.location.hash.substring(1);for(e=a.exec(n);e;)t[e[1]]=decodeURIComponent(e[2]),e=a.exec(n);return t}().access_token;e&&i.setAccessToken(e),l({loggedIn:!!e,token:e})}),[l]),r.a.createElement("div",{className:"App"},a.loggedIn?r.a.createElement("div",null,r.a.createElement(O,{token:a.token})):r.a.createElement(S.a,null,r.a.createElement("div",{className:"start-screen"},r.a.createElement("div",null,r.a.createElement("div",{className:"heading-1"},r.a.createElement("h1",null,"Ready for your")),r.a.createElement("div",{className:"heading-2"},r.a.createElement("h1",null,"Quarantine Wrapped?")),r.a.createElement("div",{className:"start-descrip"},r.a.createElement("h3",{className:"green"},"Relive and discover the artists and music that have gotten you through."),r.a.createElement("button",null,r.a.createElement("a",{href:"/login"}," Login to Spotify "))),r.a.createElement("p",{className:"disclaimer"},"* NOT affiliated with Spotify")))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},70:function(e,t,a){e.exports=a(199)},75:function(e,t,a){},76:function(e,t,a){}},[[70,1,2]]]);
//# sourceMappingURL=main.00e08a75.chunk.js.map