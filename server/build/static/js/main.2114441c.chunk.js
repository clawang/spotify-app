(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{198:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(66),c=a.n(l),i=(a(74),a(1)),s=(a(75),a(2)),o=a.n(s);function m(e){var t=[];for(var a in e)"pop"!==a&&"edm"!==a&&"rap"!==a&&t.push([a,e[a]]);return t.sort((function(e,t){return t[1]-e[1]})),t}function u(e,t){e.hasOwnProperty(t)?e[t]++:e[t]=1}function f(e,t){for(var a=0,n=0,r=[],l=e.length-1;a<t&&a<l;){if(e[n]){var c=e[n][0];"pop"!==c&&"edm"!==c&&"rap"!==c?(r.push(c),a++):l-=1}n++}return r}var g=function(e){var t=Object(n.useState)({topArtists:[{}]}),a=Object(i.a)(t,2),l=a[0],c=a[1],s=new o.a;return s.setAccessToken(e.token),Object(n.useEffect)((function(){!function(){var t={time_range:e.timeframe};s.getMyTopArtists(t).then((function(t){c({topSongs:l.topSongs,topArtists:t.items}),e.updateArtists(t.items)}))}()}),[c]),r.a.createElement("div",{className:"top-artists-wrapper"},l.topArtists[0].name?r.a.createElement("div",{className:"top-artists"},r.a.createElement("h1",null,"Top Artists"),r.a.createElement("div",{className:"artists-wrapper"},l.topArtists.slice(0,3).map((function(e,t){return r.a.createElement("div",{className:"artist-wrapper",key:t},r.a.createElement("div",{className:"artist-images"},r.a.createElement("img",{src:e.images[0].url,className:"img1"}),r.a.createElement("img",{src:e.images[0].url,className:"img2"}),r.a.createElement("img",{src:e.images[0].url,className:"img3"})),r.a.createElement("h3",{className:"black"},"#",t+1),r.a.createElement("h3",{className:"green"},e.name))})))):r.a.createElement("p",null,"Loading..."))};var p=function(e){var t=Object(n.useState)({topSongs:[{}]}),a=Object(i.a)(t,2),l=a[0],c=a[1],s=new o.a;return s.setAccessToken(e.token),Object(n.useEffect)((function(){!function(){var t={time_range:e.timeframe};s.getMyTopTracks(t).then((function(t){c({topSongs:t.items}),e.updateTracks(t.items)}))}()}),[c]),r.a.createElement("div",{className:"top-songs-wrapper"},l.topSongs[0].name?r.a.createElement("div",{className:"top-songs"},r.a.createElement("div",{className:"song-art"},r.a.createElement("img",{src:l.topSongs[0].album.images[0].url})),r.a.createElement("div",{className:"songs"},r.a.createElement("h2",null,"Your Top Songs:"),l.topSongs.slice(0,5).map((function(e,t){return r.a.createElement("div",{className:"song-wrapper",key:t},r.a.createElement("div",{className:"song-number"},r.a.createElement("h3",null,"#",t+1)),r.a.createElement("div",{className:"song-details"},r.a.createElement("h3",null,'"',e.name,'"'),r.a.createElement("p",{className:"pink"},function(e,t){var a="";return e.forEach((function(n,r){a+=n[t],r<e.length-1&&(a+=", ")})),a}(e.artists,"name"))))})))):r.a.createElement("p",null,"Loading..."))};var d=function(e){var t=Object(n.useState)({genres:{}}),a=Object(i.a)(t,2),l=a[0],c=a[1],s=[{}],g=new o.a;g.setAccessToken(e.token),Object(n.useEffect)((function(){!function(){var t={time_range:e.timeframe};g.getMyTopArtists(t).then((function(e){s=e.items,c({genres:l.genres}),p()}))}()}),[c]);var p=function(){s.forEach((function(e){e.genres&&e.genres.forEach((function(e){var t=l.genres;u(t,e),c({genres:t})}))})),e.updateGenres(l.genres)};return r.a.createElement("div",{className:"genres-wrapper"},r.a.createElement("div",{className:"genres"},r.a.createElement("h2",null,"Your Top Niche Genres"),r.a.createElement("p",null,"Ever wondered what subgenres of music you listen to most often?"),r.a.createElement("div",{className:"genre-level-wrapper"},function(e){if(Object.keys(e).length>0){var t=[],a=f(m(e),5).map((function(e,t){return r.a.createElement("div",{className:"genre-level",key:t},r.a.createElement("div",{className:"genre-level-front"},r.a.createElement("h3",null,e)),r.a.createElement("div",{className:"genre-level-side"}))}));return t[0]=a[4],t[1]=a[3],t[2]=a[1],t[3]=a[0],t[4]=a[2],t}return r.a.createElement("p",null,"N/A")}(l.genres))))},v=a(67),h=a.n(v);var E=function(e){var t=this,a=Object(n.useState)({palette:{}}),l=Object(i.a)(a,2),c=(l[0],l[1]),s=function(t){var a=document.getElementById("downloadable");a.width=2*a.clientWidth,a.height=2*a.clientHeight;var n=a.getContext("2d");if(n.scale(2,2),t.DarkMuted){var r=t.DarkMuted.getRgb();n.fillStyle="rgb("+r[0]+","+r[1]+","+r[2]+")"}else n.fillStyle="rgb(0,0,0)";if(n.fillRect(0,0,a.width,a.height),n.fillStyle="rgb(255,255,255)",n.font="16px 'Circular Spotify Tx T Black'",t.Vibrant){var l=t.Vibrant.getRgb();n.fillStyle="rgb("+l[0]+","+l[1]+","+l[2]+")"}else n.fillStyle="rgb(226,28,164)";n.fillText("QUARANTINE WRAPPED",270,50),n.fillRect(30,43,230,3);var c=new Image;if(e.tracks&&(c.src=e.artists[0].images[0].url||""),c.onload=function(){n.drawImage(c,290,90,140,130),n.drawImage(c,280,115,160,145),n.drawImage(c,270,140,180,170),n.drawImage(c,250,170,220,210)},t.LightVibrant){var i=t.LightVibrant.getRgb();n.fillStyle="rgb("+i[0]+","+i[1]+","+i[2]+")"}else n.fillStyle="rgb(209,255,106)";n.font="18px 'Circular Spotify Tx T Black'",n.fillText("TOP ARTISTS",30,106),n.fillStyle="rgb(255,255,255)",n.font="20px 'Circular Spotify Tx T Black'";for(var s=0;s<5;s++)if(e.artists[s]&&0!=Object.keys(e.artists[s]).length){var m=e.artists[s].name;console.log(e.artists[s]),m.length>19&&(m=m.substring(0,19).concat("..")),o(n,m,30,133+28*s)}if(t.LightVibrant){var u=t.LightVibrant.getRgb();n.fillStyle="rgb("+u[0]+","+u[1]+","+u[2]+")"}else n.fillStyle="rgb(209,255,106)";n.font="18px 'Circular Spotify Tx T Black'",o(n,"TOP SONGS",30,320),n.fillStyle="rgb(255,255,255)",n.font="20px 'Circular Spotify Tx T Black'";for(var f=0;f<5;f++)if(e.tracks[f]){var g=e.tracks[f].name;g.length>19&&(g=g.substring(0,19).concat("..")),o(n,g,30,348+28*f)}if(t.LightVibrant){var p=t.LightVibrant.getRgb();n.fillStyle="rgb("+p[0]+","+p[1]+","+p[2]+")"}else n.fillStyle="rgb(209,255,106)";if(n.font="18px 'Circular Spotify Tx T Black'",o(n,"TOP GENRE",250,430),n.fillStyle="rgb(255,255,255)",n.font="24px 'Circular Spotify Tx T Black'",e.genres&&e.genres[0][0]){var d=e.genres[0][0],v=d.charAt(0).toUpperCase()+d.slice(1);o(n,v,250,460)}if(t.DarkVibrant){var h=t.DarkVibrant.getRgb();n.fillStyle="rgba("+h[0]+","+h[1]+","+h[2]+", 50)"}else n.fillStyle="rgb(255,255,255,50)";n.font="12px 'Circular Spotify Tx T Black'",o(n,"bit.ly/quarantine-wrapped",305,66)},o=function(e,t,a,n){e.fillText(t,a,n)};return Object(n.useEffect)((function(){console.log(e.finished),e.finished>=3&&function(){var t="";e.tracks&&(t=e.artists[0].images[0].url||""),h.a.from(t).getPalette((function(e,t){t&&(console.log(t),c({palette:t}),s(t))}))}()}),[e.finished]),r.a.createElement("div",{className:"canvas-graphic-wrapper"},r.a.createElement("div",{className:"canvas-graphic"},r.a.createElement("div",{className:"canvas-title"},r.a.createElement("h1",null,"Share with the world."),r.a.createElement("h3",null,"Or hide it away forever."),r.a.createElement("h3",null,"Your choice, really."),r.a.createElement("button",{onClick:function(){var e=document.getElementById("downloadable").toDataURL("image/png");e=(e=e.replace(/^data:image\/[^;]*/,"data:application/octet-stream")).replace(/^data:application\/octet-stream/,"data:application/octet-stream;headers=Content-Disposition%3A%20attachment%3B%20filename=Canvas.png"),t.href=e},style:{marginTop:"2em"}},"Download")),r.a.createElement("canvas",{id:"downloadable",width:"500",height:"500"})))};var b=function(e){var t=Object(n.useState)({timeframe:0,tracks:[{}]}),a=Object(i.a)(t,2),l=a[0],c=a[1],s=Object(n.useState)([{}]),u=Object(i.a)(s,2),f=u[0],v=u[1],h=Object(n.useState)(0),b=Object(i.a)(h,2),k=b[0],y=b[1],S=Object(n.useState)([{}]),T=Object(i.a)(S,2),w=T[0],N=T[1],O=Object(n.useState)(1),j=Object(i.a)(O,2),x=j[0],A=j[1];(new o.a).setAccessToken(e.token);var C={1:"short_term",2:"medium_term",3:"long_term"};return Object(n.useEffect)((function(){c({timeframe:2})}),[c]),r.a.createElement("div",null,0===l.timeframe?r.a.createElement("div",{className:"options"},r.a.createElement("div",{onClick:function(){return c({timeframe:1})}},r.a.createElement("h2",null,"4 Weeks")),r.a.createElement("div",{onClick:function(){return c({timeframe:2})}},r.a.createElement("h2",null,"6 months")),r.a.createElement("div",{onClick:function(){return c({timeframe:3})}},r.a.createElement("h2",null,"All Time"))):r.a.createElement("div",{className:"summary"},r.a.createElement("div",{className:"credit"},"Made with \u2665 by ",r.a.createElement("a",{href:"https://clawang.github.io/"},"Claire Wang"),"."),r.a.createElement("div",{className:"navigation"},r.a.createElement("p",null,x," / 4")),r.a.createElement("div",{className:"summary-content",onScroll:function(){var e=document.querySelector(".summary-content"),t=document.querySelector(".top-songs-wrapper"),a=document.querySelector(".genres-wrapper"),n=document.querySelector(".canvas-graphic-wrapper"),r=document.querySelector(".summary-bg");e.scrollTop<t.offsetTop-500?(r.style.backgroundColor="#e21ca4",A(1)):e.scrollTop>=t.offsetTop-500&&e.scrollTop<a.offsetTop-500?(r.style.backgroundColor="#191414",A(2)):e.scrollTop>=a.offsetTop-500&&e.scrollTop<n.offsetTop-500?(r.style.backgroundColor="#d1ff6a",A(3)):e.scrollTop>=n.offsetTop-500&&(r.style.backgroundColor="#48937e",A(4))}},r.a.createElement(g,{token:e.token,timeframe:C[l.timeframe],updateArtists:function(e){v(e),y((function(e){return e+1}))}}),r.a.createElement(p,{token:e.token,timeframe:C[l.timeframe],updateTracks:function(e){c({timeframe:l.timeframe,tracks:e}),y((function(e){return e+1}))}}),r.a.createElement(d,{token:e.token,timeframe:C[l.timeframe],updateGenres:function(e){var t=m(e);N(t),y((function(e){return e+1}))}}),r.a.createElement(E,{artists:f,tracks:l.tracks,genres:w,finished:k})),r.a.createElement("div",{className:"summary-bg"})))},k=a(68),y=a.n(k);var S=function(){var e=Object(n.useState)({loggedIn:!1,token:""}),t=Object(i.a)(e,2),a=t[0],l=t[1],c=new o.a;return Object(n.useEffect)((function(){var e=function(){var e,t={},a=/([^&;=]+)=?([^&;]*)/g,n=window.location.hash.substring(1);for(e=a.exec(n);e;)t[e[1]]=decodeURIComponent(e[2]),e=a.exec(n);return t}().access_token;e&&c.setAccessToken(e),l({loggedIn:!!e,token:e})}),[l]),y.a.init(),r.a.createElement("div",{className:"App"},a.loggedIn?r.a.createElement("div",null,r.a.createElement(b,{token:a.token})):r.a.createElement("div",{className:"start-screen"},r.a.createElement("div",null,r.a.createElement("div",{className:"heading-1"},r.a.createElement("h1",null,"Ready for your")),r.a.createElement("div",{className:"heading-2"},r.a.createElement("h1",null,"Quarantine Wrapped?")),r.a.createElement("div",{className:"start-descrip"},r.a.createElement("h3",{className:"green"},"Relive and discover the artists and music that have gotten you through."),r.a.createElement("button",null,r.a.createElement("a",{href:"http://localhost:8888/login"}," Login to Spotify "))),r.a.createElement("p",{className:"disclaimer"},"* NOT affiliated with Spotify"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},69:function(e,t,a){e.exports=a(198)},74:function(e,t,a){},75:function(e,t,a){}},[[69,1,2]]]);
//# sourceMappingURL=main.2114441c.chunk.js.map